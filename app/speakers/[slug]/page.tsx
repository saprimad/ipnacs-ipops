import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { speakers } from "@/lib/site";

export function generateStaticParams() {
  return speakers.map((speaker) => ({ slug: speaker.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const speaker = speakers.find((item) => item.slug === params.slug);
  if (!speaker) return buildMetadata("Speaker Not Found");
  return buildMetadata(speaker.name, speaker.topic);
}

export default function SpeakerDetailPage({ params }: { params: { slug: string } }) {
  const speaker = speakers.find((item) => item.slug === params.slug);
  if (!speaker) notFound();

  return (
    <main className="section">
      <article className="card p-8">
        <h1 className="text-3xl font-bold">{speaker.name}</h1>
        <p className="mt-2 text-slate-600">{speaker.title}</p>
        <p className="text-slate-600">{speaker.organization}</p>
        <h2 className="mt-6 text-xl font-semibold">Featured Session</h2>
        <p className="mt-2 text-slate-700">{speaker.topic}</p>
        <h2 className="mt-6 text-xl font-semibold">Biography</h2>
        <p className="mt-2 text-slate-700">{speaker.bio}</p>
      </article>
    </main>
  );
}
