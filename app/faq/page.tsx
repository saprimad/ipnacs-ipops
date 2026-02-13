// app/registration/page.tsx

import Image from "next/image";

export default function RegistrationPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          Submit Abstract
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Abstracts accepted at IPNaCS &amp; IPoPS 2026 will be considered for publication in the
          International Journal of Pharmaceuticals, Nutraceuticals and Cosmetic Science (IJPNaCS).
        </p>
      </header>

      <section className="mt-14 rounded-xl border border-slate-200 bg-white p-10 shadow-sm">

        {/* Journal Logo - NOW ABOVE PARAGRAPH */}
        <div className="mb-8 flex justify-center">
          <a
            href="https://ijpncs.uitm.edu.my/index.php/en/ijpncs-journal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <Image
              src="/ijpnacs.png"
              alt="IJPNaCS Journal"
              width={180}
              height={60}
              className="h-auto w-auto"
            />
          </a>
        </div>

        <p className="mx-auto max-w-3xl leading-relaxed text-slate-700 text-justify">
          All submissions must comply with the journal’s formatting, stylistic and bibliographic
          requirements. The review process will be conducted through a double-blind peer review
          system; therefore, author names and affiliations must not appear in the submitted manuscript.
          The manuscript file must be prepared in Microsoft Word format (.doc, .docx or .rtf), and
          authors are responsible for ensuring that all co-authors have approved the submission.
          Declarations of funding, ethical approval and competing interests must be included before
          the reference list. The similarity index must not exceed 25%, and submissions must not be
          under consideration elsewhere.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-brand-900">
              Submission Method
            </h2>
            <p className="mt-3 text-slate-700">
              Manuscripts should be submitted by email to the Editorial Office:
            </p>
            <p className="mt-2 font-semibold text-brand-900">
              ijpnacs@gmail.com
            </p>
            <p className="mt-2 text-slate-700">
              International Journal of Pharmaceuticals, Nutraceuticals and Cosmetic Science (IJPNaCS) <br />
              Faculty of Pharmacy, Universiti Teknologi MARA <br />
              Puncak Alam Campus, Selangor, Malaysia
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://docs.google.com/document/d/1xZgX6ENwsIX6y5HO39xbiMEDJss9v-tV/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
            >
              Download Manuscript Template
            </a>

            <a
              href="mailto:ijpnacs@gmail.com"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
            >
              Submit via Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
