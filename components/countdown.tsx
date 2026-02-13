"use client";

import { useEffect, useState } from "react";

export function Countdown({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const format = (num: number, pad: number) =>
    num.toString().padStart(pad, "0");

  return (
    <div className="mt-10 text-center">
      <div className="flex justify-center items-center gap-10 text-[#0F2A4D]">

        {[
          { value: format(timeLeft.days, 3), label: "Days" },
          { value: format(timeLeft.hours, 2), label: "Hours" },
          { value: format(timeLeft.minutes, 2), label: "Minutes" },
          { value: format(timeLeft.seconds, 2), label: "Seconds" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
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
