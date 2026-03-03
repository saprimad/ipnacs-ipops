// app/about/page.tsx

type Partner = {
  name: string;
  src: string;
  url: string;
};

export default function AboutPage() {
  const partners: Partner[] = [
    {
      name: "Universiti Teknologi MARA",
      src: "/unilogo/uitm.png",
      url: "https://www.uitm.edu.my/",
    },
    {
      name: "Tokyo University of Science",
      src: "/unilogo/TUS.png",
      url: "https://www.tus.ac.jp/en/",
    },
    {
      name: "IMU University",
      src: "/unilogo/IMU.png",
      url: "https://www.imu.edu.my/",
    },
    {
      name: "Chulalongkorn University",
      src: "/unilogo/CHULA.png",
      url: "https://www.chula.ac.th/en/",
    },
    {
      name: "Universitas Indonesia",
      src: "/unilogo/UI.png",
      url: "https://www.ui.ac.id/en/",
    },
    {
      name: "University of Santo Tomas",
      src: "/unilogo/UST.png",
      url: "https://www.ust.edu.ph/",
    },
    {
      name: "Josai International University",
      src: "/unilogo/JIU.png",
      url: "https://www.jiu.ac.jp/en/",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          About
        </h1>
        <p className="mx-auto max-w-3xl text-base text-slate-600">
          Learn more about IPNaCS &amp; IPoPS 2026, our theme, and the partner institutions behind this
          25th Anniversary celebration.
        </p>
      </header>

      <div className="mt-14 space-y-16">
        {/* About the Conference */}
        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-center text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            About the Conference
          </h2>

          <div className="mt-6 space-y-5 text-slate-700 leading-relaxed">
            <p>
              Welcome to the official portal for the 8th International Conference on Pharmaceutical, Nutraceutical,
              and Cosmeceutical Sciences (IPNaCS) and the 11th International Postgraduate Conference on Pharmaceutical
              Sciences (IPoPS) 2026.
            </p>

            <p>
              This year is a landmark celebration marking the 25th Anniversary of the Faculty of Pharmacy,
              Universiti Teknologi MARA. For over two decades, this collaborative spirit has been the heartbeat of
              our community, and we are honoured to host this silver jubilee event.
            </p>

            <p>
              The landscape of health and wellness is shifting. As we celebrate 25 years of academic excellence,
              our focus turns toward the future:{" "}
              <span className="font-semibold text-brand-900">Digital Transformation</span>. In 2026, we explore how
              cutting-edge technology, from AI-driven drug discovery to digital health monitoring, is fundamentally
              reshaping the fields of:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
              <li>Pharmacology &amp; Pharmacy Practice</li>
              <li>Nutraceutical Sciences</li>
              <li>Cosmeceutical Innovation</li>
            </ul>

            <p>
              IPNaCS and IPoPS are the result of a deep-rooted partnership spanning more than 20 years. Whether you are
              an established researcher, an industry professional, or a postgraduate student at the start of your journey,
              this conference offers a platform to exchange ideas, forge global partnerships, and celebrate a quarter-century
              of pharmaceutical progress.
            </p>

            <p className="font-medium text-brand-900">
              Join us in 2026 as we honour our past and digitise our future.
            </p>
          </div>
        </section>

        {/* Partner Institutions Logos */}
        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
              Partner Institutions
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-slate-600">
              Our conference is supported by a network of universities and academic partners. Click a logo to visit the
              official institution website.
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
            Logos are displayed for identification of collaborating institutions.
          </p>
        </section>

        {/* Who Should Attend */}
        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-center text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            Who Should Attend
          </h2>

          <div className="mt-6 space-y-5 text-slate-700 leading-relaxed">
            <p>
              IPNaCS &amp; IPoPS 2026 welcomes researchers, academics, healthcare professionals, industry partners and
              postgraduate students across pharmaceutical, nutraceutical, cosmeceutical and health sciences.
            </p>
            <p>
              Participants will gain opportunities to share findings, connect with international collaborators, and explore
              how digital transformation is reshaping research, education and practice in health and wellness.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}