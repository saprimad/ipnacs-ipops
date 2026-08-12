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

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-3 text-center">
        <p className="text-sm font-semibold text-slate-500">
          {speaker.category}
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {speaker.name}
        </h1>

        <p className="text-slate-600">{affiliation}</p>
      </header>

      <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="p-6 sm:p-8">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
            {speaker.image ? (
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                sizes="(max-width: 640px) 90vw, 560px"
                className="object-cover object-top"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-semibold text-slate-600">
                Photo to be announced
              </div>
            )}
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-sm font-semibold text-slate-700">
              Talk Title
            </h2>

            <p className="mt-2 italic leading-relaxed text-slate-800">
              {talkTitle}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
