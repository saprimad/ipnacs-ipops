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
      note: "An exclusive networking evening fostering scientific dialogue, interdisciplinary collaboration and strategic partnerships among conference delegates.",
      rows: [{ label: "Dinner Fee", rm: "MYR 200", usd: "USD 60" }],
    },
  ] as const;

  const registrationLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd8Ox39E2kydjQNtu2P8CgEVL9de6CRQ7q6jBF_YL9uInR4mw/formResponse?pli=1";

  return (
    <main className="bg-[#F7F8FA] text-[#0F2A4D]">
      {/* Header */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration</h1>

          <div className="mx-auto h-1 w-16 rounded bg-[#E5B82E] mb-6" />

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Registration is conducted via the official conference registration form.
            Please complete the form and follow the payment instructions according
            to your selected participant category. Kindly ensure that the selected
            category corresponds to your participant status. Confirmation and receipt
            will be issued upon successful payment verification.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <a
              href={registrationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-12 py-4 text-lg font-semibold text-white bg-[#0F2A4D] hover:bg-[#0C223F] shadow-md hover:shadow-lg transition"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Fee Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F2A4D]">
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
                <h2 className="text-lg font-semibold">{f.title}</h2>

                <div className="mt-6 space-y-3">
                  {f.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-xl border border-gray-200 bg-[#F7F8FA] px-5 py-4"
                    >
                      <div className="text-sm font-semibold text-[#0F2A4D]">
                        {row.label}
                      </div>

                      <div className="text-base font-bold text-[#0F2A4D]">
                        {row.rm}
                        {row.usd ? (
                          <span className="text-sm font-semibold text-gray-500">
                            {" "}
                            / {row.usd}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm text-gray-600 leading-relaxed">
                  {f.note}
                </p>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-14 bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-3">Important Notes</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Early bird rates are offered based on slot availability.</li>
              <li>Student category requires a valid student ID.</li>
              <li>
                Participants are responsible for selecting the appropriate category.
              </li>
              <li>
                The organiser reserves the right to verify eligibility and request
                supporting documentation where necessary.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}