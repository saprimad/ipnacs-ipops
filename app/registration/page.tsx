import Image from "next/image";

export default function RegistrationPage() {
  const fees = [
    {
      title: "Undergraduate (UG) / Postgraduate (PG)",
      note: "Valid student ID is required upon registration verification.",
      rows: [
        { label: "Early Bird", rm: "MYR 400", usd: "USD 110", closed: true },
        { label: "Normal", rm: "MYR 450", usd: "USD 120", closed: false },
      ],
    },
    {
      title: "Academician / Industry / Professional",
      note: "Applicable to academic staff, industry participants and professionals.",
      rows: [
        { label: "Early Bird", rm: "MYR 850", usd: "USD 230", closed: true },
        { label: "Normal", rm: "MYR 950", usd: "USD 250", closed: false },
      ],
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Registration
          </h1>

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

            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
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
                        className={`flex items-center justify-between rounded-xl border border-gray-200 bg-[#F7F8FA] px-5 py-4 ${
                          row.closed ? "opacity-60" : ""
                        }`}
                      >
                        <div
                          className={`text-sm font-semibold ${
                            row.closed ? "line-through" : ""
                          }`}
                        >
                          {row.label}
                        </div>

                        <div className="flex items-center gap-2 text-base font-bold">
                          <span className={row.closed ? "line-through" : ""}>
                            {row.rm}
                            {row.usd && (
                              <span className="text-sm text-gray-500">
                                {" "}
                                / {row.usd}
                              </span>
                            )}
                          </span>

                          {row.closed && (
                            <span className="rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-600 no-underline">
                              Closed
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-sm text-gray-600">{f.note}</p>
                </div>
              ))}

              {/* PAYMENT DEADLINE REMINDER */}
              <aside className="rounded-2xl border border-[#E5B82E]/40 bg-[#FFF9E6] p-8 shadow-sm hover:shadow-md transition">
                <div className="mb-5 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5B82E] text-lg">
                    📢
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0F2A4D]">
                      Payment Deadline Reminder
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Participants are reminded to complete payment according to
                      the following deadlines based on your chosen payment
                      method:
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-[#0F2A4D]">
                      UiTM FinePay Link
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      by 10 August 2026
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-[#0F2A4D]">
                      Bank Transfer
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      including for international participants
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      by 31 July 2026
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-[#0F2A4D]">
                      Local Order (LO)
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      by 31 July 2026
                    </p>
                  </div>
                </div>

                <p className="mt-5 rounded-xl bg-[#0F2A4D] px-4 py-3 text-sm leading-relaxed text-white">
                  Please ensure payment is made within the stipulated timeframe
                  to secure your registration.
                </p>
              </aside>
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

              {/* BUTTONS */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
                {/* Presenter */}
                <a
                  href={presenterLink}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[100px] flex flex-col items-center justify-center rounded-xl px-6 py-4 text-white bg-[#0F2A4D] hover:bg-[#0C223F] shadow-md hover:shadow-lg transition"
                >
                  <span className="text-xl mb-1">🎤</span>
                  <span className="text-base font-semibold text-center leading-tight">
                    Presenter Registration
                  </span>
                  <span className="text-xs opacity-90 text-center">
                    (Abstract Submission)
                  </span>
                </a>

                {/* Non Presenter */}
                <a
                  href={nonPresenterLink}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[100px] flex flex-col items-center justify-center rounded-xl px-6 py-4 border border-[#0F2A4D] text-[#0F2A4D] bg-white hover:bg-[#0F2A4D] hover:text-white shadow-sm transition"
                >
                  <span className="text-xl mb-1">👤</span>
                  <span className="text-base font-semibold text-center leading-tight">
                    Non-Presenter Registration
                  </span>
                </a>
              </div>

              <p className="mt-5 text-center text-sm text-gray-600">
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
                "Early bird registration is now closed. Normal rates apply.",
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