"use client";

import { useEffect, useMemo, useState } from "react";

type Remaining = { days: number; hours: number; minutes: number; seconds: number; ended: boolean };

function getRemaining(targetIso: string): Remaining {
  const target = new Date(targetIso).getTime();
  const diff = target - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    ended: false
  };
}

export function Countdown({ targetIso }: { targetIso: string }) {
  const [remaining, setRemaining] = useState<Remaining>(() => getRemaining(targetIso));

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining(targetIso)), 1000);
    return () => clearInterval(timer);
  }, [targetIso]);

  const display = useMemo(
    () => [
      ["Days", remaining.days.toString()],
      ["Hours", remaining.hours.toString().padStart(2, "0")],
      ["Minutes", remaining.minutes.toString().padStart(2, "0")],
      ["Seconds", remaining.seconds.toString().padStart(2, "0")]
    ],
    [remaining]
  );

  return (
    <div className="mt-8" aria-live="polite">
      <p className="mb-3 text-sm font-semibold text-indigo-100">Countdown to the Opening Session</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {display.map(([label, value]) => (
          <div key={label} className="rounded-xl border border-indigo-300/30 bg-white/10 p-3">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs text-indigo-100">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-indigo-100">
        {remaining.ended ? "The conference is now in progress." : "The timer updates in real time."}
      </p>
    </div>
  );
}
