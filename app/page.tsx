import { Countdown } from "@/components/countdown";

export default function HomePage() {
  const importantDates = [
    ["First Announcement", "Feb 2026"],
    ["Abstract Submission Opens", "Mar 2026"],
    ["Abstract Deadline", "May 2026"],
    ["Acceptance Notification", "Jun 2026"],
    ["Early Bird Registration", "30 Jun 2026"],
    ["Conference Dates", "13–14 Aug 2026"],
    ["Full Paper Submission", "31 Aug 2026"],
  ];

  return (
    <main className="bg-[#F7F8FA] text-[#0F2A4D]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <img
          src="/salam.jpeg"
          alt="Shah Alam skyline"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

        <div className="relative z-10 py-28">
          <div className="max-w-6xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow">
              8th IPNaCS &amp; 11th IPoPS 2026
            </h1>

            <div className="mx-auto mb-10 h-1 w-20 rounded bg-[#E5B82E]" />

            <p className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto drop-shadow px-2">
              Connected Innovation:
              <br className="hidden md:block" />
              Digital Transformation in Wellness, Longevity and Therapy
            </p>

            <p className="mt-6 text-sm md:text-base text-white/90">
              13–14 Aug 2026 | Concorde Hotel, Shah Alam, Malaysia
            </p>

            {/* Countdown (clean, no box) */}
            <div className="mt-10 flex justify-center text-white">
              <div className="[&_*]:text-white">
                <Countdown targetDate="2026-08-13T09:00:00+08:00" />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/registration"
                className="w-full sm:w-auto sm:min-w-[200px] text-center rounded-lg px-8 py-3 font-semibold text-white bg-[#0F2A4D] hover:bg-[#0c2240] transition shadow-md"
              >
                Register Now
              </a>

              <a
                href="/schedule"
                className="w-full sm:w-auto sm:min-w-[200px] text-center rounded-lg px-8 py-3 font-semibold text-white border border-white/40 hover:bg-white/10 transition"
              >
                View Programme
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT (FULL ORIGINAL TEXT) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">About the Conference</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#0F2A4D]" />
          </div>

          <div className="mx-auto max-w-4xl text-base md:text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
              Welcome to the official portal for the 8th International Conference on Pharmaceutical,
              Nutraceutical, and Cosmeceutical Sciences (IPNaCS) and the 11th International Postgraduate
              Conference on Pharmaceutical Sciences (IPoPS) 2026.
            </p>

            <p>
              This year is a landmark celebration marking the 25th Anniversary of the Faculty of Pharmacy,
              Universiti Teknologi MARA. For over two decades, this collaborative spirit has been the
              heartbeat of our community, and we are thrilled to host this silver jubilee event.
            </p>

            <p>
              The landscape of health and wellness is shifting. As we celebrate 25 years of academic excellence,
              our focus turns toward the future: Digital Transformation. In 2026, we explore how cutting-edge
              technology, from AI-driven drug discovery to digital health monitoring, is fundamentally reshaping
              the fields of:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Pharmacology &amp; Pharmacy Practice</li>
              <li>Nutraceutical Sciences</li>
              <li>Cosmeceutical Innovation</li>
            </ul>

            <p>
              IPNaCS and IPoPS are the result of a deep-rooted partnership spanning more than 20 years.
              This year, we continue our tradition of excellence alongside our esteemed co-organisers:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Tokyo University of Science</li>
              <li>IMU University</li>
              <li>Chulalongkorn University</li>
              <li>Universitas Indonesia</li>
              <li>University of Santo Tomas</li>
              <li>Josai University</li>
            </ul>

            <p>
              Whether you are an established researcher, an industry professional, or a postgraduate
              student at the start of your journey, this conference offers a unique platform to exchange
              ideas, forge global partnerships, and celebrate a quarter-century of pharmaceutical progress.
            </p>

            <p className="font-semibold text-[#0F2A4D]">
              Join us in 2026 as we honour our past and digitise our future.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONFERENCE TRACKS (FULL 8) ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Conference Tracks</h2>
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
                <h3 className="text-lg font-semibold mb-3">{track.title}</h3>
                <p className="text-gray-600 leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT DATES (HIGHLIGHTS + DETAILS) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Important Dates</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#0F2A4D]" />
          </div>

          {/* Highlights */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "ABSTRACT DEADLINE", value: "May 2026" },
              { label: "EARLY BIRD ENDS", value: "30 Jun 2026" },
              { label: "CONFERENCE", value: "13–14 Aug 2026" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-gray-200 bg-white p-7 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-xs font-semibold tracking-widest text-gray-500">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl md:text-3xl font-extrabold text-[#0F2A4D]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-gray-200">
              {importantDates.map(([label, date], idx) => (
                <div
                  key={`${label}-${idx}`}
                  className="flex items-center justify-between gap-6 px-6 py-5"
                >
                  <p className="font-semibold text-gray-900">{label}</p>
                  <p className="text-gray-700">{date}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Dates are subject to change. Updates will be announced on this website.
          </p>
        </div>
      </section>
    </main>
  );
}