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

const nearbyHotels = [
  {
    name: "FOX Hotel Glenmarie",
    benefits: "Near Glenmarie industrial area",
    price: "From approximately RM368",
    distance: "1-2 km",
    time: "Approximately 4 minutes",
    url: "https://www.discoverasr.com/en/fox-hotels/malaysia/fox-hotel-glenmarie-shah-alam",
    tag: "Closest",
  },
  {
    name: "New Wave Hotel",
    benefits: "Budget-friendly stay near eateries and convenience stores",
    price: "From approximately RM75",
    distance: "3-4 km",
    time: "Approximately 9 minutes",
    url: "https://new-wave-4.selangorhotels.com/en/",
    tag: "Budget",
  },
  {
    name: "Acappella Suite Hotel",
    benefits: "Spacious suite accommodation with pool and gym facilities",
    price: "From approximately RM210",
    distance: "3-4 km",
    time: "Approximately 10 minutes",
    url: "https://acappellasuitehotel.com/",
    tag: "Suite",
  },
  {
    name: "GoodHope Hotel",
    benefits: "Affordable business hotel with spacious rooms",
    price: "From approximately RM108",
    distance: "3-4 km",
    time: "Approximately 12 minutes",
    url: "https://shah-alam.goodhopegroup.com.my/rooms.html",
    tag: "Affordable",
  },
  {
    name: "Hilton Shah Alam Glenmarie",
    benefits: "Hotel option near Glenmarie and Shah Alam area",
    price: "From approximately RM295",
    distance: "5 km",
    time: "Approximately 12 minutes",
    url: "https://www.hilton.com/en/hotels/kulsahi-hilton-shah-alam-glenmarie/",
    tag: "Premium",
  },
  {
    name: "Laman Green The Boutique Hotel",
    benefits: "Budget-friendly accommodation near highway access",
    price: "From approximately RM103",
    distance: "4-5 km",
    time: "Approximately 14 minutes",
    url: "https://www.lamangreen.com.my/index.php/hotel",
    tag: "Boutique",
  },
  {
    name: "Sunday Hotel Subang",
    benefits: "Near Subang area, restaurants and local amenities",
    price: "From approximately RM190",
    distance: "6-7 km",
    time: "Approximately 14 minutes",
    url: "https://www.oyorooms.com/my/330650/",
    tag: "Subang",
  },
  {
    name: "Subang Valley Hotel",
    benefits: "Budget option near LRT access and food areas",
    price: "From approximately RM76",
    distance: "7-8 km",
    time: "Approximately 14 minutes",
    url: "https://www.hotels.com/ho530020/subang-valley-hotel-subang-jaya-malaysia/",
    tag: "LRT nearby",
  },
  {
    name: "Concorde Hotel Shah Alam",
    benefits: "Located near NKVE, Federal Highway and major routes",
    price: "From approximately RM198",
    distance: "6-7 km",
    time: "Approximately 16 minutes",
    url: "https://kualalumpur.concordehotelsresorts.com/",
    tag: "Highway access",
  },
];

export default function VenuePage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venue.mapsQuery
  )}`;

  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    venue.mapsQuery
  )}&output=embed`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
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

      {/* MAIN VENUE CONTENT */}
      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {/* LEFT: VENUE INFO */}
        <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            {venue.name}
          </h2>

          <p className="mt-3 text-slate-600">{venue.cityLine}</p>

          {/* ADDRESS */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-brand-900">Address</h3>

            <p className="mt-2 leading-relaxed text-slate-700">
              {venue.addressLine}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
              >
                Open in Google Maps
              </a>

              <a
                href={venue.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
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
                Approximately 25-35 minutes depending on traffic.
              </li>

              <li>
                <span className="font-semibold">From KLIA:</span> Around 40-50
                minutes via taxi or e-hailing services.
              </li>
            </ul>
          </div>

          {/* PARKING */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-brand-900">
              Parking &amp; Drop-off
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
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="px-4 pt-4 text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            Map Location
          </h2>

          <p className="px-4 pb-4 pt-3 text-slate-600">
            Explore the venue location and surrounding area using the
            interactive map below.
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
            Map is provided for reference. Please confirm your travel route
            using your preferred navigation app.
          </p>
        </section>
      </div>

      {/* NEARBY HOTELS */}
      <section className="mt-16 overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-slate-50 p-6 shadow-sm sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            Accommodation
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Nearby Hotels
          </h2>

          <p className="mt-4 text-slate-600">
            Participants may consider the following nearby accommodation options
            around Mercure Kuala Lumpur Glenmarie. Estimated rates, distances
            and travel times are provided for general reference only.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyHotels.map((hotel) => (
            <a
              key={hotel.name}
              href={hotel.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open website for ${hotel.name}`}
              className="group block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
            >
              <article className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition group-hover:-translate-y-1 group-hover:border-brand-300 group-hover:shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold leading-snug text-brand-900">
                    {hotel.name}
                  </h3>

                  <span className="shrink-0 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">
                    {hotel.tag}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {hotel.benefits}
                </p>

                <div className="mt-5 grid gap-3 text-sm">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                      Estimated Rate
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {hotel.price}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                        Distance
                      </p>
                      <p className="mt-1 font-semibold text-slate-900">
                        {hotel.distance}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                        Travel Time
                      </p>
                      <p className="mt-1 font-semibold text-slate-900">
                        {hotel.time}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-5">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition group-hover:text-brand-900">
                    View hotel site
                    <span aria-hidden="true" className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-brand-100 bg-white/80 p-4">
          <p className="text-xs leading-relaxed text-slate-500">
            Note: The information above is provided as a general guide for
            participants. Please confirm the latest room rates, availability and
            travel arrangements directly with the hotel or your preferred booking
            platform before making a reservation.
          </p>
        </div>
      </section>
    </main>
  );
}