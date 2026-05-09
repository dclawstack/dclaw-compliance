# DClaw Compliance — v1.2 Feature Roadmap

> Based on Y Combinator vertical SaaS principles, trending GitHub repos (chef-compliance, inspec), AI product research (Vanta, Drata, Secureframe, Hyperproof)

## Pre-Flight Checklist

- [ ] `frontend/package-lock.json` committed after any `npm install` / dependency change
- [ ] `frontend/next-env.d.ts` exists and is committed
- [ ] `docker-compose.yml` healthchecks correct
- [ ] `frontend/Dockerfile` declares `ARG NEXT_PUBLIC_API_URL` before `RUN npm run build`

## v1.0 Feature Inventory (Current)

- [ ] Compliance framework CRUD
- [ ] Control mapping
- [ ] Evidence collection
- [ ] Basic reporting
- [ ] Real backend CRUD (no mocks)
- [ ] Docker + Helm deployment
- [ ] Alembic migrations
- [ ] Backend tests

---

## v1.2 Roadmap

### P0 — Must Have (Ship in v1.0, demo-ready)

#### 1. AI Compliance Copilot (Regulatory Guide)
**Description:** AI assistant that interprets regulations, suggests controls, and monitors compliance status. "What controls do we need for SOC 2 Type II?"
- **AI Angle:** Regulatory knowledge base. Control suggestion engine. Compliance gap analysis.
- **Backend:** `/api/v1/ai/compliance-chat` endpoint. Regulation parser.
- **Frontend:** Chat with regulation references. Compliance scorecard.
- **Files:** `backend/app/services/compliance_ai.py`, `frontend/src/components/compliance-copilot.tsx`

#### 2. Framework & Control Management
**Description:** Manage controls across multiple frameworks with mapping, inheritance, and versioning.
- **Backend:** Framework model with control hierarchy.
- **Frontend:** Framework comparison matrix. Control tree.
- **Files:** `backend/app/services/frameworks.py`

#### 3. Automated Evidence Collection
**Description:** Auto-collect evidence from integrations (cloud, HR, security tools). Scheduled refresh.
- **Backend:** Integration connectors with evidence pull.
- **Frontend:** Integration dashboard with sync status.
- **Files:** `backend/app/integrations/evidence_collectors.py`

#### 4. Continuous Control Monitoring
**Description:** Real-time control status with automated testing. Alert on control failures.
- **Backend:** Control test scheduler. Alert engine.
- **Frontend:** Control health dashboard with trend charts.
- **Files:** `backend/app/services/control_monitoring.py`

### P1 — Should Have (v1.1–1.2)

#### 5. AI Gap Analysis & Remediation
**Description:** AI analyzes current state vs framework requirements and suggests remediation steps.
- **AI Angle:** Gap identification + remediation roadmap generation.
- **Backend:** Gap analysis engine.
- **Frontend:** Gap report with prioritized action plan.

#### 6. Vendor Risk Management
**Description:** Assess and monitor third-party vendor compliance. Vendor questionnaires and scoring.
- **Backend:** Vendor model with assessment scoring.
- **Frontend:** Vendor risk matrix. Assessment tracker.

#### 7. Audit-Ready Reporting
**Description:** Generate auditor-ready reports with evidence packages and control narratives.
- **Backend:** Report generator with evidence linking.
- **Frontend:** Report builder with export options.

#### 8. Policy & Procedure Management
**Description:** Manage policy lifecycle: draft → review → approve → distribute → attest.
- **Backend:** Policy workflow engine.
- **Frontend:** Policy library with version history.

### P2 — Could Have (v1.3+)

#### 9. Regulatory Change Tracking
**Description:** Monitor regulatory updates and auto-assess impact on controls.

#### 10. AI-Powered Questionnaire Response
**Description:** Auto-fill security/compliance questionnaires from evidence base.

#### 11. Cross-Framework Harmonization
**Description:** Identify overlapping controls across frameworks to reduce duplicate work.

#### 12. Trust Center / Public Compliance Portal
**Description:** Public-facing page showing compliance status and security posture.

---

## Implementation Priority

1. **Week 1–2:** AI Compliance Copilot (P0.1) + Framework Management (P0.2)
2. **Week 3–4:** Evidence Collection (P0.3) + Control Monitoring (P0.4)
3. **Week 5–6:** Gap Analysis (P1.5) + Vendor Risk (P1.6)
4. **Week 7–8:** Audit Reports (P1.7) + Policy Management (P1.8)
