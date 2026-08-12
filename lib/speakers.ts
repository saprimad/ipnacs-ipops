export type SpeakerCategory = "Plenary" | "Invited" | "Professorial Lecture";

export type Speaker = {
  slug: string;
  name: string;
  affiliationFull: string;
  affiliationShort?: string;
  category: SpeakerCategory;
  title?: string;
  image?: string;
};

export const speakers: readonly Speaker[] = [
  {
    slug: "dr-azuana-ramli",
    name: "Dr. Azuana Ramli",
    affiliationFull:
      "Deputy Director General of Health (Pharmaceutical Services), Ministry of Health Malaysia",
    affiliationShort: "MOH",