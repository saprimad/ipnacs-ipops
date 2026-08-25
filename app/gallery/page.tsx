"use client";

import { useEffect, useState } from "react";

const officialPhotoPost =
  "https://www.facebook.com/darilensakorporat/posts/pfbid02D4mE1bwjgekiJttc49KZPTf6KaRooMwZC94dfmX3zqqu5S4kpcqaBzxZjquzByMkl";
const officialVideo = "https://www.facebook.com/reel/1034445492521693/";
const conferenceHighlightVideo =
  "https://drive.google.com/file/d/12vyqL7CUBE-PIvx9Znbn2NliFyKy2QLO/view?usp=drivesdk";
const conferenceHighlightEmbed =
  "https://drive.google.com/file/d/12vyqL7CUBE-PIvx9Znbn2NliFyKy2QLO/preview";
const driveFolder =
  "https://drive.google.com/drive/folders/1ER4AIAfcjSqaNI7zPTFtGo7xURz9E4Jh";
const driveEmbed =
  "https://drive.google.com/embeddedfolderview?id=1ER4AIAfcjSqaNI7zPTFtGo7xURz9E4Jh#grid";
const showDriveLink = false;

export default function GalleryPage() {
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  const photoEmbed = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
    officialPhotoPost
  )}&show_text=true&width=500`;

  const videoEmbed = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    officialVideo
  )}&show_text=false&width=500`;

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
                Conference Photo Gallery
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
            Moments in focus.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Relive IPNaCS–IPoPS 2026 through selected official UiTM coverage and
            moments shared by our conference community.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#E5B82E]/45 bg-[#E5B82E]/10 px-5 py-2.5 text-sm font-semibold text-[#7A5B10] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B58A1F]/40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#B58A1F]" />
            </span>
            Shared conference gallery open
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

                <div className="bg-white p-2 sm:p-4">
                  <div className="relative mx-auto aspect-video w-full max-w-[500px] overflow-hidden bg-black">
                    <iframe
                      src={videoEmbed}
                      title="IPNaCS–IPoPS 2026 official UiTM conference highlight video"
                      width="500"
                      height="500"
                      className="absolute inset-0 h-[500px] w-full border-0"
                      scrolling="no"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="border-t border-slate-100 bg-white px-5 py-5 sm:px-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Bahagian Komunikasi Korporat, UiTM
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                    A short official recap capturing moments from IPNaCS–IPoPS 2026 at
                    Mercure Kuala Lumpur Glenmarie, Shah Alam.
                  </p>
                  <p className="mt-3 text-xs font-semibold text-[#8A6918]">
                    13–14 August 2026 · Shah Alam, Malaysia
                  </p>
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
                Conference Highlights
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F2A4D] sm:text-3xl">
                Relive IPNaCS–IPoPS 2026
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Watch memorable moments, speakers and highlights from the conference
                before exploring the shared photo collection below.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-[#0F2A4D]/10 bg-white shadow-[0_22px_55px_rgba(15,42,77,0.09)]">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B58A1F]">
                    Featured Video
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#0F2A4D] sm:text-base">
                    IPNaCS–IPoPS 2026 Conference Highlights
                  </p>
                </div>
                <span className="hidden rounded-full border border-[#E5B82E]/35 bg-[#E5B82E]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#7A5B10] sm:inline-flex">
                  Watch Highlights
                </span>
              </div>

              <div className="bg-[#07182d] p-2 sm:p-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                  <iframe
                    src={conferenceHighlightEmbed}
                    title="IPNaCS–IPoPS 2026 conference highlights video"
                    className="absolute inset-0 h-full w-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-slate-200 bg-[#FBFAF6] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div>
                  <p className="text-sm font-bold text-[#0F2A4D]">
                    Conference memories in motion
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    A featured video recap of IPNaCS–IPoPS 2026.
                  </p>
                </div>
                <a
                  href={conferenceHighlightVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0F2A4D] transition hover:text-[#B58A1F]"
                >
                  Open video in Google Drive
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#B58A1F]">
                Shared Conference Gallery
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F2A4D] sm:text-3xl">
                Relive &amp; Share the Moments
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Explore the IPNaCS–IPoPS 2026 photo collection — and if you
                captured a memorable moment, feel free to add it to the shared
                gallery.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,42,77,0.08)]">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B58A1F]">
                    Shared Conference Gallery
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#0F2A4D] sm:text-base">
                    IPNaCS–IPoPS 2026
                  </p>
                </div>
                <span className="rounded-full border border-[#E5B82E]/35 bg-[#E5B82E]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#7A5B10]">
                  Browse &amp; Contribute
                </span>
              </div>

              <iframe
                src={driveEmbed}
                title="IPNaCS–IPoPS 2026 shared Google Drive photo collection"
                className="h-[620px] w-full border-0 bg-white sm:h-[720px]"
                loading="lazy"
              />

              <div className="border-t border-slate-200 bg-[#FBFAF6] px-5 py-5 sm:px-6">
                <p className="text-sm font-bold text-[#0F2A4D]">
                  Captured a great moment?
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Use the + button in the gallery to add your photos and help us
                  complete the story of IPNaCS–IPoPS 2026.
                </p>
                {showDriveLink && (
                  <a
                    href={driveFolder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0F2A4D] transition hover:text-[#B58A1F]"
                  >
                    Open shared gallery in Google Drive
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </section>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-xl font-bold tracking-tight text-[#0F2A4D] sm:text-2xl">
              The story lives on.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
              Relive the people, conversations and moments that made IPNaCS–IPoPS
              2026 memorable.
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
        .gallery-intro { animation: introFade 1.4s ease forwards; }
        .aperture-ring { animation: aperturePulse .9s ease-out infinite; }
        .aperture-ring-delay { animation-delay: .22s; }
        @media (prefers-reduced-motion: reduce) {
          .gallery-intro, .aperture-ring {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
