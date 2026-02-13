import type { Metadata } from "next";
import { ScheduleTabs } from "@/components/schedule-tabs";
import { buildMetadata } from "@/lib/metadata";
import { schedule } from "@/lib/site";

export const metadata: Metadata = buildMetadata(
  "Scientific Programme",
  "Explore the scientific programme by day. Timing and session details may be updated closer to the event."
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
            Browse sessions by day. Timing and session details may be updated closer to the event to reflect the final scientific programme.
          </p>
        </header>

        <div className="mt-8">
          <ScheduleTabs days={schedule} />
        </div>
      </div>
    </main>
  );
}
