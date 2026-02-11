import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata("Venue", "Venue details, travel information, and accommodation options.");

export default function VenuePage() {
  return (
    <main className="section space-y-6">
      <h1 className="text-3xl font-bold">Venue</h1>
      <div className="card p-6">
        <h2 className="text-xl font-semibold">{site.venue}</h2>
        <p className="mt-2 text-slate-700">The conference venue is located in {site.location} and provides full conference facilities for plenary sessions, thematic tracks, and networking activities.</p>
      </div>
      <div className="card overflow-hidden">
        <iframe
          title="Venue location map"
          src="https://www.google.com/maps?q=DoubleTree+by+Hilton+Shah+Alam&output=embed"
          className="h-80 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <section className="card p-6">
          <h2 className="text-xl font-semibold">Travel and Accommodation Tips</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Arrange airport transfers early during conference week.</li>
            <li>Book nearby hotels in advance for convenient commuting.</li>
            <li>Use local e-hailing and public transit services for city travel.</li>
          </ul>
        </section>
        <section className="card p-6">
          <h2 className="text-xl font-semibold">Nearby Hotels</h2>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>DoubleTree by Hilton Shah Alam i-City</li>
            <li>Mardhiyyah Hotel and Suites</li>
            <li>Concorde Hotel Shah Alam</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
