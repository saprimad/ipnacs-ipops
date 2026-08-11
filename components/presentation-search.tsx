"use client";

import { useMemo, useState } from "react";

type OralPresentation = {
  id: string;
  title: string;
  track?: string;
};

type OralTrack = {
  key: string;
  label: string;
  name: string;
  location?: string;
  presentations: readonly OralPresentation[];
};

type ScheduleItem = {
  time: string;
  title: string;
  oralTracks?: readonly OralTrack[];
};

type ScheduleDay = {
  key: string;
  label: string;
  date?: string;
  items: readonly ScheduleItem[];
};

type PosterPresentation = {
  id: string;
  title: string;
};

type PosterTrack = {
  key: string;
  name: string;
  posters: readonly PosterPresentation[];
};

type SearchResult = {
  id: string;
  title: string;
  track: string;
  type: "Oral Presentation" | "Poster Presentation";
  day?: string;
  date?: string;
  time?: string;
};

export function PresentationSearch({
  days,
  posterTracks,
}: {
  days: readonly ScheduleDay[];
  posterTracks: readonly PosterTrack[];
}) {
  const [query, setQuery] = useState("");

  const presentations = useMemo<SearchResult[]>(() => {
    const oralResults = days.flatMap((day) =>
      day.items.flatMap((item) =>
        (item.oralTracks ?? []).flatMap((oralTrack) =>
          oralTrack.presentations.map((presentation) => ({
            id: presentation.id,
            title: presentation.title,
            track: presentation.track ?? oralTrack.name,
            type: "Oral Presentation" as const,
            day: day.label,
            date: day.date,
            time: item.time,
          }))
        )
      )
    );

    const posterResults = posterTracks.flatMap((posterTrack) =>
      posterTrack.posters.map((poster) => ({
        id: poster.id,
        title: poster.title,
        track: posterTrack.name,
        type: "Poster Presentation" as const,
      }))
    );

    return [...oralResults, ...posterResults];
  }, [days, posterTracks]);

  const filteredResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return presentations.filter((presentation) =>
      [
        presentation.id,
        presentation.title,
        presentation.track,
        presentation.type,
        presentation.day ?? "",
        presentation.date ?? "",
        presentation.time ?? "",
      ].some((value) => value.toLowerCase().includes(normalizedQuery))
    );
  }, [presentations, query]);

  const oralCount = useMemo(
    () =>
      presentations.filter(
        (presentation) => presentation.type === "Oral Presentation"
      ).length,
    [presentations]
  );

  const posterCount = presentations.length - oralCount;
  const hasQuery = query.trim().length > 0;

  return (
    <section className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0F2A4D] sm:text-xl">
            Search Presentations
          </h2>

          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            Search all oral and poster presentations by ID, title or scientific
            track.
          </p>
        </div>

        <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {oralCount} oral · {posterCount} poster
        </span>
      </div>

      <div className="mt-4">
        <label htmlFor="presentation-search" className="sr-only">
          Search oral and poster presentations
        </label>

        <input
          id="presentation-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try OP014, PP128, Nrf2, telepharmacy..."
          autoComplete="off"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F2A4D] focus:ring-2 focus:ring-[#0F2A4D]/20"
        />
      </div>

      {hasQuery ? (
        <div className="mt-4" aria-live="polite">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-slate-700">
              {filteredResults.length}{" "}
              {filteredResults.length === 1 ? "result" : "results"}
            </p>

            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-xs font-semibold text-[#0F2A4D] underline-offset-4 hover:underline"
            >
              Clear search
            </button>
          </div>

          {filteredResults.length ? (
            <div className="mt-3 max-h-[32rem] space-y-3 overflow-y-auto pr-1">
              {filteredResults.map((result) => (
                <article
                  key={`${result.type}-${result.id}`}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#0F2A4D] px-2.5 py-1 text-xs font-bold text-white">
                        {result.id}
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {result.type}
                      </span>
                    </div>

                    {result.day ? (
                      <span className="text-xs font-medium text-slate-500">
                        {result.day}
                        {result.time ? ` · ${result.time}` : ""}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-3 text-sm font-semibold leading-relaxed text-slate-900">
                    {result.title}
                  </h3>

                  <p className="mt-2 text-xs font-medium text-slate-500">
                    {result.track}
                  </p>

                  {result.date ? (
                    <p className="mt-1 text-xs text-slate-500">
                      {result.date}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="text-sm font-semibold text-slate-700">
                No presentation found.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Try another presentation ID, title or track.
              </p>
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
}