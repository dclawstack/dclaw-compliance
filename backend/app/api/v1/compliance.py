import random
import uuid
from datetime import datetime, timezone
from typing import List

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class CreateAssessmentRequest(BaseModel):
    framework: str


class ComplianceAssessment(BaseModel):
    id: str
    framework: str
    compliance_score: int
    passed_controls: List[str]
    failed_controls: List[str]
    remediation_plan: List[str]
    created_at: str


class Control(BaseModel):
    name: str
    status: str


@router.post("/assessments", response_model=ComplianceAssessment)
async def create_assessment(payload: CreateAssessmentRequest):
    return ComplianceAssessment(
        id=str(uuid.uuid4()),
        framework=payload.framework,
        compliance_score=random.randint(60, 98),
        passed_controls=["Access control", "Encryption"],
        failed_controls=["Logging"],
        remediation_plan=["Enable audit logs"],
        created_at=datetime.now(timezone.utc).isoformat(),
    )


@router.get("/assessments/{id}/controls", response_model=List[Control])
async def get_controls(id: str):
    return [
        Control(name="Access control", status="pass"),
        Control(name="Encryption", status="pass"),
        Control(name="Logging", status="fail"),
        Control(name="Data retention", status="pass"),
        Control(name="Incident response", status="fail"),
    ]
