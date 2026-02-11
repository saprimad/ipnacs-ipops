import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata("Sponsors", "Sponsorship opportunities and sponsor recognition tiers.");

const tiers = [
  "Platinum: Strategic keynote and exhibition visibility",
  "Gold: Track-level branding and networking access",
  "Silver: Session branding and showcase presence",
  "Academic Partner: Institutional collaboration package"
];

export default function SponsorsPage() {
  return (
    <main className="section space-y-6">
      <h1 className="text-3xl font-bold">Sponsors</h1>
      <section className="card p-6">
        <h2 className="text-xl font-semibold">Sponsorship Tiers</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {tiers.map((tier) => <li key={tier}>{tier}</li>)}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Sponsor Logos</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {site.sponsors.map((sponsor) => (
            <div key={sponsor} className="card flex h-20 items-center justify-center text-xs font-semibold text-slate-600">{sponsor} Logo</div>
          ))}
        </div>
      </section>
      <Link href={`mailto:${site.contactEmail}`} className="inline-block rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">Become a Sponsor</Link>
    </main>
  );
}
