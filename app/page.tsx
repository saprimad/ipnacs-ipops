import { Countdown } from "@/components/countdown";

type Partner = {
  name: string;
  src: string;
  url: string;
};

type Sponsor = {
  name: string;
  src: string;
  url: string;
};

export default function HomePage() {
  const importantDates = [
    { label: "FIRST ANNOUNCEMENT", value: "February 2026" },
    { label: "ABSTRACT SUBMISSION OPENS", value: "March 2026" },
    { label: "ABSTRACT SUBMISSION (Extended)", value: "15 July 2026" },
    { label: "ACCEPTANCE NOTIFICATION (Extended)", value: "30 July 2026" },
    { label: "EARLY BIRD REGISTRATION", value: "30 June 2026" },
    { label: "CONFERENCE DATES", value: "13–14 August 2026" },
    { label: "FULL PAPER SUBMISSION", value: "31 August 2026" },
  ];

  const partners: Partner[] = [
    {
      name: "Universiti Teknologi MARA",
      src: "/unilogo/uitm.png",
      url: "https://www.uitm.edu.my/",
    },
    {
      name: "Tokyo University of Science",
      src: "/unilogo/tus.png",
      url: "https://www.tus.ac.jp/en/",
    },
    {
      name: "IMU University",
      src: "/unilogo/imu.png",
      url: "https://www.imu.edu.my/",
    },
    {
      name: "Chulalongkorn University",
      src: "/unilogo/chula.png",
      url: "https://www.chula.ac.th/en/",
    },
    {
      name: "Universitas Indonesia",
      src: "/unilogo/ui.png",
      url: "https://www.ui.ac.id/en/",
    },
    {
      name: "University of Santo Tomas",
      src: "/unilogo/ust.png",
      url: "https://www.ust.edu.ph/",
    },
    {
      name: "Josai International University",
      src: "/unilogo/jiu.png",
      url: "https://www.jiu.ac.jp/en/",
    },
  ];

  const sponsors: Record<
    "gold" | "silver" | "supporting",
    Sponsor[]
  > = {
    gold: [
      {
        name: "ProSainsES Sdn Bhd",
        src: "/sponsors/prosains.png",
        url: "https://www.prosainses.com.my/contact.php",
      },
    ],
    silver: [
      {
        name: "Duopharma Biotech Berhad",
        src: "/sponsors/duopharma.png",
        url: "https://duopharmabiotech.com/",
      },
      {
        name: "Selia-Tek",
        src: "/sponsors/seliatek.png",
        url: "https://seliatek.com/",
      },
    ],
    supporting: [
      {
        name: "Saintifik Maju",
        src: "/sponsors/saintifikmaju.png",
        url: "https://web.facebook.com/p/SAINTIFIK-MAJU-100067102480148/",
      },
      {
        name: "Unggul Medik",
        src: "/sponsors/unggulmedik.png",
        url: "https://unggulmedik.com.my/",
      },
    ],
  };

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
            <div className="mb-6 flex justify-center">
              <img
                src="/logo.png"
                alt="IPNaCS–IPoPS 2026 logo"
                className="h-20 w-20 object-contain drop-shadow-xl md:h-60 md:w-60"
              />
            </div>

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
              13–14 August 2026 | Mercure Kuala Lumpur Glenmarie, Shah Alam,
              Malaysia
            </p>

            <div className="mt-10 flex justify-center text-white">
              <div className="[&_*]:text-white">
                <Countdown targetDate="2026-08-13T09:00:00+08:00" />
              </div>
            </div>

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

          <div className="mx-auto max-w-5xl space-y-10">
            <div className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="space-y-5 text-slate-700 leading-relaxed text-base md:text-lg">
                <p>
                  Welcome to the official portal for the 8th International
                  Conference on Pharmaceutical, Nutraceutical, and Cosmeceutical
                  Sciences (IPNaCS) and the 11th International Postgraduate
                  Conference on Pharmaceutical Sciences (IPoPS) 2026.
                </p>

                <p>
                  This year is a landmark celebration marking the 25th
                  Anniversary of the Faculty of Pharmacy, Universiti Teknologi
                  MARA. For over two decades, this collaborative spirit has been
                  the heartbeat of our community, and we are honoured to host
                  this silver jubilee event.
                </p>

                <p>
                  The landscape of health and wellness is shifting. As we
                  celebrate 25 years of academic excellence, our focus turns
                  toward the future:{" "}
                  <span className="font-semibold text-[#0F2A4D]">
                    Digital Transformation
                  </span>
                  . In 2026, we explore how cutting-edge technology, from
                  AI-driven drug discovery to digital health monitoring, is
                  fundamentally reshaping the fields of:
                </p>

                <ul className="mt-2 list-disc space-y-2 pl-6 text-slate-700">
                  <li>Pharmacology &amp; Pharmacy Practice</li>
                  <li>Nutraceutical Sciences</li>
                  <li>Cosmeceutical Innovation</li>
                </ul>

                <p>
                  IPNaCS and IPoPS are the result of a deep-rooted partnership
                  spanning more than 20 years. Whether you are an established
                  researcher, an industry professional, or a postgraduate
                  student at the start of your journey, this conference offers a
                  platform to exchange ideas, forge global partnerships, and
                  celebrate a quarter-century of pharmaceutical progress.
                </p>

                <p className="font-semibold text-[#0F2A4D]">
                  Join us in 2026 as we honour our past and digitise our future.
                </p>
              </div>
            </div>

            {/* ================= DEAN PREFACE ================= */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight text-[#0F2A4D] sm:text-3xl">
                  Preface from the Dean
                </h3>
              </div>

              <div className="mt-10 text-base leading-relaxed text-slate-700 md:text-lg">
                <div className="mx-auto mb-6 flex justify-center sm:float-left sm:mb-4 sm:mr-8">
                  <img
                    src="/dean.png"
                    alt="Professor Dato’ Dr. Abu Bakar Abdul Majeed"
                    className="h-64 w-auto object-contain"
                    loading="lazy"
                  />
                </div>

                <p className="mb-5">
                  It is with great pleasure that I welcome you to the 8th
                  International Conference on Pharmaceutical, Nutraceutical, and
                  Cosmeceutical Sciences (IPNaCS) and the 11th International
                  Postgraduate Conference on Pharmaceutical Sciences (IPoPS)
                  2026, hosted by the Faculty of Pharmacy, Universiti Teknologi
                  MARA (UiTM).
                </p>

                <p className="mb-5">
                  The year 2026 marks a significant milestone for our faculty as
                  we celebrate our 25th Anniversary. Over the past quarter of a
                  century, the Faculty of Pharmacy, UiTM has grown into a vibrant
                  academic and research community committed to advancing
                  pharmaceutical sciences, nurturing future leaders, and
                  contributing meaningfully to healthcare and society. This
                  silver jubilee celebration provides a timely opportunity to
                  reflect on our journey while looking forward to the evolving
                  future of the pharmaceutical and health sciences landscape.
                </p>

                <p className="mb-5">
                  The theme of this year’s conference, Digital Transformation,
                  highlights the profound ways in which emerging technologies
                  are reshaping research, practice, and innovation in health and
                  wellness. Advances in artificial intelligence, digital health
                  monitoring, data analytics, and precision medicine are rapidly
                  transforming how medicines are discovered, developed,
                  delivered, and monitored. These developments present exciting
                  opportunities for interdisciplinary collaboration across
                  pharmacology and pharmacy practice, nutraceutical sciences, and
                  cosmeceutical innovation.
                </p>

                <p className="mb-5">
                  IPNaCS and IPoPS have, for more than two decades, served as
                  important platforms for scholarly exchange and international
                  collaboration. This year’s conference continues that tradition
                  through the strong partnership of our distinguished
                  co-organising institutions, including Tokyo University of
                  Science, IMU University, Chulalongkorn University, Universitas
                  Indonesia, University of Santo Tomas, and Josai University.
                  Together, these collaborations reflect our shared commitment to
                  advancing scientific knowledge and fostering meaningful global
                  engagement.
                </p>

                <p className="mb-5">
                  The conference programme brings together renowned speakers,
                  researchers, industry professionals, and postgraduate scholars
                  from diverse disciplines. Through keynote and plenary lectures,
                  invited sessions, and scientific presentations, participants
                  will have the opportunity to share innovative research,
                  discuss emerging challenges, and explore new avenues for
                  collaboration in pharmaceutical sciences and related fields.
                </p>

                <p className="mb-5">
                  On behalf of the Faculty of Pharmacy, Universiti Teknologi
                  MARA, I extend my sincere appreciation to all speakers,
                  organising committee members, partners, sponsors, and
                  participants whose contributions have made this conference
                  possible. Your support and engagement are essential in
                  sustaining the spirit of collaboration and academic excellence
                  that defines IPNaCS and IPoPS.
                </p>

                <p className="mb-5">
                  I warmly welcome you to IPNaCS–IPoPS 2026, and I hope this
                  conference will inspire meaningful discussions, fruitful
                  collaborations, and new ideas that will shape the future of
                  pharmaceutical sciences and pharmacy practice.
                </p>

                <div className="clear-both pt-4">
                  <p className="font-bold text-[#0F2A4D]">
                    Professor Dato’ Dr. Abu Bakar Abdul Majeed
                  </p>
                  <p className="text-sm text-slate-600">
                    Dean, Faculty of Pharmacy
                    <br />
                    Universiti Teknologi MARA (UiTM)
                    <br />
                    Selangor, Malaysia
                  </p>
                </div>
              </div>
            </div>

            {/* ================= SPONSORS ================= */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight text-[#0F2A4D] sm:text-3xl">
                  Our Sponsors
                </h3>

                <p className="mx-auto mt-3 max-w-3xl text-slate-600">
                  We gratefully acknowledge the organisations supporting
                  IPNaCS–IPoPS 2026.
                </p>
              </div>

              <div className="mt-10">
                <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#B58A1F]">
                  Gold Sponsor
                </p>

                <div className="mx-auto mt-4 max-w-2xl">
                  {sponsors.gold.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${sponsor.name} website`}
                      title={sponsor.name}
                      className="flex h-36 items-center justify-center rounded-xl border border-amber-200 bg-white px-8 py-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md sm:h-40"
                    >
                      <img
                        src={sponsor.src}
                        alt={sponsor.name}
                        className="h-24 w-full object-contain sm:h-28"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Silver Sponsors
                </p>

                <div className="mx-auto mt-4 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
                  {sponsors.silver.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${sponsor.name} website`}
                      title={sponsor.name}
                      className="flex h-36 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                    >
                      <img
                        src={sponsor.src}
                        alt={sponsor.name}
                        className="h-24 w-full object-contain"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Supporting Sponsors
                </p>

                <div className="mx-auto mt-4 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
                  {sponsors.supporting.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${sponsor.name} website`}
                      title={sponsor.name}
                      className="flex h-36 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                    >
                      <img
                        src={sponsor.src}
                        alt={sponsor.name}
                        className="h-24 w-full object-contain"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <p className="mt-8 text-center text-xs text-slate-500">
                Click a logo to visit the sponsor&apos;s official website.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight text-[#0F2A4D] sm:text-3xl">
                  Partner Institutions
                </h3>
                <p className="mx-auto mt-3 max-w-3xl text-slate-600">
                  Our conference is supported by a network of universities and
                  academic partners. Click a logo to visit the official
                  institution website.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {partners.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-28 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    title={p.name}
                  >
                    <img
                      src={p.src}
                      alt={p.name}
                      className="max-h-16 w-auto object-contain"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>

              <p className="mt-8 text-center text-sm text-slate-500">
                Logos are displayed for identification of collaborating
                institutions.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-center text-2xl font-bold tracking-tight text-[#0F2A4D] sm:text-3xl">
                Who Should Attend
              </h3>

              <div className="mt-6 space-y-5 text-slate-700 leading-relaxed text-base md:text-lg">
                <p>
                  IPNaCS &amp; IPoPS 2026 welcomes researchers, academics,
                  healthcare professionals, industry partners and postgraduate
                  students across pharmaceutical, nutraceutical, cosmeceutical
                  and health sciences.
                </p>
                <p>
                  Participants will gain opportunities to share findings,
                  connect with international collaborators, and explore how
                  digital transformation is reshaping research, education and
                  practice in health and wellness.
                </p>
              </div>
            </div>
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {importantDates.map((item) => (
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
            <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0F2A4D]">
                Mercure Kuala Lumpur Glenmarie
              </h3>

              <p className="mt-2 text-gray-600">
                Shah Alam, Selangor, Malaysia
              </p>

              <div className="mt-8">
                <p className="text-sm font-semibold text-[#0F2A4D]">
                  Address
                </p>

                <p className="mt-2 text-gray-700 leading-relaxed">
                  Jalan Usahawan U1/8, Seksyen U1, 40150
                  <br />
                  Shah Alam, Selangor, Malaysia
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Mercure+Kuala+Lumpur+Glenmarie"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center rounded-lg px-6 py-3 font-semibold text-white bg-[#0F2A4D] hover:bg-[#0c2240] transition shadow"
                >
                  Open in Google Maps
                </a>

                <a
                  href="https://all.accor.com/hotel/A7M8/index.en.shtml"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center rounded-lg px-6 py-3 font-semibold border border-gray-200 text-[#0F2A4D] hover:bg-gray-50 transition"
                >
                  Visit Hotel Website
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <iframe
                title="Mercure Kuala Lumpur Glenmarie Map"
                src="https://www.google.com/maps?q=Mercure%20Kuala%20Lumpur%20Glenmarie&output=embed"
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