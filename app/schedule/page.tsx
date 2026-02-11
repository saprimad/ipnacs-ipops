import type { Metadata } from "next";
import { ScheduleTabs } from "@/components/schedule-tabs";
import { buildMetadata } from "@/lib/metadata";
import { schedule } from "@/lib/site";

export const metadata: Metadata = buildMetadata("Schedule", "Explore the full conference timetable by day.");

export default function SchedulePage() {
  return (
    <main className="section">
      <h1 className="text-3xl font-bold">Conference Schedule</h1>
      <p className="mt-2 text-slate-700">Browse sessions by day. Timing and session details may be updated closer to the event.</p>
      <div className="mt-6">
        <ScheduleTabs days={schedule} />
      </div>
    </main>
  );
}
