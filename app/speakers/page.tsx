import Image from "next/image";

type SpeakerCategory = "Plenary" | "Invited" | "Professorial Lecture";

type Speaker = {
  name: string;
  affiliationFull: string;
  affiliationShort?: string;
  category: SpeakerCategory;
  title?: string;
  image?: string; // /public path e.g. /speakers/rohana.jpg
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
    category: "Plenary",
    title: "TBC",
  },
  {
    name: "Professor Dr Rohana Abd Ghani",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Plenary",
    title:
      "Digital Frontier in Obesity Management: Leveraging Digital Transformation for Better Outcomes.",
    image: "/speakers/rohana.jpg",
  },
  {
    name: "Professor Dr Kazunori Akimoto",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Plenary",
    title: "TBC",
  },
  {
    name: "Professor Dr Varisa Pongrakhananon",
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
    name: "Associate Professor Dr Shazia Jamshed",
    affiliationFull: "International Medical University",
    affiliationShort: "IMU",
    category: "Invited",
    title: "TBC",
    image: "/speakers/shazia.jpg",
  },
  {
    name: "Associate Professor Dr Kosuke Kusamori",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Invited",
    title: "Regenerative cell-based therapy for lymph node reconstruction",
  },
  {
    name: "Professor Dr Wong Tin Wui",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Invited",
    title:
      "Natural product discovery and delivery: Modulation of gut-liver axis for hepatic diseases",
    image: "/speakers/wong.jpg",
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
    image: "/speakers/ismat.jpg",
  },
  {
    name: "Professor Dr Teh Lay Kek",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Invited",
    title:
      "From Pharmacogenomics to Pharmacophytogenomics: Diversity Driven Pathways in Precision Health",
    image: "/speakers/teh.png",
  },
  {
    name: "Professor Dr Takehisa Hanawa",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Invited",
    title:
      "Pharmaceutical Technology for the Improvement of the Bioavailability of Drugs",
  },
  {
    name: "Professor Dr Aleth Therese Dacanay",
    affiliationFull: "University of Santo Tomas",
    affiliationShort: "UST",
    category: "Invited",
    title:
      "From Classroom to Connected Care: Digital Transformation of Pharmacy Education and Practice",
    image: "/speakers/aleth.jpg",
  },

  // PROFESSORIAL LECTURE
  {
    name: "Professor Dr Kalavathy Ramasamy",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Professorial Lecture",
    title: "TBC",
    image: "/speakers/kala.png",
  },
];

function SpeakerCard({ s }: { s: Speaker }) {
  const displayTitle =
    s.title && s.title.trim().length > 0 ? s.title.trim() : "TBC";

  const affiliation =
    s.affiliationShort && s.affiliationShort.trim() !== ""
      ? `${s.affiliationFull} (${s.affiliationShort})`
      : s.affiliationFull;

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Image frame (rounded-square, not circle) */}
      <div className="p-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
          {s.image ? (
            <Image
              src={s.image}
              alt={s.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-slate-200" />
                <div className="text-sm font-semibold text-slate-600">TBC</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Text */}
      <div className="px-5 pb-6">
        <h3 className="text-base font-bold text-slate-900">{s.name}</h3>

        <p className="mt-1 text-sm text-slate-600">{affiliation}</p>

        <p className="mt-3 text-sm italic leading-relaxed text-slate-700 line-clamp-4">
          {displayTitle}
        </p>
      </div>
    </div>
  );
}

function Section({ title, items }: { title: string; items: Speaker[] }) {
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
          We are excited to welcome a distinguished lineup of speakers who will
          share their expertise and insights at this conference. Additional
          speakers will be announced progressively. Please check back here for
          updates as we unveil the academics and professionals who will be
          joining us.
        </p>
      </header>

      <Section title="Plenary Speakers" items={plenary} />
      <Section title="Invited Speakers" items={invited} />
      <Section title="Professorial Lecture" items={professorial} />
    </main>
  );
}