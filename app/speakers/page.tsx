// app/speakers/page.tsx

import Image from "next/image";

type SpeakerCategory = "Plenary" | "Invited" | "Professorial Lecture";

type Speaker = {
  name: string;
  affiliationFull: string;
  affiliationShort: string;
  category: SpeakerCategory;
  title?: string;
  image?: string;
};

const speakers: Speaker[] = [

  // PLENARY SPEAKERS
  {
    name: "Dr Azuana Ramli",
    affiliationFull: "Ministry of Health Malaysia",
    affiliationShort: "MOH",
    category: "Plenary",
    title: "",
  },
  {
    name: "TBC",
    affiliationFull: "TBC",
    affiliationShort: "TBC",
    category: "Plenary",
    title: "TBC",
  },
  {
    name: "Prof. Dr. Rohana Abd Ghani",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Plenary",
    title:
      "Digital Frontier in Obesity Management: Leveraging Digital Transformation for Better Outcomes.",
  },
  {
    name: "Prof. Dr. Kazunori Akimoto",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Plenary",
    title: "TBC",
  },
  {
    name: "Prof. Dr. Varisa Pongrakhananon",
    affiliationFull: "Chulalongkorn University",
    affiliationShort: "CU",
    category: "Plenary",
    title: "TBC",
  },
  {
    name: "TBC",
    affiliationFull: "Kyoto University",
    affiliationShort: "Kyoto",
    category: "Plenary",
    title: "TBC",
  },

  // INVITED SPEAKERS
  {
    name: "AP Dr Shazia Jamshed",
    affiliationFull: "International Medical University",
    affiliationShort: "IMU",
    category: "Invited",
    title: "TBC",
  },
  {
    name: "AP Dr. Kosuke Kusamori",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Invited",
    title: "Regenerative cell-based therapy for lymph node reconstruction",
  },
  {
    name: "Prof. Wong Tin Wui",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Invited",
    title:
      "Natural product discovery and delivery: Modulation of gut-liver axis for hepatic diseases",
  },
  {
    name: "TBA",
    affiliationFull: "Universitas Indonesia",
    affiliationShort: "UI",
    category: "Invited",
    title: "TBC",
  },
  {
    name: "Dr Ismat binti Mohd Sulaiman",
    affiliationFull: "Ministry of Health Malaysia",
    affiliationShort: "MOH",
    category: "Invited",
    title:
      "Connected data, transforming pharma: Lessons from MyHDW and AI potential",
  },
  {
    name: "Prof. Teh Lay Kek",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Invited",
    title:
      "From Pharmacogenomics to Pharmacophytogenomics: Diversity Driven Pathways in Precision Health",
  },
  {
    name: "Prof. Dr. Takehisa Hanawa",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Invited",
    title:
      "Pharmaceutical Technology for the Improvement of the Bioavailability of Drugs",
  },
  {
    name: "Prof. Aleth Therese Dacanay",
    affiliationFull: "University of Santo Tomas",
    affiliationShort: "UST",
    category: "Invited",
    title:
      "From Classroom to Connected Care: Digital Transformation of Pharmacy Education and Practice",
  },

  // PROFESSORIAL LECTURE
  {
    name: "Prof. Kalavathy Ramasamy",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Professorial Lecture",
    title: "TBC",
  },
];

function SpeakerCard({ s }: { s: Speaker }) {
  const displayTitle =
    s.title && s.title.trim().length > 0 ? s.title.trim() : "TBC";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex justify-center">
        <Image
          src="/speaker-placeholder.png"
          alt={s.name}
          width={140}
          height={140}
          className="rounded-full object-cover"
        />
      </div>

      <div className="mt-6 text-center">

        <p className="text-sm font-semibold text-brand-900">
          {s.category === "Professorial Lecture"
            ? "Professorial Lecture"
            : `${s.category} Speaker`}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-slate-900">
          {s.name}
        </h3>

        <p className="mt-1 text-sm text-slate-600">
          {s.affiliationFull} ({s.affiliationShort})
        </p>

        <p className="mt-3 text-sm italic text-slate-700">
          {displayTitle}
        </p>

      </div>
    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: Speaker[];
}) {
  return (
    <section className="mt-14">
      <h2 className="text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, idx) => (
          <SpeakerCard key={`${s.name}-${idx}`} s={s} />
        ))}
      </div>
    </section>
  );
}

export default function SpeakersPage() {

  const plenary = speakers.filter((s) => s.category === "Plenary");
  const invited = speakers.filter((s) => s.category === "Invited");
  const professorial = speakers.filter(
    (s) => s.category === "Professorial Lecture"
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

      <header className="space-y-4 text-center">

        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          Conference Speakers
        </h1>

        <p className="mx-auto max-w-3xl text-base text-slate-600">
          We are excited to welcome a distinguished lineup of speakers who
          will share their expertise and insights at this conference.
          Additional speakers will be announced progressively. Please check
          back here for updates as we unveil the academics and professionals
          who will be joining us.
        </p>

      </header>

      <Section title="Plenary Speakers" items={plenary} />
      <Section title="Invited Speakers" items={invited} />
      <Section title="Professorial Lecture" items={professorial} />

    </main>
  );
}