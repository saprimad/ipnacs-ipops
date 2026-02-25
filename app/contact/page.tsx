// app/contact/page.tsx

import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          Contact & Organising Committee
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Official contact information and committee structure for IPNaCS &amp; IPoPS 2026.
        </p>
      </header>

      {/* Contact Section */}
      <section className="mt-14 rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
        <h2 className="text-2xl font-bold text-brand-900">
          Conference Enquiries
        </h2>

        <p className="mt-6 text-slate-700">
          Email:
        </p>

        <a
          href="mailto:ipnacsipops26@gmail.com"
          className="mt-2 block text-lg font-semibold text-brand-900 hover:underline"
        >
          ipnacsipops26@gmail.com
        </a>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-brand-900">Organiser</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Faculty of Pharmacy <br />
            Level 11, FF1 Building <br />
            UiTM Selangor, Puncak Alam Campus <br />
            42300 Bandar Puncak Alam <br />
            Selangor, MALAYSIA
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href="https://www.facebook.com/pharmacyuitm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white hover:bg-brand-600 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.youtube.com/channel/UCHg7xn66_RfCLHztSXadMAg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white hover:bg-brand-600 transition"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.instagram.com/pharmacy_uitm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white hover:bg-brand-600 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </section>

      {/* Committee Section */}
      <section className="mt-16 rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
        <h2 className="text-3xl font-bold text-brand-900">
          Organising Committee
        </h2>

        <div className="mt-8 space-y-10">

          {/* Organizing Committee */}
          <div>
            <h3 className="text-xl font-semibold text-brand-900">Organizing Committee</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li><strong>Conference Chair:</strong> Prof. Dr. Mizaton Hazizul Hasan</li>
              <li><strong>Co-Chair:</strong> Assoc. Prof. Dr. Mohd Shahezwan Abd Wahab</li>
              <li><strong>Co-Chair (PG):</strong> Mohd Radzi Ab Aziz</li>
              <li><strong>Secretary:</strong> Dr. Siti Syairah Abdul Mutalip</li>
              <li><strong>Secretary (PG):</strong> Nazif Salihin Ahmad Imran</li>
              <li><strong>Treasurer:</strong> Assoc. Prof. Dr. Yuslina Zakaria</li>
            </ul>
          </div>

          {/* Scientific Committee */}
          <div>
            <h3 className="text-xl font-semibold text-brand-900">Scientific Committee</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li><strong>Chair:</strong> Assoc. Prof. Dr. Aida Azlina Ali</li>
              <li><strong>Co-Chair (PG):</strong> Ruhisy Syakirah Mohd Rasul</li>
            </ul>
          </div>

          {/* Program Committee */}
          <div>
            <h3 className="text-xl font-semibold text-brand-900">Program Committee</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li><strong>Chair:</strong> Assoc. Prof. Dr. Nor Amlizan Ramli</li>
              <li><strong>Co-Chair (PG):</strong> Nabilah Husna Aziz</li>
            </ul>
          </div>

          {/* Registration Committee */}
          <div>
            <h3 className="text-xl font-semibold text-brand-900">Registration Committee</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li><strong>Chair:</strong> Dr. Aisyah Hasyila Jahidin</li>
              <li><strong>Co-Chair (PG):</strong> Ahmad Merza Mohd Nasir</li>
            </ul>
          </div>

          {/* Logistics & Operations */}
          <div>
            <h3 className="text-xl font-semibold text-brand-900">Logistics & Operations Committee</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li><strong>Chair:</strong> Mr. Hamzah Aziz</li>
              <li><strong>Co-Chair (PG):</strong> Kamal Zakaria</li>
            </ul>
          </div>

          {/* Hospitality */}
          <div>
            <h3 className="text-xl font-semibold text-brand-900">Hospitality & Accommodation</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li><strong>Chair:</strong> Assoc. Prof. Dr. Fazleen Haslinda Mohd Hatta</li>
              <li><strong>Co-Chair (PG):</strong> Nurin Arisya Binti Zulazhar</li>
            </ul>
          </div>

          {/* Publicity */}
          <div>
            <h3 className="text-xl font-semibold text-brand-900">Publicity & Outreach Committee</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li><strong>Chair:</strong> Dr. Mohd Faiz Othman</li>
              <li><strong>Co-Chair (PG):</strong> Mad Sapri Tumiran</li>
            </ul>
          </div>

          {/* Sponsorship */}
          <div>
            <h3 className="text-xl font-semibold text-brand-900">Sponsorship Committee</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li><strong>Chair:</strong> Dr. Siti Alwani Ariffin</li>
              <li><strong>Co-Chair (PG):</strong> Alwani binti Mohd Sidik</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
