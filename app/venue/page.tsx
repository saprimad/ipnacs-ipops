export default function VenuePage() {
  return (
    <main className="bg-[#F7F8FA] text-[#0F2A4D]">

      {/* HEADER */}
      <section className="bg-white py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Co-brand logos */}
          <div className="flex items-center justify-center gap-10 mb-10 flex-wrap">
            <img src="/uitm.png" alt="UiTM Logo" className="h-16 md:h-20 w-auto" />
            <div className="hidden sm:block h-16 md:h-20 w-px bg-gray-300" />
            <img src="/logo.png" alt="IPNACS-IPOPS Logo" className="h-16 md:h-20 w-auto" />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Faculty of Pharmacy · Universiti Teknologi MARA
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Venue
          </h1>

          <div className="mx-auto mb-6 h-1 w-20 rounded bg-[#E5B82E]" />

          <p className="mx-auto max-w-2xl text-gray-600 leading-relaxed">
            Conference location, directions, nearby accommodation, and travel guidance
            for participants.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-3">

          {/* Venue details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-3">Main Venue</h2>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-[#0F2A4D]">[Venue Name]</span>
                <br />
                [Full Address Line 1]
                <br />
                [City, State, Postcode, Country]
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-[#F7F8FA] border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Registration Desk</p>
                  <p className="font-semibold mt-1">[Location / Hall]</p>
                </div>
                <div className="rounded-lg bg-[#F7F8FA] border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Main Hall</p>
                  <p className="font-semibold mt-1">[Hall Name]</p>
                </div>
                <div className="rounded-lg bg-[#F7F8FA] border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Poster Area</p>
                  <p className="font-semibold mt-1">[Area Name]</p>
                </div>
                <div className="rounded-lg bg-[#F7F8FA] border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Help Desk</p>
                  <p className="font-semibold mt-1">[Contact Point]</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#map"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white bg-[#0F2A4D] hover:opacity-90 transition"
                >
                  View Map
                </a>
                <a
                  href="#travel"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold border border-[#0F2A4D] text-[#0F2A4D] hover:bg-[#0F2A4D] hover:text-white transition"
                >
                  Travel Info
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div id="map" className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-3">Map</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Add a Google Maps link or embedded map here.
              </p>

              <div className="rounded-xl border border-dashed border-gray-300 bg-[#F7F8FA] p-10 text-center text-gray-500">
                Map embed placeholder
              </div>

              <div className="mt-6 text-sm text-gray-600">
                Suggested: add a button linking to Google Maps directions.
              </div>
            </div>

            {/* Travel info */}
            <div id="travel" className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-3">Travel Information</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-[#0F2A4D]">By Air:</span> [Nearest airport and approximate travel time]
                </p>
                <p>
                  <span className="font-semibold text-[#0F2A4D]">By Train:</span> [Nearest station and approximate travel time]
                </p>
                <p>
                  <span className="font-semibold text-[#0F2A4D]">By Car:</span> [Parking guidance / entry points]
                </p>
                <p>
                  <span className="font-semibold text-[#0F2A4D]">Local Transport:</span> [Bus/Grab/taxi notes]
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-3">Nearby Accommodation</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <span className="font-semibold text-[#0F2A4D]">[Hotel 1]</span>
                  <div className="text-sm">Approx. [x] minutes</div>
                </li>
                <li>
                  <span className="font-semibold text-[#0F2A4D]">[Hotel 2]</span>
                  <div className="text-sm">Approx. [x] minutes</div>
                </li>
                <li>
                  <span className="font-semibold text-[#0F2A4D]">[Hotel 3]</span>
                  <div className="text-sm">Approx. [x] minutes</div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-3">Quick Notes</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Registration opens at: [time]</li>
                <li>Recommended arrival time: [time]</li>
                <li>Dress code: Business / Smart casual</li>
                <li>Wi-Fi: [details]</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-3">Need help?</h3>
              <p className="text-gray-600 leading-relaxed">
                Contact the secretariat for directions or assistance.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Email: <span className="font-semibold text-[#0F2A4D]">conference@uitm.edu.my</span>
                <br />
                Phone: <span className="font-semibold text-[#0F2A4D]">+60 XX-XXXX XXXX</span>
              </p>
            </div>

          </aside>
        </div>
      </section>

      <div className="py-10" />
    </main>
  );
}
