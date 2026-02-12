export default function HomePage() {
  return (
    <main className="bg-[#F7F8FA] text-[#0F2A4D]">

      {/* HERO */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Logos */}
          <div className="flex items-center justify-center gap-10 mb-10 flex-wrap">
            <img
              src="/uitm.png"
              alt="UiTM Logo"
              className="h-32 md:h-40 w-auto"
            />
            <div className="h-32 md:h-40 w-px bg-gray-300 hidden sm:block" />
            <img
              src="/logo.png"
              alt="IPNACS-IPOPS Logo"
              className="h-32 md:h-40 w-auto"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
            Faculty of Pharmacy, Universiti Teknologi MARA
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            8th IPNaCS & 11th IPoPS 2026
          </h1>

          <div className="mx-auto mb-10 h-1 w-20 rounded bg-[#E5B82E]" />

          {/* Theme */}
          <p className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Connected Innovation:
            <br className="hidden md:block" />
            Digital Transformation in Wellness, Longevity and Therapy
          </p>

          {/* Date */}
          <p className="mt-6 text-sm md:text-base text-gray-600">
            13–14 Aug 2026 | DoubleTree by Hilton, Shah Alam
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#register"
              className="rounded-lg px-8 py-3 font-semibold text-white bg-[#0F2A4D] hover:opacity-90 transition"
            >
              Register Now
            </a>

            <a
              href="#submit-abstract"
              className="rounded-lg px-8 py-3 font-semibold text-white bg-[#0F2A4D] hover:opacity-90 transition"
            >
              Submit Abstract
            </a>

            <a
              href="#programme"
              className="rounded-lg px-8 py-3 font-semibold text-white bg-[#0F2A4D] hover:opacity-90 transition"
            >
              View Programme
            </a>
          </div>

        </div>
      </section>

      {/* CONFERENCE TRACKS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Conference Tracks
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#0F2A4D]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pharmacology & Precision Medicine",
                desc: "AI-driven drug discovery, digital biomarkers, and tailored therapeutic strategies.",
              },
              {
                title: "Pharmacy & Digital Health",
                desc: "Telepharmacy, blockchain supply chains, smart dispensing, IoMT, and gamified platforms.",
              },
              {
                title: "Nutraceutical Science",
                desc: "Personalised nutrition, wearable-linked interventions, and preventive health.",
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
                desc: "Medicinal chemistry, green synthesis, computational modelling, and analytical validation.",
              },
              {
                title: "Regenerative Medicine",
                desc: "Stem cells, tissue engineering, organoids, and pathways from lab to clinical application.",
              },
              {
                title: "Policy, Regulation & Ethics",
                desc: "Global harmonisation of standards, data privacy, and ethical sourcing.",
              },
            ].map((track) => (
              <div
                key={track.title}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {track.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {track.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Important Dates
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#0F2A4D]" />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-left">
              <tbody>
                {[
                  ["First Announcement", "Feb 2026"],
                  ["Abstract Submission Opens", "Mar 2026"],
                  ["Abstract Deadline", "May 2026"],
                  ["Acceptance Notification", "Jun 2026"],
                  ["Early Bird Registration", "30 Jun 2026"],
                  ["Full Paper Submission", "31 Aug 2026"],
                  ["Conference Dates", "13–14 Aug 2026"],
                ].map(([label, date]) => (
                  <tr key={label} className="border-t border-gray-200">
                    <td className="w-2/3 bg-gray-50 px-6 py-5 font-semibold">
                      {label}
                    </td>
                    <td className="px-6 py-5 text-gray-700">
                      {date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </main>
  );
}
