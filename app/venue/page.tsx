// app/venue/page.tsx

import Link from "next/link";

const venue = {
  name: "DoubleTree by Hilton Shah Alam i-City",
  cityLine: "Shah Alam, Selangor, Malaysia",
  addressLine: "i-City, Shah Alam, Selangor, Malaysia",
  mapsQuery:
    "DoubleTree by Hilton Shah Alam i-City",
  website: "https://www.hilton.com/en/hotels/szbiadi-doubletree-shah-alam-i-city/",
};

export default function VenuePage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venue.mapsQuery
  )}`;

  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    venue.mapsQuery
  )}&output=embed`;

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          Venue
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          IPNaCS &amp; IPoPS 2026 will be held at <span className="font-semibold text-brand-900">{venue.name}</span>,
          located in Shah Alam, Selangor, Malaysia.
        </p>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {/* Left: Venue details */}
        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            {venue.name}
          </h2>
          <p className="mt-3 text-slate-600">{venue.cityLine}</p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-brand-900">Address</h3>
              <p className="mt-2 text-slate-700">{venue.addressLine}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
                >
                  Open in Google Maps
                </a>
                <a
                  href={venue.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
                >
                  Visit Hotel Website
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-900">Getting There</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>
                  <span className="font-semibold">By car or ride-hailing:</span> Search the venue name in your preferred map app and follow navigation.
                </li>
                <li>
                  <span className="font-semibold">From Kuala Lumpur city centre:</span> Plan for additional travel time during peak hours.
                </li>
                <li>
                  <span className="font-semibold">From the airport:</span> Use a taxi or e-hailing service, or arrange private transfer based on your itinerary.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-900">Parking and Drop-off</h3>
              <p className="mt-3 text-slate-700">
                Parking and drop-off areas are available at the hotel. Follow on-site signage and staff guidance upon arrival.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-900">Need help?</h3>
              <p className="mt-3 text-slate-700">
                For venue-related questions, please refer to the <Link className="font-semibold text-brand-700 hover:text-brand-600" href="/contact">Contact</Link> page.
              </p>
            </div>
          </div>
        </section>

        {/* Right: Map */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="px-4 pt-4 text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            Map
          </h2>
          <p className="px-4 pb-4 pt-3 text-slate-600">
            Use the interactive map below to explore the surrounding area and plan your route.
          </p>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Venue Map"
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
            />
          </div>

          <p className="mt-4 px-1 text-xs text-slate-500">
            Map is provided for convenience. Please verify your route and travel time using your preferred navigation app.
          </p>
        </section>
      </div>
    </main>
  );
}
