"use client";

import { useState } from "react";
import { FileCheck, Loader2 } from "lucide-react";
import { api, ComplianceAssessment } from "@/lib/api";

type Framework = "GDPR" | "SOC2" | "HIPAA";

export default function DashboardPage() {
  const [framework, setFramework] = useState<Framework>("GDPR");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ComplianceAssessment | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runAssessment = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await api<ComplianceAssessment>("/assessments", {
        method: "POST",
        body: JSON.stringify({ framework }),
      });
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center gap-3">
          <FileCheck className="h-6 w-6 text-brand" style={{ color: "#7C3AED" }} />
          <h1 className="text-xl font-semibold" style={{ color: "#7C3AED" }}>
            DClaw Compliance
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Compliance Assessment</h2>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Framework
            </label>
            <select
              value={framework}
              onChange={(e) => setFramework(e.target.value as Framework)}
              className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              style={{ focusBorderColor: "#7C3AED" } as React.CSSProperties}
            >
              <option value="GDPR">GDPR</option>
              <option value="SOC2">SOC2</option>
              <option value="HIPAA">HIPAA</option>
            </select>
          </div>

          <button
            onClick={runAssessment}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ backgroundColor: "#7C3AED" }}
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Run Assessment
          </button>

          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Compliance score</p>
                <p className="mt-1 text-2xl font-bold" style={{ color: "#7C3AED" }}>
                  {result.compliance_score}%
                </p>
              </div>
              <div className="rounded-lg border bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Passed controls</p>
                <p className="mt-1 text-lg font-semibold text-green-700">
                  {result.passed_controls.length}
                </p>
                <ul className="mt-1 list-inside list-disc text-xs text-gray-600">
                  {result.passed_controls.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Failed controls</p>
                <p className="mt-1 text-lg font-semibold text-red-700">
                  {result.failed_controls.length}
                </p>
                <ul className="mt-1 list-inside list-disc text-xs text-gray-600">
                  {result.failed_controls.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Remediation plan</p>
                <ul className="mt-1 list-inside list-disc text-xs text-gray-600">
                  {result.remediation_plan.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
