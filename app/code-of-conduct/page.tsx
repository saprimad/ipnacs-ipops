// app/code-of-conduct/page.tsx

export default function CodeOfConductPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          Code of Conduct
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Commitment to professionalism, integrity and respectful engagement.
        </p>
      </header>

      <div className="mt-14 space-y-12">
        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            Professional Conduct
          </h2>
          <p className="mt-6 leading-relaxed text-slate-700">
            IPNaCS &amp; IPoPS 2026 is committed to providing a professional,
            inclusive and respectful environment for all participants.
            Attendees, speakers, sponsors and organising committee members
            are expected to conduct themselves in a manner consistent with
            academic integrity, ethical standards and mutual respect at all times.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            Respect and Inclusivity
          </h2>
          <p className="mt-6 leading-relaxed text-slate-700">
            The conference welcomes participants from diverse backgrounds,
            disciplines and regions. Discrimination, harassment, intimidation
            or inappropriate behaviour of any form will not be tolerated.
            All interactions should promote open dialogue, constructive
            scientific exchange and cultural sensitivity.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            Scientific Integrity
          </h2>
          <p className="mt-6 leading-relaxed text-slate-700">
            Participants are expected to present research findings accurately,
            acknowledge sources appropriately and adhere to accepted ethical
            standards in research and publication. Misrepresentation of data,
            plagiarism or unethical conduct in research dissemination is strictly
            prohibited.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            Reporting Concerns
          </h2>
          <p className="mt-6 leading-relaxed text-slate-700">
            Any concerns regarding conduct during the conference should be
            reported to the Organising Committee. All reports will be treated
            with discretion and reviewed appropriately to ensure a safe and
            professional environment for all participants.
          </p>
        </section>
      </div>
    </main>
  );
}
