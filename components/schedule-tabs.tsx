"use client";

import { useMemo, useState } from "react";

type TrackItem = {
  label: string; // e.g., "Track 1"
  name: string; // speaker name or TBC
  role?: string; // designation / institution line
  title?: string; // talk title or TBC
};

type ScheduleItem = {
  time: string;
  title: string;
  description?: string; // fallback (legacy)
  descriptionLines?: readonly string[]; // NEW: multiline description
  location?: string;
  tracks?: readonly TrackItem[]; // for grid layout
};

type ScheduleDay = {
  key: string;
  label: string;
  date?: string;
  items: readonly ScheduleItem[];
};

function DescriptionBlock({
  lines,
  fallback,
}: {
  lines?: readonly string[];
  fallback?: string;
}) {
  if (lines?.length) {
    const [first, ...rest] = lines;
    return (
      <div className="mt-2 space-y-1 text-sm">
        <p className="font-semibold text-slate-900">{first}</p>
        {rest.map((line, i) => (
          <p key={i} className="text-slate-700">
            {line}
          </p>
        ))}
      </div>
    );
  }

  if (fallback) {
    return <p className="mt-2 text-sm text-slate-700">{fallback}</p>;
  }

  return null;
}

export function ScheduleTabs({ days }: { days: readonly ScheduleDay[] }) {
  const firstKey = useMemo(() => days?.[0]?.key ?? "day-1", [days]);
  const [activeKey, setActiveKey] = useState<string>(firstKey);

  const activeDay = useMemo(
    () => days.find((d) => d.key === activeKey) ?? days[0],
    [days, activeKey]
  );

  if (!activeDay) return null;

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
                <span
                  className={[
                    "ml-2 text-xs",
                    isActive ? "text-white/90" : "text-slate-500",
                  ].join(" ")}
                >
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
          {activeDay.label}
          {activeDay.date ? (
            <span className="ml-2 text-base font-medium text-slate-500">
              ({activeDay.date})
            </span>
          ) : null}
        </h2>

        <div className="mt-6 space-y-4">
          {activeDay.items.map((item, idx) => (
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

              {/* Tracks grid */}
              {item.tracks?.length ? (
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  {item.tracks.map((t) => (
                    <div
                      key={t.label}
                      className="rounded-lg border border-slate-200 bg-white p-4"
                    >
                      <p className="text-sm font-bold text-[#0F2A4D]">
                        {t.label}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {t.name}
                      </p>

                      {t.role ? (
                        <p className="mt-1 text-sm text-slate-700">{t.role}</p>
                      ) : null}

                      <p className="mt-2 text-sm text-slate-700">
                        <span className="font-semibold">Title:</span>{" "}
                        {t.title ?? "TBC"}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <DescriptionBlock
                  lines={item.descriptionLines}
                  fallback={item.description}
                />
              )}
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