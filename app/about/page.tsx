// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          About
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Learn more about IPNaCS &amp; IPoPS 2026 and who the conference is designed for.
        </p>
      </header>

      <div className="mt-14 space-y-16">
        {/* About the Conference */}
        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm text-center">
          <h2 className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            About the Conference
          </h2>

          <p className="mt-6 mx-auto max-w-3xl leading-relaxed text-slate-700 text-justify">
            The 8th International Conference on Pharmaceutical, Nutraceutical and Cosmeceutical Sciences (IPNaCS)
            and the 11th International Postgraduate Symposium on Pharmaceutical Sciences (IPoPS) 2026 bring together
            researchers, healthcare professionals, industry partners and postgraduate scholars to advance rigorous,
            evidence-based innovation in therapeutic and health sciences. Guided by the theme{" "}
            <span className="font-semibold italic text-brand-900">
              Connected Innovation: Digital Transformation in Wellness, Longevity and Therapy
            </span>
            , the conference serves as an interdisciplinary forum for scholarly exchange in pharmaceutical research,
            clinical pharmacy, nutraceutical and cosmeceutical sciences, digital health technologies, regulatory science
            and public health systems. As healthcare ecosystems across Malaysia and the broader Asian region undergo
            rapid digital transformation amid ageing populations and rising chronic disease burdens, IPNaCS &amp; IPoPS
            2026 aims to strengthen regional and global research networks, promote translational science, and support
            the development of sustainable, ethically grounded solutions that enhance health outcomes and therapeutic
            practice.
          </p>
        </section>

        {/* Who Should Attend */}
        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm text-center">
          <h2 className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            Who Should Attend
          </h2>

          <p className="mt-6 mx-auto max-w-3xl leading-relaxed text-slate-700 text-justify">
            IPNaCS &amp; IPoPS 2026 welcomes academics, researchers, healthcare professionals, industry practitioners,
            policymakers and postgraduate students engaged in pharmaceutical, nutraceutical, cosmeceutical and health
            sciences. The conference is particularly relevant for clinical pharmacists, pharmacy practitioners,
            biomedical scientists, digital health innovators, regulatory specialists and public health researchers
            seeking to explore emerging evidence, technological advancements and interdisciplinary approaches to
            wellness, longevity and therapeutic innovation. Participants from Malaysia, Asia and the wider
            international community are invited to contribute to scholarly dialogue, foster collaborative partnerships
            and advance research that translates into meaningful improvements in healthcare systems and patient
            outcomes.
          </p>
        </section>
      </div>
    </main>
  );
}
