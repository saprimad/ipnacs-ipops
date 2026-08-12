import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import {
  speakerCategories,
  speakers,
  type Speaker,
} from "@/lib/speakers";

export const metadata: Metadata = buildMetadata(
  "Speakers",
  "Meet the plenary, invited and professorial lecture speakers for IPNaCS–IPoPS 2026."
);

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const affiliation =
    speaker.affiliationShort && speaker.affiliationShort.trim() !== ""
      ? `${speaker.affiliationFull} (${speaker.affiliationShort})`
      : speaker.affiliationFull;

  const talkTitle =
    speaker.title && speaker.title.trim() !== "" ? speaker.title.trim() : "TBC";

  return (
    <Link
      href={`/speakers/${speaker.slug}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
        {speaker.image ? (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover object-top transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-600">
            <div className="text-center">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-slate-200" />
              <p>Photo to be announced</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 space-y-2">
        <h2 className="text-base font-bold leading-snug text-slate-950">
          {speaker.name}
        </h2>

        <p className="text-sm text-slate-600">{affiliation}</p>

        <p className="text-sm italic leading-relaxed text-slate-700">
          {talkTitle}
        </p>
      </div>
    </Link>
  );
}

export default function SpeakersPage() {
  return (
    <main className="section">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-[#0F2A4D] sm:text-4xl">
            Speakers
          </h1>

          <p className="max-w-3xl text-slate-700">
            Meet the plenary, invited and professorial lecture speakers for
            IPNaCS–IPoPS 2026.
          </p>
        </header>

        <div className="mt-10 space-y-14">
          {speakerCategories.map((category) => {
            const categorySpeakers = speakers.filter(
              (speaker) => speaker.category === category
            );

            if (categorySpeakers.length === 0) return null;

            return (
              <section key={category} className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0F2A4D]">
                  {category === "Plenary"
                    ? "Plenary Speakers"
                    : category === "Invited"
                      ? "Invited Speakers"
                      : "Professorial Lecture"}
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySpeakers.map((speaker) => (
                    <SpeakerCard key={speaker.slug} speaker={speaker} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
