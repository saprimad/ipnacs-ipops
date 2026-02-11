import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { speakers } from "@/lib/site";

export const metadata: Metadata = buildMetadata("Speakers", "Meet keynote and invited speakers presenting at the conference.");

export default function SpeakersPage() {
  return (
    <main className="section">
      <h1 className="text-3xl font-bold">Speakers</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker) => (
          <article key={speaker.slug} className="card p-5">
            <h2 className="text-lg font-semibold">{speaker.name}</h2>
            <p className="mt-1 text-sm text-slate-600">{speaker.title}</p>
            <p className="text-sm text-slate-600">{speaker.organization}</p>
            <p className="mt-2 text-sm text-slate-700">{speaker.topic}</p>
            <Link href={`/speakers/${speaker.slug}`} className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">View profile</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
