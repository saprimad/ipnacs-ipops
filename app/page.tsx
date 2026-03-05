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

            {/* Countdown */}
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

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              About the Conference
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#0F2A4D]" />
          </div>

          <div className="mx-auto max-w-4xl text-base md:text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
              Welcome to the official portal for the 8th International Conference on Pharmaceutical,
              Nutraceutical, and Cosmeceutical Sciences (IPNaCS) and the 11th International Postgraduate
              Conference on Pharmaceutical Sciences (IPoPS) 2026.
            </p>

            <p>
              This year marks the 25th Anniversary of the Faculty of Pharmacy, Universiti Teknologi MARA.
              For over two decades, this collaborative spirit has been the heartbeat of our community.
            </p>

            <p>
              As we celebrate 25 years of academic excellence, our focus turns toward the future:
              Digital Transformation. In 2026 we explore how cutting-edge technologies reshape:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Pharmacology &amp; Pharmacy Practice</li>
              <li>Nutraceutical Sciences</li>
              <li>Cosmeceutical Innovation</li>
            </ul>

            <p>
              IPNaCS and IPoPS continue our tradition of excellence alongside our co-organisers:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Tokyo University of Science</li>
              <li>IMU University</li>
              <li>Chulalongkorn University</li>
              <li>Universitas Indonesia</li>
              <li>University of Santo Tomas</li>
              <li>Josai University</li>
            </ul>

            <p className="font-semibold text-[#0F2A4D]">
              Join us in 2026 as we honour our past and digitise our future.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONFERENCE TRACKS ================= */}
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
                desc: "AI-driven drug discovery, digital biomarkers and tailored therapeutic strategies.",
              },
              {
                title: "Pharmacy & Digital Health",
                desc: "Telepharmacy, blockchain supply chains, smart dispensing and IoMT platforms.",
              },
              {
                title: "Nutraceutical Science",
                desc: "Personalised nutrition, wearable-linked interventions and preventive health.",
              },
              {
                title: "Cosmetic Science & Innovation",
                desc: "AI-powered formulation and sustainable product development.",
              },
              {
                title: "Pharmaceutical Technology",
                desc: "Advanced drug delivery systems and biopharmaceutical production.",
              },
              {
                title: "Pharmaceutical Chemistry",
                desc: "Medicinal chemistry, computational modelling and analytical validation.",
              },
              {
                title: "Regenerative Medicine",
                desc: "Stem cells, tissue engineering and organoid technologies.",
              },
              {
                title: "Policy, Regulation & Ethics",
                desc: "Global standards, regulatory frameworks and ethical considerations.",
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

      {/* ================= IMPORTANT DATES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Important Dates</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#0F2A4D]" />
          </div>

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

          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-gray-200">
              {importantDates.map(([label, date], idx) => (
                <div
                  key={`${label}-${idx}`}
                  className="flex items-center justify-between px-6 py-5"
                >
                  <p className="font-semibold text-gray-900">{label}</p>
                  <p className="text-gray-700">{date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VENUE ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Conference Venue
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#0F2A4D]" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Venue info card */}
            <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0F2A4D]">
                Concorde Hotel Shah Alam
              </h3>

              <p className="mt-2 text-gray-600">
                Shah Alam, Selangor, Malaysia
              </p>

              <div className="mt-8">
                <p className="text-sm font-semibold text-[#0F2A4D]">
                  Address
                </p>

                <p className="mt-2 text-gray-700 leading-relaxed">
                  No. 3, Jalan Tengku Ampuan Zabedah C9/C, 40100
                  <br />
                  Shah Alam, Selangor, Malaysia
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Concorde+Hotel+Shah+Alam"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center rounded-lg px-6 py-3 font-semibold text-white bg-[#0F2A4D] hover:bg-[#0c2240] transition shadow"
                >
                  Open in Google Maps
                </a>

                <a
                  href="https://www.concordehotelsresorts.com/concorde-hotel-shah-alam/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center rounded-lg px-6 py-3 font-semibold border border-gray-200 text-[#0F2A4D] hover:bg-gray-50 transition"
                >
                  Visit Hotel Website
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <iframe
                title="Concorde Hotel Shah Alam Map"
                src="https://www.google.com/maps?q=Concorde%20Hotel%20Shah%20Alam&output=embed"
                className="w-full h-[350px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}