// app/registration/page.tsx
import Image from "next/image";

export default function RegistrationPage() {
  const guidelineUrl =
    "https://docs.google.com/document/d/1Yea2exzZ5vBD5m4FRFs6ZEk3xIcFGlij/view";
  const submitFormUrl = "https://forms.gle/7sjqhQRtzvVKyziB7";
  const journalUrl = "https://ijpncs.uitm.edu.my/index.php/en/ijpncs-journal";

  const tracks = [
    {
      title: "Pharmacology & Precision Medicine",
      desc: "AI-driven drug discovery, digital biomarkers, and tailored therapeutic strategies.",
    },
    {
      title: "Pharmacy & Digital Health",
      desc: "Telepharmacy, blockchain supply chains, smart dispensing, mobile health apps, IoMT, and gamified platforms.",
    },
    {
      title: "Nutraceutical Science",
      desc: "Personalised nutrition, wearable-linked interventions, and consumer engagement for preventive health.",
    },
    {
      title: "Cosmetic Science & Innovation",
      desc: "AI-powered formulation, virtual diagnostics, and sustainable product development.",
    },
    {
      title: "Pharmaceutical Technology",
      desc: "Advanced drug delivery systems, continuous manufacturing, biopharmaceutical production, and QbD approaches.",
    },
    {
      title: "Pharmaceutical Chemistry",
      desc: "Medicinal chemistry, green synthesis, computational modelling, and analytical validation of drug molecules.",
    },
    {
      title: "Regenerative & Translational Medicine",
      desc: "Stem cells, tissue engineering, organoids, and pathways from lab to clinical application.",
    },
    {
      title: "Policy, Regulation & Ethics",
      desc: "Global harmonisation of standards, data privacy in digital health, and ethical sourcing in pharma and cosmetics.",
    },
  ] as const;

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <a
          href={submitFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          aria-label="Submit Abstract"
          title="Submit Abstract"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl hover:opacity-90 transition">
            Submit Abstract
          </h1>
        </a>

        <p className="mx-auto max-w-2xl text-base text-slate-600">
          IPNaCS &amp; IPoPS 2026 welcomes high-quality research abstracts aligned
          with the conference theme and tracks. Selected accepted abstracts may
          be considered for publication in the{" "}
          <span className="font-semibold">
            International Journal of Pharmaceuticals, Nutraceuticals and Cosmetic Science (IJPNaCS)
          </span>
          .
        </p>
      </header>

      <section className="mt-14 rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
        {/* Journal Logo (clickable) */}
        <div className="mb-10 flex justify-center">
          <a
            href={journalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            aria-label="Visit IJPNaCS Journal"
            title="Visit IJPNaCS Journal"
          >
            <Image
              src="/ijpnacs.png"
              alt="IJPNaCS Journal"
              width={200}
              height={70}
              className="h-auto w-auto"
            />
          </a>
        </div>

        <div className="space-y-10">
          {/* Abstract Format (clickable like View Guidelines) */}
          <div>
            <a
              href={guidelineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl font-bold text-brand-900 hover:opacity-80 transition"
              aria-label="View Abstract Submission Guidelines"
              title="View Abstract Submission Guidelines"
            >
              Abstract Format
              <span className="text-sm font-semibold text-slate-500">
                (View guidelines)
              </span>
            </a>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <span className="font-semibold">Length:</span> Maximum 300 words
                (excluding title, authors, and affiliations)
              </li>
              <li>
                <span className="font-semibold">Font &amp; spacing:</span> Times New Roman, 12 pt, single spacing
              </li>
              <li>
                <span className="font-semibold">Title:</span> Concise, informative, up to 20 words
              </li>
              <li>
                <span className="font-semibold">Structure:</span> Background/Rationale, Objectives, Methods, Results, Conclusion
              </li>
              <li>
                <span className="font-semibold">Keywords:</span> Up to 5 keywords
              </li>
            </ul>
          </div>

          {/* Tracks */}
          <div>
            <h2 className="text-xl font-bold text-brand-900">
              Submission Categories
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {tracks.map((t) => (
                <div
                  key={t.title}
                  className="rounded-lg border border-slate-200 p-5"
                >
                  <h3 className="font-semibold text-slate-900">{t.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Presentation Types */}
          <div>
            <h2 className="text-xl font-bold text-brand-900">
              Presentation Types
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <span className="font-semibold">Oral Presentation:</span> 10–12 minutes presentation + Q&amp;A (total 15 minutes)
              </li>
              <li>
                <span className="font-semibold">Poster Presentation:</span> Visual display with dedicated judging time (Tea break)
              </li>
            </ul>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-xl font-bold text-brand-900">
              Submission Process
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Prepare your abstract according to the guidelines.</li>
              <li>Submit via the online submission form.</li>
              <li>Each abstract will be peer reviewed by the Scientific Committee.</li>
              <li>Accepted abstracts will be published in the Abstract Book / Conference Proceedings.</li>
            </ol>
            <p className="mt-3 text-sm text-slate-600">
              Note: The submission portal link will be officially announced in March.
            </p>
          </div>

          {/* Awards */}
          <div>
            <h2 className="text-xl font-bold text-brand-900">
              Awards
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Best Oral Presentation (Undergraduate, Postgraduate, International)</li>
              <li>Best Poster Presentation</li>
              <li>Recognition during the Closing Plenary &amp; Prize-Giving Ceremony</li>
            </ul>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center">
            <a
              href={guidelineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[220px] inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 text-center"
            >
              View Guidelines
            </a>

            <a
              href={submitFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[220px] inline-flex items-center justify-center rounded-md bg-brand-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 text-center"
            >
              Submit Abstract
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}