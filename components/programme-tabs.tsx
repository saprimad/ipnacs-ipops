"use client";

import React, { useEffect, useMemo, useState } from "react";
import type {
  ProgrammeDay,
  ProgrammeOralTrack,
  ProgrammeTrackItem,
} from "@/lib/programme-view";
import { posterAuthors, posterTitleOverrides } from "@/lib/poster-authors";
import { PRESENTATION_AWARD_WINNERS } from "@/lib/presentation-awards";
import { PresentationAwardBadge } from "@/components/presentation-award-badge";

type PosterPresentation = { id: string; title: string };
type PosterTrack = {
  key: string;
  name: string;
  posters: readonly PosterPresentation[];
};

const POSTER_TAB_KEY = "poster-presentation";
const ALL_POSTERS_KEY = "all-posters";
const PROFESSORIAL_LIVESTREAM_TITLE = "Closing Plenary";
const PROFESSORIAL_LIVESTREAM_URL =
  "https://www.youtube.com/live/N6L9wi76bs8";
const PRESENTATION_AWARDS_TITLE = "Prize-Giving";

function renderItalics(text: string) {
  const parts = text.split(/(_[^_]+_)/g);
  return parts.map((part, index) => {
    const italic = part.startsWith("_") && part.endsWith("_") && part.length >= 3;
    return italic ? (
      <em key={index}>{part.slice(1, -1)}</em>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    );
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
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {track.affiliation}
        </p>
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

function OralTrackTabs({
  oralTracks,
}: {
  oralTracks: readonly ProgrammeOralTrack[];
}) {
  const firstKey = oralTracks[0]?.key ?? "";
  const [activeKey, setActiveKey] = useState(firstKey);

  useEffect(() => {
    if (!oralTracks.some((track) => track.key === activeKey)) {
      setActiveKey(firstKey);
    }
  }, [oralTracks, activeKey, firstKey]);

  const activeTrack =
    oralTracks.find((track) => track.key === activeKey) ?? oralTracks[0];
  if (!activeTrack) return null;

  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
      <div
        className="grid grid-cols-2 gap-2 border-b border-slate-200 bg-white p-3 md:grid-cols-4"
        role="tablist"
      >
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
                active
                  ? "bg-[#0F2A4D] text-white shadow-sm"
                  : "bg-slate-100 text-[#0F2A4D] hover:bg-slate-200",
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
            <h4 className="text-lg font-bold text-[#0F2A4D]">
              {activeTrack.label}
            </h4>
            <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-900">
              {activeTrack.name}
            </p>
            {activeTrack.location ? (
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                {activeTrack.location}
              </p>
            ) : null}
          </div>
          <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">
            {activeTrack.presentations.length} presentations
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {activeTrack.presentations.map((presentation) => (
            <article
              key={presentation.id}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-[#0F2A4D] px-2.5 py-1 text-xs font-bold text-white">
                  {presentation.id}
                </span>
                {presentation.time ? (
                  <span className="text-xs font-bold text-[#0F2A4D]">
                    {presentation.time}
                  </span>
                ) : null}
              </div>

              {presentation.presenter ? (
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  {presentation.presenter}
                </p>
              ) : null}

              <PresentationAwardBadge presentationId={presentation.id} />

              <h5 className="mt-1 text-sm font-semibold leading-relaxed text-slate-800">
                {renderItalics(presentation.title)}
              </h5>

              {presentation.track ? (
                <p className="mt-2 text-xs font-medium text-slate-500">
                  {presentation.track}
                </p>
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
    () =>
      posterTracks.flatMap((track) =>
        track.posters.map((poster) => ({
          ...poster,
          title: posterTitleOverrides[poster.id] ?? poster.title,
          presenter: posterAuthors[poster.id],
          track: track.name,
        }))
      ),
    [posterTracks]
  );

  const selected =
    activeKey === ALL_POSTERS_KEY
      ? all
      : all.filter(
          (poster) =>
            poster.track ===
            posterTracks.find((track) => track.key === activeKey)?.name
        );

  const filtered = selected.filter((poster) =>
    [poster.id, poster.presenter ?? "", poster.title, poster.track].some((value) =>
      value.toLowerCase().includes(query.trim().toLowerCase())
    )
  );

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#0F2A4D] sm:text-2xl">
            Poster Presentation
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Browse {all.length} posters across {posterTracks.length} scientific
            tracks.
          </p>
        </div>
        <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {all.length} posters
        </span>
      </div>

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by poster ID, presenter, title or track"
        className="mt-6 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#0F2A4D] focus:ring-2 focus:ring-[#0F2A4D]/20"
      />

      <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <button
          type="button"
          onClick={() => setActiveKey(ALL_POSTERS_KEY)}
          className={[
            "rounded-lg px-4 py-3 text-left text-sm font-bold transition",
            activeKey === ALL_POSTERS_KEY
              ? "bg-[#0F2A4D] text-white"
              : "bg-slate-100 text-[#0F2A4D]",
          ].join(" ")}
        >
          All Posters
        </button>
        {posterTracks.map((track) => (
          <button
            key={track.key}
            type="button"
            onClick={() => setActiveKey(track.key)}
            className={[
              "rounded-lg px-4 py-3 text-left text-sm font-bold transition",
              activeKey === track.key
                ? "bg-[#0F2A4D] text-white"
                : "bg-slate-100 text-[#0F2A4D]",
            ].join(" ")}
          >
            {track.name}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {filtered.map((poster) => (
          <article
            key={poster.id}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <span className="inline-flex w-fit rounded-full bg-[#0F2A4D] px-2.5 py-1 text-xs font-bold text-white">
              {poster.id}
            </span>
            {poster.presenter ? (
              <p className="mt-3 text-sm font-semibold text-slate-900">
                {poster.presenter}
              </p>
            ) : null}
            <PresentationAwardBadge presentationId={poster.id} />
            <h4 className="mt-1 text-sm font-semibold leading-relaxed text-slate-800">
              {poster.title}
            </h4>
            <p className="mt-2 text-xs font-medium text-slate-500">
              {poster.track}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ProgrammeTabs({
  days,
  posterTracks,
}: {
  days: readonly ProgrammeDay[];
  posterTracks: readonly PosterTrack[];
}) {
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
              activeKey === day.key
                ? "bg-[#0F2A4D] text-white"
                : "bg-white text-slate-700 hover:bg-slate-200",
            ].join(" ")}
          >
            {day.label}
            {day.date ? (
              <span className="ml-2 text-xs font-medium opacity-80">
                {day.date}
              </span>
            ) : null}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setActiveKey(POSTER_TAB_KEY)}
          className={[
            "rounded-lg px-4 py-2 text-left text-sm font-semibold transition",
            activeKey === POSTER_TAB_KEY
              ? "bg-[#0F2A4D] text-white"
              : "bg-white text-slate-700 hover:bg-slate-200",
          ].join(" ")}
        >
          Poster Presentation
        </button>
      </div>

      <div className="p-4 sm:p-6">
        {activeKey === POSTER_TAB_KEY ? (
          <PosterTabs posterTracks={posterTracks} />
        ) : activeDay ? (
          <>
            <h2 className="text-xl font-bold text-[#0F2A4D] sm:text-2xl">
              {activeDay.label}
              {activeDay.date ? (
                <span className="ml-2 block text-base font-medium text-slate-500 sm:inline">
                  ({activeDay.date})
                </span>
              ) : null}
            </h2>

            <div className="mt-6 space-y-4">
              {activeDay.items.map((item, index) => (
                <article
                  key={`${item.time}-${index}`}
                  className={[
                    "rounded-xl p-5 shadow-sm",
                    item.title === PROFESSORIAL_LIVESTREAM_TITLE
                      ? "overflow-hidden border border-amber-300/70 bg-gradient-to-br from-[#0F2A4D] via-[#17365D] to-[#452060] shadow-xl shadow-[#0F2A4D]/20"
                      : "border border-slate-200 bg-white",
                  ].join(" ")}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span
                        className={[
                          "inline-flex max-w-full w-fit rounded-full px-3 py-1 text-xs font-bold leading-relaxed sm:text-sm",
                          item.title === PROFESSORIAL_LIVESTREAM_TITLE
                            ? "bg-amber-300 text-[#0F2A4D]"
                            : "bg-[#0F2A4D] text-white",
                        ].join(" ")}
                      >
                        {item.title === PROFESSORIAL_LIVESTREAM_TITLE
                          ? "PROFESSORIAL LECTURE"
                          : item.title}
                      </span>
                      {item.location ? (
                        <p
                          className={[
                            "mt-2 text-xs font-medium uppercase tracking-wide",
                            item.title === PROFESSORIAL_LIVESTREAM_TITLE
                              ? "text-amber-100"
                              : "text-slate-500",
                          ].join(" ")}
                        >
                          {item.location}
                        </p>
                      ) : null}
                    </div>
                    <div
                      className={[
                        "w-fit shrink-0 rounded-full px-3 py-1 text-sm font-bold",
                        item.title === PROFESSORIAL_LIVESTREAM_TITLE
                          ? "bg-white/10 text-white ring-1 ring-inset ring-white/25"
                          : "bg-slate-100 text-[#0F2A4D]",
                      ].join(" ")}
                    >
                      {item.time}
                    </div>
                  </div>

                  {item.oralTracks?.length ? (
                    <OralTrackTabs oralTracks={item.oralTracks} />
                  ) : item.tracks?.length ? (
                    <div
                      className={[
                        "mt-4 grid gap-4",
                        item.tracks.length === 2
                          ? "grid-cols-1 md:grid-cols-2"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
                      ].join(" ")}
                    >
                      {item.tracks.map((track) => (
                        <TrackCard
                          key={`${track.label}-${track.name}`}
                          track={track}
                        />
                      ))}
                    </div>
                  ) : item.descriptionLines?.length ? (
                    <div
                      className={
                        item.title === PROFESSORIAL_LIVESTREAM_TITLE
                          ? "mt-5 space-y-2"
                          : "mt-3 space-y-1 text-sm"
                      }
                    >
                      {(item.title === PROFESSORIAL_LIVESTREAM_TITLE
                        ? item.descriptionLines.slice(0, 2)
                        : item.descriptionLines
                      ).map((line, lineIndex) => (
                        <p
                          key={`${line}-${lineIndex}`}
                          className={
                            item.title === PROFESSORIAL_LIVESTREAM_TITLE
                              ? lineIndex === 0
                                ? "text-lg font-bold leading-relaxed text-white sm:text-xl"
                                : "text-xl font-semibold leading-relaxed text-amber-200 sm:text-2xl"
                              : lineIndex === 0
                              ? "font-semibold leading-relaxed text-slate-900"
                              : "leading-relaxed text-slate-700"
                          }
                        >
                          {renderItalics(line)}
                        </p>
                      ))}
                    </div>
                  ) : item.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">
                      {renderItalics(item.description)}
                    </p>
                  ) : null}

                  {item.title === PROFESSORIAL_LIVESTREAM_TITLE ? (
                    <div className="mt-5 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white">
                          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-600" />
                          Live Stream
                        </span>
                        <span className="text-xs font-medium text-slate-200">
                          Starts at 2:30 PM
                        </span>
                      </div>

                      <a
                        href={PROFESSORIAL_LIVESTREAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF0000] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/20 transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17365D] sm:w-auto"
                      >
                        <span
                          aria-hidden="true"
                          className="inline-flex h-5 w-7 items-center justify-center rounded bg-white/15"
                        >
                          ▶
                        </span>
                        Watch Live on YouTube
                      </a>

                      <p className="mt-3 text-xs font-medium text-slate-200">
                        Faculty of Pharmacy UiTM
                      </p>
                    </div>
                  ) : null}

                  {item.title === PRESENTATION_AWARDS_TITLE ? (
                    <div
                      aria-label="Best presentation award winners"
                      className="mt-4 overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-yellow-50 shadow-sm"
                      role="region"
                    >
                      <div className="bg-[#0F2A4D] px-4 py-3 text-white sm:px-5">
                        <h4 className="text-base font-bold sm:text-lg">
                          🏆 Best Presentation Award Winners
                        </h4>
                      </div>

                      <div className="grid gap-4 p-4 sm:p-5 md:grid-cols-2">
                        {PRESENTATION_AWARD_WINNERS.map((award) => (
                          <section
                            key={award.category}
                            className="rounded-lg border border-amber-200/80 bg-white p-4"
                          >
                            <h5 className="font-bold text-[#0F2A4D]">
                              {award.category}
                            </h5>

                            <ol className="mt-3 space-y-3">
                              {award.winners.map((winner) => (
                                <li
                                  key={winner.id}
                                  className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-slate-800"
                                >
                                  <span
                                    aria-label={`Rank ${winner.rank}`}
                                    className="text-lg leading-none"
                                  >
                                    {winner.medal}
                                  </span>
                                  <span>{winner.name}</span>
                                </li>
                              ))}
                            </ol>
                          </section>
                        ))}
                      </div>
                    </div>
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
