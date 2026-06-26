// app/speakers/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Speakers",
  "Meet the plenary, invited and professorial lecture speakers for IPNaCS–IPoPS 2026."
);

type SpeakerCategory = "Plenary" | "Invited" | "Professorial Lecture";

type Speaker = {
  name: string;
  affiliationFull: string;
  affiliationShort?: string;
  category: SpeakerCategory;
  title?: string;
  image?: string;
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const speakers: Speaker[] = [
  // PLENARY / KEYNOTE SPEAKERS
  {
    name: "Dr Azuana Ramli",
    affiliationFull: "Ministry of Health Malaysia",
    affiliationShort: "MOH",
    category: "Plenary",
    title:
      "Stewarding Connected Innovation: Advancing Digital Transformation Across the Pharmaceutical Ecosystem",
    image: undefined,
  },
  {
    name: "Professor Dr Suzana Shahar",
    affiliationFull: "Univesiti Kebangsaan Malaysia (UKM)",
    category: "Plenary",
    title:
      "Neuroprotective Model for Healthy Aging: The Value of Nutraceutical and Lifestyle Modification",
    image: undefined,
  },
  {
    name: "Professor Dr Rohana Abd Ghani",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Plenary",
    title:
      "Digital Frontier in Obesity Management: Leveraging Digital Transformation for Better Outcomes",
    image: "/speakers/rohana-new.JPG",
  },
  {
    name: "Professor Dr Varisa Pongrakhananon",
    affiliationFull: "Chulalongkorn University",
    affiliationShort: "CU",
    category: "Plenary",
    title:
      "Reprogramming Cancer through Integrative Omics and Computational Pharmacology: From Biomarker Discovery to Precision Targeting of Cellular Signaling",
    image: undefined,
  },
  {
    name: "Professor Dr Kazunori Akimoto",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Plenary",
    title:
      "Data-Driven Integrative Cancer Research: Bridging Computational Discovery, Molecular Mechanisms, and Clinical Outcomes",
    image: "/speakers/akimoto.jpeg",
  },
  {
    name: "Associate Professor Ee Pui Lai, Rachel",
    affiliationFull:
      "Department of Pharmacy and Pharmaceutical Sciences, National University of Singapore",
    affiliationShort: "NUS",
    category: "Plenary",
    title:
      "Precision Design and Programming Trap-and-Kill Peptide Nanonets for Novel Antimicrobial Therapy",
    image: undefined,
  },

  // INVITED SPEAKERS
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
    name: "Associate Professor Dr Kosuke Kusamori",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Invited",
    title: "Regenerative cell-based therapy for lymph node reconstruction",
    image: undefined,
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
    name: "Associate Professor Ho Ket Li",
    affiliationFull: "International Medical University",
    affiliationShort: "IMU",
    category: "Invited",
    title: "AI Revolution: Transformation of Health Education",
    image: undefined,
  },
  {
    name: "Associate Professor Dr Shazia Jamshed",
    affiliationFull: "International Medical University",
    affiliationShort: "IMU",
    category: "Invited",
    title:
      "Applications of Digital Health: Current Insights and Future Directions",
    image: "/speakers/shazia.jpg",
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
    image: undefined,
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
    title: "Professorial Lecture",
    image: "/speakers/kala.png",
  },
];

const categories: SpeakerCategory[] = [
  "Plenary",
  "Invited",
  "Professorial Lecture",
];

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const affiliation =
    speaker.affiliationShort && speaker.affiliationShort.trim() !== ""
      ? `${speaker.affiliationFull} (${speaker.affiliationShort})`
      : speaker.affiliationFull;

  const talkTitle =
    speaker.title && speaker.title.trim() !== "" ? speaker.title.trim() : "TBC";

  return (
    <Link
      href={`/speakers/${slugify(speaker.name)}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
        {speaker.image ? (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-600">
            <div className="text-center">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-slate-200" />
              <p>TBC</p>
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
          {categories.map((category) => {
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
                    <SpeakerCard key={speaker.name} speaker={speaker} />
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