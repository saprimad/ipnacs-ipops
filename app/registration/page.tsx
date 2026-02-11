import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata("Registration", "Registration details, abstract instructions, and fee categories for conference participants.");

export default function RegistrationPage() {
  return (
    <main className="section space-y-8">
      <h1 className="text-3xl font-bold">Registration</h1>

      <section className="card p-6">
        <h2 className="text-xl font-semibold">Abstract Submission Guidelines</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {site.submissionGuidelines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="card p-6">
        <h2 className="text-xl font-semibold">Registration Fees</h2>
        <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-700">Category</th>
                <th className="px-4 py-3 font-semibold text-slate-700">Fee</th>
              </tr>
            </thead>
            <tbody>
              {site.registrationFees.map((item) => (
                <tr key={item.category} className="border-t border-slate-100">
                  <td className="px-4 py-3 text-slate-700">{item.category}</td>
                  <td className="px-4 py-3 text-slate-700">{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Link href={site.registrationUrl} className="inline-block rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">
        Register Now
      </Link>
    </main>
  );
}
