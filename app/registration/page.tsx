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
      note: "Pharmacy Faculty: FOC. External participants: MYR 200 / USD 60.",
      rows: [{ label: "Dinner Fee", rm: "MYR 200", usd: "USD 60" }],
    },
  ] as const;

  return (
    <main className="bg-[#F7F8FA] text-[#0F2A4D]">
      {/* Header */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Registration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Registration Fees
          </h1>

          <div className="mx-auto h-1 w-16 rounded bg-[#E5B82E] mb-6" />

          <p className="text-gray-600 max-w-3xl mx-auto">
            Registration and payment will be processed exclusively via the official 
            UiTM event management system. Once the system is activated, participants 
            may select their category and complete payment accordingly.
          </p>

          <p className="mt-4 text-sm text-gray-500 max-w-2xl mx-auto">
            Kindly ensure that the selected category corresponds accurately to your 
            participant status. Confirmation and receipt issuance will follow the 
            official UiTM payment workflow.
          </p>

          <div className="mt-8">
            <button
              disabled
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-semibold text-white bg-gray-400 cursor-not-allowed"
            >
              UiTM Payment System: Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Fee Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
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
              <li>Participants are responsible for selecting the appropriate category.</li>
              <li>The organiser reserves the right to verify eligibility and request supporting documentation where necessary.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}