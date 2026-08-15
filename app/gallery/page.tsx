"use client";

import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const placeholders = [
    { span: "sm:col-span-2 sm:row-span-2", tilt: "-rotate-[0.6deg]", delay: "0s" },
    { span: "", tilt: "rotate-[0.8deg]", delay: "0.6s" },
    { span: "", tilt: "-rotate-[0.4deg]", delay: "1.1s" },
    { span: "", tilt: "rotate-[0.5deg]", delay: "1.5s" },
    { span: "sm:col-span-2", tilt: "-rotate-[0.7deg]", delay: "0.3s" },
    { span: "", tilt: "rotate-[0.6deg]", delay: "1.8s" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0F2A4D]">
      {introVisible && (
        <div className="gallery-intro fixed inset-0 z-[100] flex items-center justify-center bg-[#07182d] text-white">
          <div className="relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
            <div className="aperture-ring absolute inset-0 rounded-full border border-[#E5B82E]/50" />
            <div className="aperture-ring aperture-ring-delay absolute inset-5 rounded-full border border-white/25" />
            <div className="relative z-10 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="mx-auto text-[#E5B82E]"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                Developing Memories
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E5B82E]/10 blur-3xl sm:h-96 sm:w-96" />

      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B58A1F] sm:text-sm">
            IPNaCS–IPoPS 2026
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Photo Gallery
          </h1>

          <p className="mt-5 text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
            Moments are developing.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Our photographers are preparing the official IPNaCS–IPoPS 2026
            collection. The moments, highlights and memories will be available
            here soon.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#E5B82E]/45 bg-[#E5B82E]/10 px-5 py-2.5 text-sm font-semibold text-[#7A5B10] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B58A1F]/40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#B58A1F]" />
            </span>
            Gallery developing · Coming soon
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
            <span className="h-px w-12 bg-slate-200" />
            Photo Lab
            <span className="h-px w-12 bg-slate-200" />
          </div>

          <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 sm:gap-5">
            {placeholders.map((item, index) => (
              <div
                key={index}
                style={{ animationDelay: item.delay }}
                className={`photo-frame group relative overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-slate-100 via-white to-slate-200 shadow-[0_16px_35px_rgba(15,42,77,0.10)] ${item.span} ${item.tilt}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,184,46,0.19),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(15,42,77,0.11),transparent_48%)]" />
                <div className="photo-shimmer absolute inset-0" />
                {index === 1 && <div className="photo-flash absolute inset-0 bg-white" />}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="camera-breathe flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/75 text-slate-400 shadow-lg backdrop-blur sm:h-16 sm:w-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent" />
                <div className="absolute bottom-3 left-4 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400/80">
                  Frame {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-xl font-bold tracking-tight text-[#0F2A4D] sm:text-2xl">
              The story isn&apos;t over yet.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
              Come back soon to relive the people, conversations and moments that
              made IPNaCS–IPoPS 2026 memorable.
            </p>

            <div className="mx-auto mt-8 flex max-w-md items-center gap-3 text-[10px] font-bold uppercase tracking-[0.23em] text-[#8A6918] sm:text-xs">
              <span>13 Aug</span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#E5B82E]/30 via-[#B58A1F] to-[#E5B82E]/30" />
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E5B82E]/50 bg-[#E5B82E]/10">●</span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#E5B82E]/30 via-[#B58A1F] to-[#E5B82E]/30" />
              <span>14 Aug</span>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              2026 · Mercure Kuala Lumpur Glenmarie, Shah Alam
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes introFade {
          0%, 68% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
        @keyframes aperturePulse {
          0% { transform: scale(.72); opacity: .15; }
          48% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.28); opacity: 0; }
        }
        @keyframes frameFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shimmerMove {
          0% { transform: translateX(-160%) skewX(-18deg); }
          70%, 100% { transform: translateX(220%) skewX(-18deg); }
        }
        @keyframes cameraBreathe {
          0%, 100% { transform: scale(1); opacity: .78; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @keyframes subtleFlash {
          0%, 84%, 100% { opacity: 0; }
          86% { opacity: .5; }
          88% { opacity: 0; }
        }
        .gallery-intro { animation: introFade 1.2s ease forwards; }
        .aperture-ring { animation: aperturePulse .9s ease-out infinite; }
        .aperture-ring-delay { animation-delay: .22s; }
        .photo-frame { animation: frameFloat 6s ease-in-out infinite; }
        .photo-shimmer::after {
          content: "";
          position: absolute;
          top: -20%;
          bottom: -20%;
          left: 0;
          width: 28%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.78), transparent);
          animation: shimmerMove 7s ease-in-out infinite;
        }
        .camera-breathe { animation: cameraBreathe 3.4s ease-in-out infinite; }
        .photo-flash { pointer-events: none; opacity: 0; animation: subtleFlash 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .gallery-intro, .aperture-ring, .photo-frame, .photo-shimmer::after, .camera-breathe, .photo-flash {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
