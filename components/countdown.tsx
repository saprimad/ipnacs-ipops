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
      <div className="mt-10 flex justify-center px-2">
        <a
          href="https://drive.google.com/drive/u/0/mobile/folders/1iwuuwWAvRZLeK3Z6X3SEpytaDu7rayf6?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Conference Materials"
          className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#F3D36A]/70 bg-gradient-to-br from-[#F6D365] via-[#E5B82E] to-[#C99518] px-6 py-5 text-left text-[#0F2A4D] shadow-[0_12px_36px_rgba(229,184,46,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(229,184,46,0.5)] sm:px-8 sm:py-6"
        >
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
          </div>

          <div className="relative flex items-center justify-between gap-5">
            <div>
              <span className="inline-flex rounded-full border border-[#0F2A4D]/15 bg-white/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] sm:text-xs">
                Post-Conference Resources
              </span>

              <div className="mt-3 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>

                <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
                  Conference Materials
                </span>
              </div>

              <p className="mt-2 text-sm font-medium text-[#0F2A4D]/75 sm:text-base">
                Speaker slides • Presentation materials • Resources
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0F2A4D] text-white shadow-lg transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </div>
        </a>
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
