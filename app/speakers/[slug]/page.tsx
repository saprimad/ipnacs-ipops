// app/speakers/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";

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
    image: "/speakers/azuana.jpg",
  },
  {
    name: "Professor Dr Suzana Shahar",
    affiliationFull: "Universiti Kebangsaan Malaysia",
    affiliationShort: "UKM",
    category: "Plenary",
    title:
      "Neuroprotective Model for Healthy Aging: The Value of Nutraceutical and Lifestyle Modification",
    image: "/speakers/suzana.png",
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
    image: "/speakers/Varissa.png",
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
    image: "/speakers/ee.jpg",
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
    image: "/speakers/kosuke.jpg",
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
    image: "/speakers/ho.jpg",
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
    image: "/speakers/teh.jpeg",
  },
  {
    name: "Professor Dr Takehisa Hanawa",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Invited",
    title:
      "Pharmaceutical Technology for the Improvement of the Bioavailability of Drugs",
    image: "/speakers/takehisa.png",
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
    image: "/speakers/kala.jpeg",
  },
];

function getSpeakerBySlug(slug: string) {
  return speakers.find((speaker) => slugify(speaker.name) === slug);
}

export async function generateStaticParams() {
  return speakers.map((speaker) => ({
    slug: slugify(speaker.name),
  }));
}

export default async function SpeakerSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const speaker = getSpeakerBySlug(slug);
  if (!speaker) return notFound();

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
                className="object-cover"
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