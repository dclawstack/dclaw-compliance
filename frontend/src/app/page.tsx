import Link from "next/link";
import { FileCheck } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="rounded-full bg-brand/10 p-4">
          <FileCheck className="h-12 w-12 text-brand" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "#7C3AED" }}>
          DClaw Compliance
        </h1>
        <p className="text-lg text-gray-600">
          GDPR, SOC2, HIPAA automation
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
          style={{ backgroundColor: "#7C3AED" }}
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
