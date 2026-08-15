"use client";

import { useEffect, useState } from "react";

const officialPhotoPost =
  "https://www.facebook.com/darilensakorporat/posts/pfbid02D4mE1bwjgekiJttc49KZPTf6KaRooMwZC94dfmX3zqqu5S4kpcqaBzxZjquzByMkl";
const officialVideo = "https://www.facebook.com/reel/1034445492521693/";

export default function GalleryPage() {
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 1400);
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

  const photoEmbed = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
    officialPhotoPost
  )}&show_text=true&width=500`;

  const videoEmbed = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    officialVideo
  )}&show_text=true&width=500`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0F2A4D]">
      {introVisible && (
        <div className="gallery-intro fixed inset-0 z-[100] flex items-center justify-center bg-[#07182d] text-white">
          <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
            <div className="aperture-ring absolute inset-0 rounded-full border border-[#E5B82E]/50" />
            <div className="aperture-ring aperture-ring-delay absolute inset-5 rounded-full border border-white/20" />

            <div className="relative z-10 text-center">
              <img
                src="/logo.png"
                alt="IPNaCS–IPoPS 2026 logo"
                className="mx-auto h-14 w-14 object-contain drop-shadow-lg sm:h-16 sm:w-16"
              />

              <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#E5B82E] sm:text-xs">
                IPNaCS–IPoPS 2026
              </p>

              <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.2em] text-white sm:text-base">
                Moments in Focus
              </p>

              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
                Official Photo Gallery
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
            collection. In the meantime, explore selected official UiTM coverage
            from the conference below.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#E5B82E]/45 bg-[#E5B82E]/10 px-5 py-2.5 text-sm font-semibold text-[#7A5B10] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B58A1F]/40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#B58A1F]" />
            </span>
            Full gallery developing · Coming soon
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <section className="rounded-3xl border border-[#0F2A4D]/10 bg-white p-5 shadow-[0_22px_55px_rgba(15,42,77,0.08)] sm:p-8 lg:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#B58A1F]">
                Official UiTM Coverage
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F2A4D] sm:text-3xl">
                Moments from the Conference
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Photo and video highlights shared by Bahagian Komunikasi Korporat,
                UiTM.
              </p>
            </div>

            <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F7F8FA] shadow-sm">
                <div className="border-b border-slate-200 bg-white px-5 py-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B58A1F]">
                    Official Photo Post
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-[#0F2A4D]">
                    Photo Highlights
                  </h3>
                </div>

                <div className="flex min-h-[620px] items-start justify-center overflow-hidden bg-white p-2 sm:p-4">
                  <iframe
                    src={photoEmbed}
                    title="IPNaCS–IPoPS 2026 official UiTM photo highlights"
                    width="500"
                    height="620"
                    className="w-full max-w-[500px] border-0"
                    scrolling="no"
                    allow="encrypted-media"
                    loading="lazy"
                  />
                </div>

                <div className="border-t border-slate-200 bg-white px-5 py-4">
                  <a
                    href={officialPhotoPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2A4D] transition hover:text-[#B58A1F]"
                  >
                    View original post on Facebook
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F7F8FA] shadow-sm">
                <div className="border-b border-slate-200 bg-white px-5 py-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B58A1F]">
                    Official Video
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-[#0F2A4D]">
                    Conference Highlight Reel
                  </h3>
                </div>

                <div className="flex min-h-[620px] items-start justify-center overflow-hidden bg-white p-2 sm:p-4">
                  <iframe
                    src={videoEmbed}
                    title="IPNaCS–IPoPS 2026 official UiTM conference highlight video"
                    width="500"
                    height="620"
                    className="w-full max-w-[500px] border-0"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="border-t border-slate-200 bg-white px-5 py-4">
                  <a
                    href={officialVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2A4D] transition hover:text-[#B58A1F]"
                  >
                    View original video on Facebook
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section className="mt-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#B58A1F]">
                Full Conference Collection
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F2A4D] sm:text-3xl">
                Official Photo Gallery Coming Soon
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                The complete photographer collection will appear here once the
                official images are ready.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
              <span className="h-px w-12 bg-slate-200" />
              Photo Lab
              <span className="h-px w-12 bg-slate-200" />
            </div>

            <div className="mt-6 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 sm:gap-5">
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
          </section>

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
          0%, 72% { opacity: 1; }
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
        .gallery-intro { animation: introFade 1.4s ease forwards; }
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
