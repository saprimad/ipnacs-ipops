import Image from "next/image";

export default function RegistrationPage() {
  const fees = [
    {
      title: "Undergraduate (UG) / Postgraduate (PG)",
      rm: "MYR 450",
      usd: "USD 120",
      note: "Valid student ID is required upon registration verification.",
    },
    {
      title: "Academician / Industry / Professional",
      rm: "MYR 950",
      usd: "USD 250",
      note: "Applicable to academic staff, industry participants and professionals.",
    },
  ] as const;

  const nonPresenterLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd8Ox39E2kydjQNtu2P8CgEVL9de6CRQ7q6jBF_YL9uInR4mw/formResponse?pli=1";

  const presenterLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSelJjnhh5f_2v1mZKHfod1P-RAXWdl-3-UDOa6P8zfAmDcNuQ/viewform";

  return (
    <main className="bg-[#F7F8FA] text-[#0F2A4D]">
      {/* HEADER */}
      <section className="border-b border-gray-200 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Registration
          </h1>

          <div className="mx-auto mb-6 h-1 w-16 rounded bg-[#E5B82E]" />

          <p className="mx-auto max-w-3xl leading-relaxed text-gray-600">
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
        <div className="mx-auto max-w-6xl space-y-16 px-6">
          {/* REGISTRATION FEES */}
          <div>
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Registration Fees
              </h2>

              <div className="mx-auto mt-3 h-1 w-12 rounded bg-[#E5B82E]" />
            </div>

            <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-3">
              {/* REGISTRATION CATEGORIES */}
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="mb-5 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5B82E] text-lg">
                    🎟️
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0F2A4D]">
                      Registration Categories
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Please select the appropriate registration category.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {fees.map((fee) => (
                    <div
                      key={fee.title}
                      className="rounded-xl border border-gray-200 bg-[#F7F8FA] p-5"
                    >
                      <h4 className="text-sm font-semibold leading-relaxed text-[#0F2A4D]">
                        {fee.title}
                      </h4>

                      <div className="mt-3 flex flex-wrap items-baseline gap-x-1">
                        <span className="text-lg font-bold text-[#0F2A4D]">
                          {fee.rm}
                        </span>

                        <span className="text-sm font-medium text-gray-500">
                          / {fee.usd}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        {fee.note}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 rounded-xl bg-[#0F2A4D] px-4 py-3 text-sm leading-relaxed text-white">
                  International participants are required to make payment in
                  USD.
                </p>
              </div>

              {/* INTERNATIONAL PAYMENT NOTE */}
              <aside className="h-full rounded-2xl border border-[#E5B82E]/40 bg-[#FFF9E6] p-8 shadow-sm transition hover:shadow-md">
                <div className="mb-5 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5B82E] text-lg">
                    🌍
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0F2A4D]">
                      International Payment Note
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Important payment information for international
                      participants.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* PAYMENT REQUIREMENT */}
                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-[#0F2A4D]">
                      Payment Requirement
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Payment must be made in{" "}
                      <strong className="text-[#0F2A4D]">USD</strong>. The full
                      registration fee must be received, with all bank transfer
                      charges borne by the sender.
                    </p>
                  </div>

                  {/* CONSOLIDATED PAYMENT */}
                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-[#0F2A4D]">
                      Consolidated Payment
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Participants from the same institution or group may make
                      a single consolidated payment to minimise transfer fees.
                    </p>
                  </div>

                  {/* ADVANCE NOTIFICATION */}
                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-[#0F2A4D]">
                      Advance Notification
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Please email us in advance with the names and registration
                      categories of all participants included in the payment.
                    </p>
                  </div>
                </div>

                {/* EMAIL CONTACTS */}
                <div className="mt-5 rounded-xl bg-[#0F2A4D] px-4 py-3 text-sm leading-relaxed text-white">
                  <p className="mb-2 font-semibold">
                    International payment enquiries:
                  </p>

                  <a
                    href="mailto:ipnacsipops26@gmail.com"
                    className="block break-all underline underline-offset-4 transition hover:opacity-80"
                  >
                    ipnacsipops26@gmail.com
                  </a>

                  <a
                    href="mailto:yuslina@uitm.edu.my"
                    className="mt-1 block break-all underline underline-offset-4 transition hover:opacity-80"
                  >
                    yuslina@uitm.edu.my
                  </a>
                </div>
              </aside>

              {/* PAYMENT DEADLINE REMINDER */}
              <aside className="h-full rounded-2xl border border-[#E5B82E]/40 bg-[#FFF9E6] p-8 shadow-sm transition hover:shadow-md">
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
                      the following deadlines based on the selected payment
                      method:
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* FINEPAY */}
                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-[#0F2A4D]">
                      UiTM FinePay Link
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      By 10 August 2026
                    </p>
                  </div>

                  {/* BANK TRANSFER */}
                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-[#0F2A4D]">
                      Bank Transfer
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Including international participants
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      By 31 July 2026
                    </p>
                  </div>

                  {/* LOCAL ORDER */}
                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-[#0F2A4D]">
                      Local Order (LO)
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      By 31 July 2026
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
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Registration Process
              </h2>

              <div className="mx-auto mt-3 h-1 w-12 rounded bg-[#E5B82E]" />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <Image
                src="/flowchart.png"
                alt="Conference Registration Flowchart"
                width={1200}
                height={1800}
                priority
                className="mx-auto h-auto w-full max-w-3xl"
              />

              {/* REGISTRATION BUTTONS */}
              <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
                {/* PRESENTER */}
                <a
                  href={presenterLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[100px] flex-col items-center justify-center rounded-xl bg-[#0F2A4D] px-6 py-4 text-white shadow-md transition hover:bg-[#0C223F] hover:shadow-lg"
                >
                  <span className="mb-1 text-xl">🎤</span>

                  <span className="text-center text-base font-semibold leading-tight">
                    Presenter Registration
                  </span>

                  <span className="text-center text-xs opacity-90">
                    Abstract Submission
                  </span>
                </a>

                {/* NON-PRESENTER */}
                <a
                  href={nonPresenterLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[100px] flex-col items-center justify-center rounded-xl border border-[#0F2A4D] bg-white px-6 py-4 text-[#0F2A4D] shadow-sm transition hover:bg-[#0F2A4D] hover:text-white"
                >
                  <span className="mb-1 text-xl">👤</span>

                  <span className="text-center text-base font-semibold leading-tight">
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
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold">Important Notes</h3>

            <ul className="mt-5 space-y-3 text-gray-600">
              {[
                "Student registration requires a valid student ID.",
                "International participants must complete payment in USD.",
                "Bank transfer charges must be borne by the sender.",
                "Participants are responsible for selecting the appropriate registration category.",
                "The organiser reserves the right to verify eligibility and request supporting documentation where necessary.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E5B82E]" />

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