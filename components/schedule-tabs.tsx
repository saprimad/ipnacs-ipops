"use client";

import { useMemo, useState } from "react";

type ScheduleItem = {
  time: string;
  title: string;
  description?: string;
  location?: string;
};

type ScheduleDay = {
  key: string;
  label: string;
  date?: string;
  items: ScheduleItem[];
};

export function ScheduleTabs({ days }: { days: readonly ScheduleDay[] }) {
  const firstKey = useMemo(() => days?.[0]?.key ?? "day-1", [days]);
  const [activeKey, setActiveKey] = useState<string>(firstKey);

  const activeDay = useMemo(
    () => days.find((d) => d.key === activeKey) ?? days[0],
    [days, activeKey]
  );

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 p-4">
        {days.map((day) => {
          const isActive = day.key === activeKey;
          return (
            <button
              key={day.key}
              type="button"
              onClick={() => setActiveKey(day.key)}
              className={[
                "rounded-lg px-4 py-2 text-sm font-semibold transition",
                isActive
                  ? "bg-[#0F2A4D] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200",
              ].join(" ")}
            >
              {day.label}
              {day.date ? (
                <span className={["ml-2 text-xs", isActive ? "text-white/90" : "text-slate-500"].join(" ")}>
                  {day.date}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-[#0F2A4D]">
          {activeDay?.label}
          {activeDay?.date ? <span className="ml-2 text-base font-medium text-slate-500">({activeDay.date})</span> : null}
        </h2>

        <div className="mt-6 space-y-4">
          {activeDay?.items?.map((item, idx) => (
            <div
              key={`${activeDay.key}-${idx}`}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="text-sm font-semibold text-slate-900">
                  {item.title}
                  {item.location ? (
                    <span className="ml-2 font-medium text-slate-500">
                      {item.location}
                    </span>
                  ) : null}
                </div>
                <div className="text-sm font-semibold text-[#0F2A4D]">
                  {item.time}
                </div>
              </div>

              {item.description ? (
                <p className="mt-2 text-sm text-slate-700">
                  {item.description}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-500">
          Note: The schedule is subject to refinement as the final scientific programme is confirmed.
        </p>
      </div>
    </div>
  );
}
