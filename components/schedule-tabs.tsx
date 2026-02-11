"use client";

import { useState } from "react";
import type { ScheduleDay } from "@/lib/site";

export function ScheduleTabs({ days }: { days: ScheduleDay[] }) {
  const [active, setActive] = useState(0);
  const day = days[active];

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Conference schedule days">
        {days.map((item, index) => (
          <button
            key={item.label}
            role="tab"
            aria-selected={active === index}
            className={`rounded-lg border px-4 py-2 text-sm font-medium ${active === index ? "border-brand-700 bg-brand-700 text-white" : "border-slate-300 bg-white text-slate-700"}`}
            onClick={() => setActive(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="card overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">{day.date}</div>
        <ul>
          {day.items.map((item) => (
            <li key={`${day.label}-${item.time}-${item.title}`} className="grid gap-2 border-b border-slate-100 px-4 py-4 sm:grid-cols-[100px_1fr_auto] sm:items-center">
              <p className="text-sm font-semibold text-brand-700">{item.time}</p>
              <p className="text-sm text-slate-800">{item.title}</p>
              <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{item.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
