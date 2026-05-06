export interface ComplianceAssessment {
  id: string;
  framework: string;
  compliance_score: number;
  passed_controls: string[];
  failed_controls: string[];
  remediation_plan: string[];
  created_at: string;
}

export interface Control {
  name: string;
  status: "pass" | "fail";
}

export async function api<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `/api/v1${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return (await res.json()) as T;
}
