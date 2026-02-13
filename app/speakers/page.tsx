// app/speakers/page.tsx

import Image from "next/image";

const speakers = [
  {
    topic: "Pharmacology & Precision Medicine",
    track: "Advanced Therapeutics & Precision Medicine",
    role: "Keynote Speaker",
  },
  {
    topic: "Regenerative Medicine",
    track: "Advanced Therapeutics & Precision Medicine",
    role: "Invited Speaker",
  },
  {
    topic: "Pharmaceutical Chemistry",
    track: "Advanced Therapeutics & Precision Medicine",
    role: "Invited Speaker",
  },
  {
    topic: "Pharmacy & Digital Health",
    track: "Digital & Pharmaceutical Innovation",
    role: "Keynote Speaker",
  },
  {
    topic: "Pharmaceutical Technology",
    track: "Digital & Pharmaceutical Innovation",
    role: "Invited Speaker",
  },
  {
    topic: "Cosmetic Science & Innovation",
    track: "Digital & Pharmaceutical Innovation",
    role: "Invited Speaker",
  },
  {
    topic: "Nutraceutical Science",
    track: "Public Health, Nutrition & Governance",
    role: "Invited Speaker",
  },
  {
    topic: "Policy, Regulation & Ethics",
    track: "Public Health, Nutrition & Governance",
    role: "Invited Speaker",
  },
];

export default function SpeakersPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          Invited Speakers
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Distinguished keynote and invited speakers will be announced progressively.
        </p>
      </header>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex justify-center">
              <Image
                src="/speaker-placeholder.png"
                alt="Speaker To Be Announced"
                width={140}
                height={140}
                className="rounded-full object-cover"
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm font-semibold text-brand-900">
                {speaker.role}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                To Be Announced
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {speaker.topic}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {speaker.track}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
