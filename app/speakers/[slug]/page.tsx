import Image from "next/image";
import { notFound } from "next/navigation";
import { getSpeakerBySlug, speakers } from "@/lib/speakers";

export async function generateStaticParams() {
  return speakers.map((speaker) => ({
    slug: speaker.slug,
  }));
}

export default async function SpeakerSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const speaker = getSpeakerBySlug(slug);

  if (!speaker) {
    notFound();
  }

  const affiliation =
    speaker.affiliationShort && speaker.affiliationShort.trim() !== ""
      ? `${speaker.affiliationFull} (${speaker.affiliationShort})`
      : speaker.affiliationFull;

  const talkTitle =
    speaker.title && speaker.title.trim() !== "" ? speaker.title.trim() : "TBC";

  const speakerLabel = speaker.speakerLabel ?? `${speaker.category} Speaker`;

  return (
    <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 md:grid-cols-[minmax(260px,0.8fr)_1.2fr]">
          <div className="relative min-h-[360px] bg-slate-100 md:min-h-[520px]">
            {speaker.image ? (
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
            ) : (
              <div className="flex h-full min-h-[360px] items-center justify-center font-semibold text-slate-600">
                Photo to be announced
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center bg-[#0F2A4D] p-7 text-white sm:p-10">
            <span className="inline-flex w-fit rounded-full bg-[#F5C400] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0F2A4D]">
              {speakerLabel}
            </span>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {speaker.name}
            </h1>

            <p className="mt-3 text-base font-medium text-white/80">{affiliation}</p>

            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5C400]">
                Talk Title
              </p>
              <p className="mt-3 text-lg font-semibold italic leading-relaxed sm:text-xl">
                {talkTitle}
              </p>
            </div>

            {speaker.day || speaker.time || speaker.venue ? (
              <div className="mt-7 flex flex-wrap gap-2">
                {speaker.day ? (
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
                    {speaker.day}
                  </span>
                ) : null}
                {speaker.time ? (
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
                    {speaker.time}
                  </span>
                ) : null}
                {speaker.venue ? (
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
                    {speaker.venue}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {speaker.bio ? (
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-[#F5C400]" />
            <h2 className="text-xl font-bold text-[#0F2A4D] sm:text-2xl">
              About the Speaker
            </h2>
          </div>
          <p className="max-w-4xl text-base leading-8 text-slate-700">
            {speaker.bio}
          </p>
        </section>
      ) : null}

      {speaker.abstract ? (
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-[#F5C400]" />
            <h2 className="text-xl font-bold text-[#0F2A4D] sm:text-2xl">
              Talk Abstract
            </h2>
          </div>

          <h3 className="max-w-4xl text-lg font-semibold italic leading-relaxed text-slate-900 sm:text-xl">
            {talkTitle}
          </h3>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            {speaker.abstract}
          </p>
        </section>
      ) : null}
    </main>
  );
}
