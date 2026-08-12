import type { Metadata } from "next";
import { PresentationSearch } from "@/components/presentation-search";
import { ScheduleTabs } from "@/components/schedule-tabs";
import { buildMetadata } from "@/lib/metadata";
import { schedule } from "@/lib/programme";
import { posterTracks } from "@/lib/site";

export const metadata: Metadata = buildMetadata(
  "Scientific Programme",
  "Explore the scientific programme and poster presentations by day and scientific track."
);

export default function SchedulePage() {
  return (
    <main className="section">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-[#0F2A4D] sm:text-4xl">
            Scientific Programme and Conference Timetable
          </h1>

          <p className="max-w-3xl text-slate-700">
            Browse the detailed programme by day, venue and scientific track,
            including moderators, session chairs, presenters and presentation
            time slots.
          </p>
        </header>

        <div className="mt-8">
          <PresentationSearch
            days={schedule}
            posterTracks={posterTracks}
          />

          <ScheduleTabs
            days={schedule}
            posterTracks={posterTracks}
          />
        </div>
      </div>
    </main>
  );
}
