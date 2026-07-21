// app/guidelines/page.tsx

export default function GuidelinesPage() {
  const oralGuidelineUrl =
    "https://drive.google.com/file/d/13S0Rwi2Jmib4BFV6coj8MlEP9mzrkjr1/view?usp=sharing";

  const posterGuidelineUrl =
    "https://drive.google.com/file/d/15M1ZRj2jWuoDhFTtuk15DdFdlWExzSsG/view?usp=sharing";

  const oralItems = [
    ["Presentation time", "10 minutes"],
    ["Q&A session", "3 minutes"],
    ["Language", "English"],
    ["File format", "Microsoft PowerPoint (.pptx) or PDF"],
    ["Aspect ratio", "16:9 widescreen"],
    ["Slide limit", "Maximum 10-12 slides"],
    ["Arrival", "Presenters should arrive 15 minutes before the session"],
  ] as const;

  const posterItems = [
    ["Poster size", "A1"],
    ["Orientation", "Portrait only"],
    ["Dimensions", "594 mm (W) x 841 mm (H)"],
    ["Language", "English"],
    ["Image resolution", "Minimum 300 dpi at final print size"],
    ["Typography", "Clear sans-serif font is recommended"],
    ["Final check", "Check spelling, alignment, spacing, labels, and units"],
  ] as const;

  const slideStructure = [
    "Title slide",
    "Introduction",
    "Methodology",
    "Results and discussion",
    "Conclusion and future perspectives",
    "Acknowledgements, if any",
    "Minimal references",
  ] as const;

  const posterStructure = [
    "Title section",
    "Introduction or background",
    "Objectives",
    "Methods",
    "Results and discussion",
    "Conclusion",
    "Future work, if applicable",
    "Acknowledgements and references",
    "Contact information, if applicable",
  ] as const;

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-purple-700">
          Presenter Guidelines
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          Oral Presentation &amp; Research Poster
        </h1>

        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Please refer to the official guidelines for oral presentations and A1
          portrait research posters for the 8th IPNaCS &amp; 11th IPoPS 2026.
        </p>
      </header>

      <section className="mt-14 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Oral Presentation */}
          <article className="rounded-lg border border-slate-200 p-6">
            <div className="mb-6">
              <span className="inline-flex rounded-full bg-purple-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-purple-700">
                Oral Presentation
              </span>

              <h2 className="mt-4 text-2xl font-bold text-brand-900">
                Oral Presentation Guidelines
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Oral presentations will be conducted in parallel sessions.
                Presenters must follow the allocated time to ensure a smooth
                session flow.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900">
                Key Requirements
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {oralItems.map(([label, value]) => (
                  <li key={label}>
                    <span className="font-semibold text-slate-900">
                      {label}:
                    </span>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-base font-bold text-slate-900">
                Recommended Slide Structure
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {slideStructure.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-lg bg-slate-50 p-5">
              <h3 className="text-base font-bold text-slate-900">
                Submission of Slides
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Final slides must be submitted before or on the day of the
                conference, 13 August 2026. Please enter the correct
                Abstract/Presenter ID and full name during submission.
              </p>

              <a
                href="http://tiny.cc/opipnops2026"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-md bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                Submit Presentation Slides
              </a>
            </div>
          </article>

          {/* Research Poster */}
          <article className="rounded-lg border border-slate-200 p-6">
            <div className="mb-6">
              <span className="inline-flex rounded-full bg-purple-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-purple-700">
                Research Poster
              </span>

              <h2 className="mt-4 text-2xl font-bold text-brand-900">
                A1 Portrait Poster Guidelines
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Research posters must be prepared in A1 portrait format with
                clear visual hierarchy, concise text, and properly labelled
                figures or tables.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900">
                Key Requirements
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {posterItems.map(([label, value]) => (
                  <li key={label}>
                    <span className="font-semibold text-slate-900">
                      {label}:
                    </span>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-base font-bold text-slate-900">
                Recommended Poster Sections
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {posterStructure.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-lg bg-slate-50 p-5">
              <h3 className="text-base font-bold text-slate-900">
                Poster Preparation Notes
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use graphs, tables, diagrams, and images where appropriate.
                Keep text minimal and highlight 3-5 key insights, novelty, and
                significance.
              </p>
            </div>
          </article>
        </div>

        {/* Download Buttons */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <h2 className="text-center text-xl font-bold text-brand-900">
            Download Full Guidelines
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
            Download the official guideline documents for detailed formatting
            and presentation requirements.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href={oralGuidelineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md bg-brand-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 sm:w-auto sm:min-w-[240px]"
            >
              Download Oral Guidelines
            </a>

            <a
              href={posterGuidelineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md bg-brand-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 sm:w-auto sm:min-w-[240px]"
            >
              Download Poster Guidelines
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}