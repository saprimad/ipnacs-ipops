"use client";

import { useEffect, useMemo, useState } from "react";

export function Countdown({ targetDate }: { targetDate: string }) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);

  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());

    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Prevent SSR/CSR mismatch: render nothing until mounted on client
  if (!mounted) return null;

  const diff = target - now;
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const format = (num: number, pad: number) => num.toString().padStart(pad, "0");

  const items = [
    { value: format(days, 3), label: "Days" },
    { value: format(hours, 2), label: "Hours" },
    { value: format(minutes, 2), label: "Minutes" },
    { value: format(seconds, 2), label: "Seconds" },
  ];

  return (
    <div className="mt-10 text-center">
      <div className="flex justify-center items-center gap-10 text-[#0F2A4D]">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-bold tracking-wide">
              {item.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-gray-500">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
