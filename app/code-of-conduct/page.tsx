import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata("Code of Conduct", "Professional standards for respectful and inclusive conference participation.");

export default function CodeOfConductPage() {
  return (
    <main className="section space-y-6">
      <h1 className="text-3xl font-bold">Code of Conduct</h1>
      <section className="card p-6 space-y-4 text-slate-700">
        <p>All participants are expected to uphold professional, respectful, and inclusive behaviour in all conference activities, including sessions, workshops, and networking events.</p>
        <p>Harassment, discrimination, intimidation, and disruptive behaviour are not tolerated. Participants must comply with venue rules and applicable legal requirements.</p>
      </section>
      <section className="card p-6 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">Reporting and Enforcement</h2>
        <p>To report an incident, contact the conference team immediately at <strong>{site.contactEmail}</strong>. Reports are handled promptly and confidentially where possible.</p>
        <p>The organising committee may issue warnings, remove access badges, or deny future participation depending on the severity of conduct violations.</p>
      </section>
    </main>
  );
}
