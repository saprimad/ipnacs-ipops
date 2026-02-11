import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("FAQ", "Frequently asked questions for conference participants.");

const faqItems = [
  {
    question: "How do I submit an abstract?",
    answer: "Use the Call for Papers portal. Submission guidelines and templates are available there."
  },
  {
    question: "Can I attend only one day?",
    answer: "Yes. Day-specific attendance options are planned and will be listed during registration."
  },
  {
    question: "Will presentation certificates be provided?",
    answer: "Yes. Digital certificates will be issued after verification of attendance and participation."
  },
  {
    question: "Is online participation available?",
    answer: "A limited hybrid track may be announced based on session format and speaker availability."
  }
];

export default function FaqPage() {
  return (
    <main className="section">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <div className="mt-6">
        <FaqAccordion items={faqItems} />
      </div>
    </main>
  );
}
