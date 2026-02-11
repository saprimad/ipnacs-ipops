import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata("Contact", "Contact the conference organising team.");

export default function ContactPage() {
  return (
    <main className="section space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-700">For enquiries related to submissions, registration, and partnerships, please use the form below or email {site.contactEmail}.</p>
      <ContactForm />
    </main>
  );
}
