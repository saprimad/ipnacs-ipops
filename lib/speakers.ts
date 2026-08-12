import { speakerDetails } from "@/lib/speaker-details";

export type SpeakerCategory = "Plenary" | "Invited" | "Professorial Lecture";

export type Speaker = {
  slug: string;
  name: string;
  affiliationFull: string;
  affiliationShort?: string;
  category: SpeakerCategory;
  title?: string;
  image?: string;
  speakerLabel?: string;
  day?: string;
  time?: string;
  venue?: string;
  bio?: string;
  abstract?: string;
};

const baseSpeakers: readonly Speaker[] = [
  {
    slug: "dr-azuana-ramli",
    name: "Dr. Azuana Ramli",
    affiliationFull: "Ministry of Health Malaysia",
    affiliationShort: "MOH",
    category: "Plenary",
    title:
      "Stewarding Connected Innovation: Advancing Digital Transformation Across the Pharmaceutical Ecosystem",
    image: "/speakers/azuana.png",
  },
  {
    slug: "professor-dr-suzana-shahar",
    name: "Prof. Dr. Suzana Shahar",
    affiliationFull: "Universiti Kebangsaan Malaysia",
    affiliationShort: "UKM",
    category: "Plenary",
    title:
      "Neuroprotective Model for Healthy Aging: The Value of Nutraceutical and Lifestyle Modification",
    image: "/speakers/suzana.png",
  },
  {
    slug: "professor-dr-rohana-abd-ghani",
    name: "Prof. Dr. Rohana Abd Ghani",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Plenary",
    title:
      "Digital Frontier in Obesity Management: Leveraging Digital Transformation for Better Outcomes",
    image: "/speakers/rohana.png",
  },
  {
    slug: "professor-dr-varisa-pongrakhananon",
    name: "Prof. Dr. Varisa Pongrakhananon",
    affiliationFull: "Chulalongkorn University",
    category: "Plenary",
    title:
      "Reprogramming Cancer through Integrative Omics and Computational Pharmacology: From Biomarker Discovery to Precision Targeting of Cellular Signaling",
    image: "/speakers/varisa.png",
  },
  {
    slug: "professor-dr-kazunori-akimoto",
    name: "Prof. Dr. Kazunori Akimoto",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Plenary",
    title:
      "Data-Driven Integrative Cancer Research: Bridging Computational Discovery, Molecular Mechanisms, and Clinical Outcomes",
    image: "/speakers/akimoto.png",
  },
  {
    slug: "associate-professor-ee-pui-lai-rachel",
    name: "Assoc. Prof. Dr. Ee Pui Lai, Rachel",
    affiliationFull: "National University of Singapore",
    affiliationShort: "NUS",
    category: "Plenary",
    title:
      "Precision Design and Programming Trap-and-Kill Peptide Nanonets for Novel Antimicrobial Therapy",
    image: "/speakers/ee.png",
  },
  {
    slug: "dr-ismat-binti-mohd-sulaiman",
    name: "Dr. 'Ismat Mohd Sulaiman",
    affiliationFull: "Ministry of Health Malaysia",
    affiliationShort: "MOH",
    category: "Invited",
    title:
      "Connected Data, Transforming Pharma: Lessons from MyHDW and AI Potential",
    image: "/speakers/ismat.png",
  },
  {
    slug: "associate-professor-dr-kosuke-kusamori",
    name: "Assoc. Prof. Dr. Kosuke Kusamori",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Invited",
    title: "Regenerative Cell-Based Therapy for Lymph Node Reconstruction",
    image: "/speakers/kosuke.png",
  },
  {
    slug: "professor-dr-wong-tin-wui",
    name: "Prof. Dr. Wong Tin Wui",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Invited",
    title:
      "Natural Product Discovery and Delivery: Modulation of Gut-Liver Axis for Hepatic Diseases",
    image: "/speakers/wong.png",
  },
  {
    slug: "associate-professor-ho-ket-li",
    name: "Assoc. Prof. Dr. Ho Ket Li",
    affiliationFull: "IMU University",
    affiliationShort: "IMU",
    category: "Invited",
    title: "AI Revolution: Transformation of Health Education",
    image: "/speakers/ho.png",
  },
  {
    slug: "associate-professor-dr-shazia-jamshed",
    name: "Associate Professor Dr Shazia Jamshed",
    affiliationFull: "IMU University",
    affiliationShort: "IMU",
    category: "Invited",
    title:
      "Applications of Digital Health in Pharmacy Practice and Education: Current Insights and Future Directions",
    image: "/speakers/shazia.png",
  },
  {
    slug: "professor-dr-teh-lay-kek",
    name: "Prof. Teh Lay Kek",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Invited",
    title:
      "From Pharmacogenomics to Pharmacophytogenomics: Diversity Driven Pathways in Precision Health",
    image: "/speakers/teh.png",
  },
  {
    slug: "professor-dr-takehisa-hanawa",
    name: "Prof Dr. Takehisa Hanawa",
    affiliationFull: "Tokyo University of Science",
    affiliationShort: "TUS",
    category: "Invited",
    title:
      "Strategies for Improving the Solubility of Poorly Water-Soluble Drugs",
    image: "/speakers/takehisa.png",
  },
  {
    slug: "professor-dr-aleth-therese-dacanay",
    name: "Prof. Aleth Therese Dacanay",
    affiliationFull: "University of Santo Tomas",
    affiliationShort: "UST",
    category: "Invited",
    title:
      "From Classroom to Connected Care: Digital Transformation of Pharmacy Education and Practice",
    image: "/speakers/aleth.png",
  },
  {
    slug: "professor-dr-kalavathy-ramasamy",
    name: "Prof Dr Kalavathy Ramasamy",
    affiliationFull: "Universiti Teknologi MARA",
    affiliationShort: "UiTM",
    category: "Professorial Lecture",
    title: "Listen To Your Gut",
    image: "/speakers/kala.png",
  },
] as const;

export const speakers: readonly Speaker[] = baseSpeakers.map((speaker) => ({
  ...speaker,
  ...(speakerDetails[speaker.slug] ?? {}),
}));

export const speakerCategories: readonly SpeakerCategory[] = [
  "Plenary",
  "Invited",
  "Professorial Lecture",
] as const;

export function getSpeakerBySlug(slug: string) {
  return speakers.find((speaker) => speaker.slug === slug);
}
