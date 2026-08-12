"use client";

import React, { useEffect, useMemo, useState } from "react";
import type {
  ProgrammeDay,
  ProgrammeOralTrack,
  ProgrammeTrackItem,
} from "@/lib/programme-view";

type PosterPresentation = { id: string; title: string };
type PosterTrack = {
  key: string;
  name: string;
  posters: readonly PosterPresentation[];
};

const POSTER_TAB_KEY = "poster-presentation";
const ALL_POSTERS_KEY = "all-posters";

function renderItalics(text: string) {
  const parts = text.split(/(_[^_]+_)/g);
  return parts.map((part, index) => {
    const italic = part.startsWith("_") && part.endsWith("_") && part.length >= 3;
    return italic ? <em key={index}>{part.slice(1, -1)}</em> : <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function MetaLine({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <p className="mt-1 text-sm leading-relaxed text-slate-600">
      <span className="font-semibold text-slate-800">{label}:</span> {value}
    </p>
  );
}

function TrackCard({ track }: { track: ProgrammeTrackItem }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-sm font-bold text-[#0F2A4D]">{track.label}</p>
        {track.location ? (
          <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500">
            {track.location}
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-900">
        {renderItalics(track.name)}
      </p>
      {track.affiliation ? (
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{track.affiliation}</p>
      ) : null}
      <MetaLine label="Moderator" value={track.moderator} />
      <MetaLine label="Session Chair" value={track.sessionChair} />

      <div className="mt-3 border-t border-slate-200 pt-3">
        <p className="text-sm leading-relaxed text-slate-700">
          <span className="font-semibold text-slate-900">Title:</span>{" "}
          {renderItalics(track.title ?? "TBC")}
        </p>
      </div>
    </section>
  );
}

function OralTrackTabs({ oralTracks }: { oralTracks: readonly ProgrammeOralTrack[] }) {
  const firstKey = oralTracks[0]?.key ?? "";
  const [activeKey, setActiveKey] = useState(firstKey);

  useEffect(() => {
    if (!oralTracks.some((track) => track.key === activeKey)) setActiveKey(firstKey);
  }, [oralTracks, activeKey, firstKey]);

  const activeTrack = oralTracks.find((track) => track.key === activeKey) ?? oralTracks[0];
  if (!activeTrack) return null;

  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
      <div className="grid grid-cols-2 gap-2 border-b border-slate-200 bg-white p-3 md:grid-cols-4" role="tablist">
        {oralTracks.map((track) => {
          const active = track.key === activeKey;
          return (
            <button
              key={track.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveKey(track.key)}
              className={[
                "w-full rounded-lg px-4 py-3 text-center text-base font-bold transition",
                active ? "bg-[#0F2A4D] text-white shadow-sm" : "bg-slate-100 text-[#0F2A4D] hover:bg-slate-200",
              ].join(" ")}
            >
              {track.label}
            </button>
          );
        })}
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h4 className="text-lg font-bold text-[#0F2A4D]">{activeTrack.label}</h4>
            <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-900">{activeTrack.name}</p>
            {activeTrack.location ? (
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{activeTrack.location}</p>
            ) : null}
          </div>
          <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">
            {activeTrack.presentations.length} presentations
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {activeTrack.presentations.map((presentation) => (
            <article key={presentation.id} className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-[#0F2A4D] px-2.5 py-1 text-xs font-bold text-white">{presentation.id}</span>
                {presentation.time ? (
                  <span className="text-xs font-bold text-[#0F2A4D]">{presentation.time}</span>
                ) : null}
              </div>

              {presentation.presenter ? (
                <p className="mt-3 text-sm font-semibold text-slate-900">{presentation.presenter}</p>
              ) : null}

              <h5 className="mt-1 text-sm font-semibold leading-relaxed text-slate-800">
                {renderItalics(presentation.title)}
              </h5>

              {presentation.track ? (
                <p className="mt-2 text-xs font-medium text-slate-500">{presentation.track}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function PosterTabs({ posterTracks }: { posterTracks: readonly PosterTrack[] }) {
  const [activeKey, setActiveKey] = useState(ALL_POSTERS_KEY);
  const [query, setQuery] = useState("");
  const all = useMemo(
    () => posterTracks.flatMap((track) => track.posters.map((poster) => ({ ...poster, track: track.name }))),
    [posterTracks]
  );
  const selected = activeKey === ALL_POSTERS_KEY
    ? all
    : all.filter((poster) => poster.track === posterTracks.find((track) => track.key === activeKey)?.name);
  const filtered = selected.filter((poster) =>
    [poster.id, poster.title, poster.track].some((value) => value.toLowerCase().includes(query.trim().toLowerCase()))
  );

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#0F2A4D] sm:text-2xl">Poster Presentation</h2>
          <p className="mt-2 text-sm text-slate-600">Browse {all.length} posters across {posterTracks.length} scientific tracks.</p>
        </div>
        <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{all.length} posters</span>
      </div>

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by poster ID, title or track"
        className="mt-6 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#0F2A4D] focus:ring-2 focus:ring-[#0F2A4D]/20"
      />

      <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <button
          type="button"
          onClick={() => setActiveKey(ALL_POSTERS_KEY)}
          className={[
            "rounded-lg px-4 py-3 text-left text-sm font-bold transition",
            activeKey === ALL_POSTERS_KEY ? "bg-[#0F2A4D] text-white" : "bg-slate-100 text-[#0F2A4D]",
          ].join(" ")}
        >All Posters</button>
        {posterTracks.map((track) => (
          <button
            key={track.key}
            type="button"
            onClick={() => setActiveKey(track.key)}
            className={[
              "rounded-lg px-4 py-3 text-left text-sm font-bold transition",
              activeKey === track.key ? "bg-[#0F2A4D] text-white" : "bg-slate-100 text-[#0F2A4D]",
            ].join(" ")}
          >{track.name}</button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {filtered.map((poster) => (
          <article key={poster.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{poster.id}</p>
            <h4 className="mt-1 text-sm font-semibold leading-relaxed text-slate-900">{poster.title}</h4>
            <p className="mt-2 text-xs font-medium text-slate-500">{poster.track}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ProgrammeTabs({ days, posterTracks }: { days: readonly ProgrammeDay[]; posterTracks: readonly PosterTrack[] }) {
  const firstKey = days[0]?.key ?? POSTER_TAB_KEY;
  const [activeKey, setActiveKey] = useState(firstKey);
  const activeDay = days.find((day) => day.key === activeKey);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 bg-slate-50 p-4">
        {days.map((day) => (
          <button
            key={day.key}
            type="button"
            onClick={() => setActiveKey(day.key)}
            className={[
              "rounded-lg px-4 py-2 text-left text-sm font-semibold transition",
              activeKey === day.key ? "bg-[#0F2A4D] text-white" : "bg-white text-slate-700 hover:bg-slate-200",
            ].join(" ")}
          >
            {day.label}
            {day.date ? <span className="ml-2 text-xs font-medium opacity-80">{day.date}</span> : null}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setActiveKey(POSTER_TAB_KEY)}
          className={[
            "rounded-lg px-4 py-2 text-left text-sm font-semibold transition",
            activeKey === POSTER_TAB_KEY ? "bg-[#0F2A4D] text-white" : "bg-white text-slate-700 hover:bg-slate-200",
          ].join(" ")}
        >Poster Presentation</button>
      </div>

      <div className="p-4 sm:p-6">
        {activeKey === POSTER_TAB_KEY ? (
          <PosterTabs posterTracks={posterTracks} />
        ) : activeDay ? (
          <>
            <h2 className="text-xl font-bold text-[#0F2A4D] sm:text-2xl">
              {activeDay.label}{activeDay.date ? <span className="ml-2 block text-base font-medium text-slate-500 sm:inline">({activeDay.date})</span> : null}
            </h2>

            <div className="mt-6 space-y-4">
              {activeDay.items.map((item, index) => (
                <article key={`${item.time}-${index}`} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{item.title}</h3>
                      {item.location ? <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{item.location}</p> : null}
                    </div>
                    <div className="w-fit shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-[#0F2A4D]">{item.time}</div>
                  </div>

                  {item.oralTracks?.length ? (
                    <OralTrackTabs oralTracks={item.oralTracks} />
                  ) : item.tracks?.length ? (
                    <div className={[
                      "mt-4 grid gap-4",
                      item.tracks.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
                    ].join(" ")}
                    >
                      {item.tracks.map((track) => <TrackCard key={`${track.label}-${track.name}`} track={track} />)}
                    </div>
                  ) : item.descriptionLines?.length ? (
                    <div className="mt-3 space-y-1 text-sm">
                      {item.descriptionLines.map((line, lineIndex) => (
                        <p key={`${line}-${lineIndex}`} className={lineIndex === 0 ? "font-semibold leading-relaxed text-slate-900" : "leading-relaxed text-slate-700"}>
                          {renderItalics(line)}
                        </p>
                      ))}
                    </div>
                  ) : item.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{renderItalics(item.description)}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
