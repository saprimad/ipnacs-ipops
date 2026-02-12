export default function RegistrationPage() {
  const fees = [
    {
      title: "Undergraduate / Postgraduate",
      price: "MYR 450",
      usd: "USD 120",
      note: "Valid student ID required.",
    },
    {
      title: "Pharmacist / Health Professional (PH)",
      price: "MYR 600",
      usd: "",
      note: "For practitioners and clinicians.",
    },
    {
      title: "Academic / Researcher / Industry",
      price: "MYR 800",
      usd: "USD 200",
      note: "For academia and industry participants.",
    },
  ] as const;

  return (
    <main className="bg-[#F7F8FA] text-[#0F2A4D]">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Registration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Registration Fees
          </h1>

          <div className="mx-auto h-1 w-16 rounded bg-[#E5B82E] mb-6" />

          <p className="text-gray-600 max-w-2xl mx-auto">
            Registration will be processed via the UiTM event system. The official
            payment link will be announced soon.
          </p>

          <div className="mt-8">
            <button
              disabled
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-semibold text-white bg-gray-400 cursor-not-allowed"
            >
              UiTM Payment Link: To Be Announced
            </button>

            <p className="mt-3 text-xs text-gray-500">
              Please check back for updates. Once available, the payment link will be
              published here.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {fees.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-lg font-semibold mb-6">{f.title}</h2>

                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-[#F7F8FA] px-5 py-3">
                  <span className="text-sm text-gray-500">Fee</span>
                  <span className="text-xl font-bold text-[#0F2A4D]">
                    {f.price}
                  </span>
                  {f.usd ? (
                    <span className="text-sm text-gray-500">/ {f.usd}</span>
                  ) : null}
                </div>

                <p className="mt-5 text-sm text-gray-600 leading-relaxed">
                  {f.note}
                </p>

                <button
                  disabled
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 font-semibold text-white bg-gray-400 cursor-not-allowed"
                >
                  Payment Link: To Be Announced
                </button>

                <p className="mt-3 text-xs text-gray-500">
                  Registration payment will be available via UiTM event system.
                </p>
              </div>
            ))}
          </div>

          {/* Fee Summary Table */}
          <div className="mt-16 bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-xl font-semibold">Fee Summary</h3>
              <p className="text-sm text-gray-600 mt-1">
                Final payment workflow and receipt confirmation follow the UiTM event
                system process.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#0F2A4D] text-white">
                    <th className="px-6 py-4 text-sm font-semibold">Category</th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Fee (MYR / USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 text-gray-700">
                      Undergraduate / Postgraduate
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      MYR 450 / USD 120
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 text-gray-700">
                      Pharmacist / Health Professional (PH)
                    </td>
                    <td className="px-6 py-4 text-gray-700">MYR 600</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 text-gray-700">
                      Academic / Researcher / Industry
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      MYR 800 / USD 200
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-14 bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-3">Notes</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Student category is applicable with a valid student ID.</li>
              <li>
                Participants are responsible for ensuring the correct category
                selection.
              </li>
              <li>
                Payment confirmation and receipts follow the UiTM event system
                process.
              </li>
              <li>
                The organiser reserves the right to request verification documents
                where applicable.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
