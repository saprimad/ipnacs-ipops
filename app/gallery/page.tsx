export default function GalleryPage() {
  const placeholders = [
    "sm:col-span-2 sm:row-span-2",
    "",
    "",
    "",
    "sm:col-span-2",
    "",
  ];

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0F2A4D]">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B58A1F] sm:text-sm">
            IPNaCS–IPoPS 2026
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Photo Gallery
          </h1>

          <p className="mt-5 text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
            Moments worth remembering.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            The official IPNaCS–IPoPS 2026 photo gallery is being prepared and
            will be available here soon.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#E5B82E]/40 bg-[#E5B82E]/10 px-5 py-2.5 text-sm font-semibold text-[#7A5B10]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            Official photos coming soon
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 sm:gap-4">
            {placeholders.map((className, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-slate-200 shadow-sm ${className}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,184,46,0.14),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(15,42,77,0.10),transparent_45%)]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/70 text-slate-400 shadow-sm backdrop-blur">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
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

                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              13–14 August 2026 · Mercure Kuala Lumpur Glenmarie, Shah Alam
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
