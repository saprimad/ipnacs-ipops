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
  if (diff <= 0) {
    return (
      <div className="mt-10 text-center">
        <a
          href="https://drive.google.com/drive/u/0/mobile/folders/1iwuuwWAvRZLeK3Z6X3SEpytaDu7rayf6?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-[240px] items-center justify-center gap-3 rounded-lg bg-[#0F2A4D] px-8 py-3 font-semibold text-white shadow-md transition hover:bg-[#0c2240]"
          aria-label="Open Conference Materials"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          Conference Materials
        </a>
        <p className="mt-2 text-sm text-white/75">
          Presentation slides and post-conference resources
        </p>
      </div>
    );
  }

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
