import Image from "next/image";

export default function RegistrationPage() {
  const fees = [
    {
      title: "Undergraduate (UG) / Postgraduate (PG)",
      note: "Valid student ID is required upon registration verification.",
      rows: [
        { label: "Early Bird", rm: "MYR 400", usd: "USD 110" },
        { label: "Normal", rm: "MYR 450", usd: "USD 120" },
      ],
    },
    {
      title: "Academician / Industry / Professional",
      note: "Applicable to academic staff, industry participants and professionals.",
      rows: [
        { label: "Early Bird", rm: "MYR 850", usd: "USD 230" },
        { label: "Normal", rm: "MYR 950", usd: "USD 250" },
      ],
    },
    {
      title: "IPNaCS–IPoPS Networking Dinner",
      note:
        "An exclusive networking evening fostering scientific dialogue, interdisciplinary collaboration and strategic partnerships among conference delegates.",
      rows: [{ label: "Dinner Fee", rm: "MYR 200", usd: "USD 60" }],
    },
  ] as const;

  const nonPresenterLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd8Ox39E2kydjQNtu2P8CgEVL9de6CRQ7q6jBF_YL9uInR4mw/formResponse?pli=1";

  const presenterLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSelJjnhh5f_2v1mZKHfod1P-RAXWdl-3-UDOa6P8zfAmDcNuQ/viewform";

  return (
    <main className="bg-[#F7F8FA] text-[#0F2A4D]">
      {/* HEADER */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration</h1>

          <div className="mx-auto h-1 w-16 rounded bg-[#E5B82E] mb-6" />

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Registration is categorised into two participation types:
            Presenter and Non-Presenter. Participants are advised to review the
            registration process flowchart below before proceeding with
            registration. Presenters must complete the Presenter form, which
            includes abstract submission, while Non-Presenters may register
            through the standard registration form. Registration confirmation
            and receipt will be issued upon payment verification.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {/* REGISTRATION FEES */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Registration Fees
              </h2>
              <div className="mx-auto mt-3 h-1 w-12 rounded bg-[#E5B82E]" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {fees.map((f) => (
                <div
                  key={f.title}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold">{f.title}</h3>

                  <div className="mt-6 space-y-3">
                    {f.rows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between rounded-xl border border-gray-200 bg-[#F7F8FA] px-5 py-4"
                      >
                        <div className="text-sm font-semibold">
                          {row.label}
                        </div>

                        <div className="text-base font-bold">
                          {row.rm}
                          {row.usd && (
                            <span className="text-sm text-gray-500">
                              {" "}
                              / {row.usd}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-sm text-gray-600">{f.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* REGISTRATION PROCESS */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Registration Process
              </h2>
              <div className="mx-auto mt-3 h-1 w-12 rounded bg-[#E5B82E]" />
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <Image
                src="/flowchart.png"
                alt="Conference Registration Flowchart"
                width={1200}
                height={1800}
                priority
                className="mx-auto h-auto w-full max-w-3xl"
              />

              {/* POWER BUTTONS */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2">

                {/* Presenter */}
                <a
                  href={presenterLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center rounded-xl px-10 py-6 text-white bg-[#0F2A4D] hover:bg-[#0C223F] shadow-lg hover:shadow-xl transition"
                >
                  <span className="text-2xl mb-2">👥</span>
                  <span className="text-lg font-semibold">
                    Presenter Registration
                  </span>
                  <span className="text-sm opacity-90">
                    (Abstract Submission)
                  </span>
                </a>

                {/* Non Presenter */}
                <a
                  href={nonPresenterLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center rounded-xl px-10 py-6 border-2 border-[#0F2A4D] text-[#0F2A4D] bg-white hover:bg-[#0F2A4D] hover:text-white shadow-md transition"
                >
                  <span className="text-2xl mb-2">👤</span>
                  <span className="text-lg font-semibold">
                    Non-Presenter Registration
                  </span>
                </a>
              </div>

              <p className="mt-6 text-center text-sm text-gray-600">
                Please select the appropriate pathway according to your
                participation category.
              </p>
            </div>
          </div>

          {/* IMPORTANT NOTES */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold">Important Notes</h3>

            <ul className="mt-5 space-y-3 text-gray-600">
              {[
                "Early bird rates are offered based on slot availability.",
                "Student category requires a valid student ID.",
                "Participants are responsible for selecting the appropriate category.",
                "The organiser reserves the right to verify eligibility and request supporting documentation where necessary.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#E5B82E]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}