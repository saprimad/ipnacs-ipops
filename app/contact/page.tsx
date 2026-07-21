// app/contact/page.tsx

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const leadership = [
  ["Advisor", "Prof Dato’ Dr. Abu Bakar Abdul Majeed"],
  ["Chair", "Prof. Dr. Mizaton Hazizul Hasan"],
  ["Co-Chair", "Assoc. Prof. Dr. Shahezwan Abd. Wahab"],
  ["Co-Chair (PG)", "Ts. Mohd Radzi Ab Aziz (PG)"],
  ["Secretary", "Pn. Nur Syazwani Taridi"],
  ["Secretary (PG)", "En. Nazif Salihin Ahmad Imran (PG)"],
  ["Treasurer", "Assoc. Prof. Dr. Yuslina Zakaria"],
  ["Vice Treasurer I", "Dr. Siti Nooraishah Hussin"],
  ["Vice Treasurer II", "Pn. Zaharah Mokhtar"],
] as const;

const committees = [
  {
    title: "Scientific Committee",
    members: [
      "Assoc. Prof. Dr. Aida Azlina Ali (Head)",
      "Cik Ruhisy Syakirah Mohd Rasul (Co-Head PG)",
      "Assoc. Prof. Dr. Hanish Singh",
      "Assoc. Prof. Dr. Mahmathi Karuppannan",
      "Assoc. Prof. Dr. Nurhuda Manshoor",
      "Assoc. Prof. Dr. Gurmeet Kaur Surindar Singh",
      "Dr. Nor Haryati Abu Samah",
      "Dr. Khater Al-Japairai",
      "Dr. Mashani Mohamad",
      "Dr. Hazem Choukaife",
      "Cik Siti Sarah Syairah Kushairi",
      "En. Muhammad Aqif Zikry Nazri (PG)",
    ],
  },
  {
    title: "Program Committee",
    members: [
      "Assoc Prof Dr. Nor Amlizan Ramli (Head)",
      "Dr. Norkasihan Ibrahim (Co-Head)",
      "Cik Nabilah Husna Aziz (Co-Head PG)",
      "Assoc. Prof. Dr. Khuriah Abdul Hamid",
      "Dr. Nadia Jalaludin",
      "Dr. Hannis Fadzillah Mohsin",
      "Dr. Maziana Mahamood",
      "Dr Farhana Fakhira Ismail (MC)",
      "Cik Norazua Ahmad",
      "Pn. Norhayati Omar",
      "Pn. Noor Fazreen Atasha Md Hamisan",
      "Pn. Nur Murshidah Mohd Adam",
      "Pn. A’tiqah Syuhada Md Zaini (PG)",
      "En. Mohammad Amirul Izzan Amran (PG)",
      "Pn. Siti Ama Leena bt Sabran (PG)",
      "Pn. Nurul Farhana bt Nasrodin (PG)",
      "Pn. Nik Shamsiah Nik Salleh (PG)",
      "Pn. Tengku Malini Tengku Mohamed Noor Izam (PG)",
      "Pn. Nur Aini binti Salamat (PG)",
      "En. Asyraff Abdullah (PG)",
    ],
  },
  {
    title: "Registration Committee",
    members: [
      "Dr. Aisyah Hasyila Jahidin (Head)",
      "En. Ahmad Merza Mohd Nasir (Co-Head PG)",
      "Dr Nurfarhana Ferdaos",
      "Pn. Nurul Farhanah Misripin",
      "Pn. Siti Mukhaiyarah Binti Mahtar",
      "Pn. Saliha Azlan",
      "Pn. Zaleha Mahadi",
      "Pn. Nik Ateerah Rasheeda Mohd Rocky (PG)",
      "Cik Nur Aqilah Nadhirah Affendie (PG)",
      "En. Muhammad Nabil Afifi Mohd Zaki (PG)",
    ],
  },
  {
    title: "Logistics & Operations Committee",
    members: [
      "En. Hamzah Aziz (Head)",
      "En. Muhamad Kamal Zakaria (Co-Head PG)",
      "En. Alif Mohd Lotfi",
      "En. Mohd Alimukthi Mansor",
      "En. Fairos Abdul Hamid",
      "En. Hassan Ahmad",
      "En. Mohd Razi Nekmat",
      "En. Mustaqim Zulkifle",
      "Pn. Nor Azliana Norli",
      "Pn. Wan Nurul Ezzati Farhani Ishak",
      "Cik Norazua Ahmad",
      "Pn. Nurul Izzati Ismail",
    ],
  },
  {
    title: "Hospitality & Accommodation / Gala Dinner Committee",
    subtitle: "25 Years of Excellence",
    members: [
      "Assoc Prof Dr. Fazleen Haslinda Mohd Hatta (Head)",
      "Cik Nurin Arisya Zulazhar (Co-Head PG)",
      "Cik Nur Alya Amirah Azhar (PG)",
      "Cik Nur’Alin Syahmina Hashim (PG)",
      "Cik Mardhiah Binti Mohd Hatta",
    ],
  },
  {
    title: "Publicity & Outreach Committee",
    members: [
      "Dr. Mohd Faiz Othman (Head)",
      "En. Mad Sapri Tumiran (Co-Head PG)",
      "En. Ahmad Azani Othman",
      "En. Muhammad Izzudin ‘Zamery",
    ],
  },
  {
    title: "Sponsorship Committee",
    members: [
      "Dr. Siti Alwani Ariffin (Head)",
      "Pn. Alwani Mohd Sidik (Co-Head PG)",
      "Dr Zolkapli Eshak",
      "Dr Norazlina Ahmad",
      "En. Hamim Aiman Kamaruzzaman",
      "Pn. Raja Noorfatihah Raja Lias",
      "Pn. Norhayati Mohd Monzai",
      "Cik Afiqah Mohammad (PG)",
    ],
  },
  {
    title: "Professorial Lecture Committee",
    members: [
      "Assoc Prof Dr. Lim Siong Meng (Head)",
      "Assoc. Prof. Dr. Fazlin Mohd Fauzi",
      "Cik. Nik Aisyah Najwa Nik Mustaffa Sahpri",
      "Pn. Syahida Fathiah Ahmad Kamal",
      "Pn. Noralisa Mohd Noor",
      "Pn. Nur Atielia Preshahdin",
    ],
  },
] as const;

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          Contact &amp; Organising Committee
        </h1>

        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Official contact information and committee structure for IPNaCS &amp;
          IPoPS 2026.
        </p>
      </header>

      <section className="mt-14 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Conference Enquiries
            </p>

            <h2 className="mt-3 text-2xl font-bold text-brand-900">
              Get in Touch
            </h2>

            <p className="mt-4 text-slate-600">
              For general enquiries regarding IPNaCS &amp; IPoPS 2026, please
              contact the conference secretariat via email.
            </p>

            <a
              href="mailto:ipnacsipops26@gmail.com"
              className="mt-5 inline-flex rounded-md bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            >
              ipnacsipops26@gmail.com
            </a>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.facebook.com/pharmacyuitm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Faculty of Pharmacy UiTM Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.youtube.com/channel/UCHg7xn66_RfCLHztSXadMAg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Faculty of Pharmacy UiTM YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-600"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.instagram.com/pharmacy_uitm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Faculty of Pharmacy UiTM Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-brand-900">Organiser</h3>

            <p className="mt-3 leading-relaxed text-slate-700">
              Faculty of Pharmacy <br />
              Level 11, FF1 Building <br />
              UiTM Selangor, Puncak Alam Campus <br />
              42300 Bandar Puncak Alam <br />
              Selangor, MALAYSIA
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            Committee
          </p>

          <h2 className="mt-3 text-3xl font-bold text-brand-900">
            Organising Committee
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            The committee brings together academic, administrative, technical,
            and postgraduate representatives supporting the conference.
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-xl font-bold text-brand-900">
            Main Organising Committee
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {leadership.map(([role, name]) => (
              <div
                key={role}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                  {role}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {committees.map((committee) => (
            <article
              key={committee.title}
              className="rounded-lg border border-slate-200 p-6"
            >
              <h3 className="text-xl font-bold text-brand-900">
                {committee.title}
              </h3>

              {"subtitle" in committee && (
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {committee.subtitle}
                </p>
              )}

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {committee.members.map((member) => (
                  <li key={member} className="leading-6">
                    {member}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}