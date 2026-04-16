// app/venue/page.tsx

import Link from "next/link";

const venue = {
  name: "Mercure Kuala Lumpur Glenmarie",
  cityLine: "Shah Alam, Selangor, Malaysia",
  addressLine:
    "Jalan Usahawan U1/8, Seksyen U1, 40150 Shah Alam, Selangor, Malaysia",
  mapsQuery: "Mercure Kuala Lumpur Glenmarie",
  website: "https://all.accor.com/hotel/A7M8/index.en.shtml",
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
      {/* HEADER */}
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          Venue
        </h1>

        <p className="mx-auto max-w-2xl text-base text-slate-600">
          IPNaCS &amp; IPoPS 2026 will be held at{" "}
          <span className="font-semibold text-brand-900">{venue.name}</span>,
          located in Shah Alam, Selangor, Malaysia.
        </p>
      </header>

      {/* CONTENT */}
      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        
        {/* LEFT: INFO */}
        <section className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            {venue.name}
          </h2>

          <p className="mt-3 text-slate-600">{venue.cityLine}</p>

          {/* ADDRESS */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-brand-900">Address</h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {venue.addressLine}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 transition"
              >
                Open in Google Maps
              </a>

              <a
                href={venue.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition"
              >
                Visit Hotel Website
              </a>
            </div>
          </div>

          {/* GETTING THERE */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-brand-900">
              Getting There
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <span className="font-semibold">By car or ride-hailing:</span>{" "}
                Easily accessible via major highways. Search the venue name in
                your preferred navigation app.
              </li>

              <li>
                <span className="font-semibold">
                  From Kuala Lumpur city centre:
                </span>{" "}
                Approximately 25–35 minutes depending on traffic.
              </li>

              <li>
                <span className="font-semibold">From KLIA:</span>{" "}
                Around 40–50 minutes via taxi or e-hailing services.
              </li>
            </ul>
          </div>

          {/* PARKING */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-brand-900">
              Parking & Drop-off
            </h3>

            <p className="mt-3 text-slate-700">
              On-site parking and drop-off areas are available at the hotel.
              Please follow signage and staff guidance upon arrival.
            </p>
          </div>

          {/* HELP */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-brand-900">
              Need assistance?
            </h3>

            <p className="mt-3 text-slate-700">
              For venue-related enquiries, please visit our{" "}
              <Link
                className="font-semibold text-brand-700 hover:text-brand-600"
                href="/contact"
              >
                Contact
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* RIGHT: MAP */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
          <h2 className="px-4 pt-4 text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            Map Location
          </h2>

          <p className="px-4 pb-4 pt-3 text-slate-600">
            Explore the venue location and surrounding area using the interactive map below.
          </p>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Mercure Kuala Lumpur Glenmarie Map"
              src={embedSrc}
              loading="lazy"
              className="h-[420px] w-full"
            />
          </div>

          <p className="mt-4 px-1 text-xs text-slate-500">
            Map is provided for reference. Please confirm your travel route using
            your preferred navigation app.
          </p>
        </section>
      </div>
    </main>
  );
}