import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata("About", "Conference background, theme, objectives, and target participants.");

export default function AboutPage() {
  return (
    <main className="section space-y-8">
      <header>
        <h1 className="text-3xl font-bold">About the Conference</h1>
        <p className="mt-3 max-w-4xl text-slate-700">{site.fullConferenceName}</p>
        <p className="mt-3 max-w-4xl text-slate-700">{site.description}</p>
      </header>

      <section className="card p-6">
        <h2 className="text-xl font-semibold">Conference Theme and Objectives</h2>
        <p className="mt-3 text-slate-700">{site.tagline}</p>
        <p className="mt-3 text-slate-700">The conference promotes high-quality research exchange on digital transformation in pharmacology, pharmacy, nutraceutical science, cosmetic science, and related healthcare disciplines.</p>
      </section>

      <section className="card p-6">
        <h2 className="text-xl font-semibold">Who Should Attend</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Academic researchers and postgraduate scholars</li>
          <li>Pharmacists, clinicians, and health professionals</li>
          <li>Industry innovators and R&D teams</li>
          <li>Policy, regulatory, and ethics stakeholders</li>
        </ul>
      </section>
    </main>
  );
}
