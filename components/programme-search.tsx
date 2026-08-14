"use client";

import { useMemo, useState } from "react";
import type { ProgrammeDay } from "@/lib/programme-view";
import { posterAuthors, posterTitleOverrides } from "@/lib/poster-authors";
import { PresentationAwardBadge } from "@/components/presentation-award-badge";

type PosterPresentation = { id: string; title: string };
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
  presenter?: string;
  day?: string;
  date?: string;
  time?: string;
  venue?: string;
};

export function ProgrammeSearch({
  days,
  posterTracks,
}: {
  days: readonly ProgrammeDay[];
  posterTracks: readonly PosterTrack[];
}) {
  const [query, setQuery] = useState("");

  const presentations = useMemo<SearchResult[]>(() => {
    const oral = days.flatMap((day) =>
      day.items.flatMap((item) =>
        (item.oralTracks ?? []).flatMap((oralTrack) =>
          oralTrack.presentations.map((presentation) => ({
            id: presentation.id,
            title: presentation.title,
            track: presentation.track ?? oralTrack.name,
            presenter: presentation.presenter,
            type: "Oral Presentation" as const,
            day: day.label,
            date: day.date,
            time: presentation.time ?? item.time,
            venue: oralTrack.location,
          }))
        )
      )
    );

    const posters = posterTracks.flatMap((posterTrack) =>
      posterTrack.posters.map((poster) => ({
        id: poster.id,
        title: posterTitleOverrides[poster.id] ?? poster.title,
        track: posterTrack.name,
        presenter: posterAuthors[poster.id],
        type: "Poster Presentation" as const,
      }))
    );

    return [...oral, ...posters];
  }, [days, posterTracks]);

  const normalized = query.trim().toLowerCase();
  const results = normalized
    ? presentations.filter((presentation) =>
        [
          presentation.id,
          presentation.title,
          presentation.track,
          presentation.presenter ?? "",
          presentation.type,
          presentation.day ?? "",
          presentation.date ?? "",
          presentation.time ?? "",
          presentation.venue ?? "",
        ].some((value) => value.toLowerCase().includes(normalized))
      )
    : [];

  const oralCount = presentations.filter((item) => item.type === "Oral Presentation").length;
  const posterCount = presentations.length - oralCount;

  return (
    <section className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0F2A4D] sm:text-xl">Search Presentations</h2>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            Search by presentation ID, presenter, title, scientific track, time or venue.
          </p>
        </div>
        <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {oralCount} oral · {posterCount} poster
        </span>
      </div>

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try Asrul Ismail, Saidatul Akhmal, PP015, Suite V..."
        autoComplete="off"
        className="mt-4 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F2A4D] focus:ring-2 focus:ring-[#0F2A4D]/20"
      />

      {normalized ? (
        <div className="mt-4" aria-live="polite">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-slate-700">{results.length} {results.length === 1 ? "result" : "results"}</p>
            <button type="button" onClick={() => setQuery("")} className="text-xs font-semibold text-[#0F2A4D] hover:underline">
              Clear search
            </button>
          </div>

          {results.length ? (
            <div className="mt-3 max-h-[32rem] space-y-3 overflow-y-auto pr-1">
              {results.map((result) => (
                <article key={`${result.type}-${result.id}`} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#0F2A4D] px-2.5 py-1 text-xs font-bold text-white">{result.id}</span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{result.type}</span>
                    </div>
                    {result.day ? (
                      <span className="text-xs font-medium text-slate-500">
                        {result.day}{result.time ? ` · ${result.time}` : ""}{result.venue ? ` · ${result.venue}` : ""}
                      </span>
                    ) : null}
                  </div>

                  <PresentationAwardBadge presentationId={result.id} />
                  {result.presenter ? <p className="mt-3 text-sm font-semibold text-slate-900">{result.presenter}</p> : null}
                  <h3 className="mt-1 text-sm font-semibold leading-relaxed text-slate-800">{result.title}</h3>
                  <p className="mt-2 text-xs font-medium text-slate-500">{result.track}</p>
                  {result.date ? <p className="mt-1 text-xs text-slate-500">{result.date}</p> : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="text-sm font-semibold text-slate-700">No presentation found.</p>
              <p className="mt-1 text-sm text-slate-500">Try another presenter, ID, title, track, time or venue.</p>
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
}
