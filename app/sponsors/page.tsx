// app/sponsors/page.tsx

import Link from "next/link";

export default function SponsorsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          Sponsors
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Partner with IPNaCS &amp; IPoPS 2026 to advance innovation in health and therapeutic sciences.
        </p>
      </header>

      <section className="mt-14 rounded-xl border border-slate-200 bg-white p-10 shadow-sm text-center">
        <p className="mx-auto max-w-3xl leading-relaxed text-slate-700 text-justify">
          IPNaCS &amp; IPoPS 2026 provides a strategic platform for organisations to engage with leading
          academics, healthcare professionals, postgraduate researchers and industry stakeholders in
          pharmaceutical, nutraceutical and cosmeceutical sciences. As healthcare ecosystems across Malaysia
          and the broader Asian region continue to evolve through digital transformation and translational
          research, sponsorship offers meaningful visibility, knowledge exchange and collaborative
          opportunities within a scientifically rigorous and internationally oriented environment.
          We welcome partnerships with pharmaceutical companies, health technology innovators, research
          institutions and industry leaders committed to advancing evidence-based therapeutic innovation
          and improving health outcomes.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
          >
            Become a Sponsor
          </Link>
        </div>
      </section>
    </main>
  );
}
