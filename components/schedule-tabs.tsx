"use client";

import React, { useEffect, useMemo, useState } from "react";

type TrackItem = {
  label: string;
  name: string;
  role?: string;
  title?: string;
  location?: string;
};

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
  description?: string;
  descriptionLines?: readonly string[];
  location?: string;
  tracks?: readonly TrackItem[];
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

type DisplayPoster = PosterPresentation & {
  track: string;
};

const POSTER_TAB_KEY = "poster-presentation";
const ALL_POSTERS_KEY = "all-posters";
const PROFESSORIAL_LIVESTREAM_TITLE =
  "Closing Plenary";
const PROFESSORIAL_LIVESTREAM_URL =
  "https://www.youtube.com/live/N6L9wi76bs8";

function renderItalics(text: string) {
  const parts = text.split(/(_[^_]+_)/g);

  return parts.map((part, index) => {
    const isItalic =
      part.startsWith("_") && part.endsWith("_") && part.length >= 3;

    if (!isItalic) {
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }

    return <em key={index}>{part.slice(1, -1)}</em>;
  });
}

function DescriptionBlock({
  lines,
  fallback,
}: {
  lines?: readonly string[];
  fallback?: string;
}) {
  if (lines?.length) {
    const [first, ...rest] = lines;

    return (
      <div className="mt-3 space-y-1 text-sm">
        <p className="font-semibold leading-relaxed text-slate-900">
          {renderItalics(first)}
        </p>

        {rest.map((line, index) => (
          <p
            key={`${line}-${index}`}
            className="leading-relaxed text-slate-700"
          >
            {renderItalics(line)}
          </p>
        ))}
      </div>
    );
  }

  if (fallback) {
    return (
      <p className="mt-3 text-sm leading-relaxed text-slate-700">
        {renderItalics(fallback)}
      </p>
    );
  }

  return null;
}

function OralTrackTabs({
  oralTracks,
}: {
  oralTracks: readonly OralTrack[];
}) {
  const firstTrackKey = useMemo(
    () => oralTracks?.[0]?.key ?? "",
    [oralTracks]
  );

  const [activeTrackKey, setActiveTrackKey] =
    useState<string>(firstTrackKey);

  useEffect(() => {
    const activeTrackStillExists = oralTracks.some(
      (track) => track.key === activeTrackKey
    );

    if (!activeTrackStillExists) {
      setActiveTrackKey(firstTrackKey);
    }
  }, [oralTracks, activeTrackKey, firstTrackKey]);

  const activeTrack = useMemo(
    () =>
      oralTracks.find((track) => track.key === activeTrackKey) ??
      oralTracks[0],
    [oralTracks, activeTrackKey]
  );

  if (!activeTrack) {
    return null;
  }

  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
      <div
        className="grid grid-cols-2 gap-2 border-b border-slate-200 bg-white p-3 md:grid-cols-4"
        role="tablist"
        aria-label="Oral presentation tracks"
      >
        {oralTracks.map((track) => {
          const isActive = track.key === activeTrackKey;

          return (
            <button
              key={track.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTrackKey(track.key)}
              className={[
                "w-full rounded-lg px-4 py-3 text-center text-base font-bold transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A4D] focus-visible:ring-offset-2",
                isActive
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
          {activeTrack.presentations.map((presentation, index) => (
            <article
              key={`${presentation.id}-${index}`}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0F2A4D] text-xs font-bold text-white">
                  {index + 1}
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {presentation.id}
                  </p>

                  <h5 className="mt-1 text-sm font-semibold leading-relaxed text-slate-900">
                    {renderItalics(presentation.title)}
                  </h5>

                  {presentation.track ? (
                    <p className="mt-2 text-xs font-medium text-slate-500">
                      {presentation.track}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function PosterTrackTabs({
  posterTracks,
}: {
  posterTracks: readonly PosterTrack[];
}) {
  const [activeTrackKey, setActiveTrackKey] =
    useState<string>(ALL_POSTERS_KEY);

  const [searchQuery, setSearchQuery] = useState("");

  const allPosters = useMemo<DisplayPoster[]>(
    () =>
      posterTracks.flatMap((track) =>
        track.posters.map((poster) => ({
          ...poster,
          track: track.name,
        }))
      ),
    [posterTracks]
  );

  useEffect(() => {
    const activeTrackStillExists =
      activeTrackKey === ALL_POSTERS_KEY ||
      posterTracks.some((track) => track.key === activeTrackKey);

    if (!activeTrackStillExists) {
      setActiveTrackKey(ALL_POSTERS_KEY);
    }
  }, [posterTracks, activeTrackKey]);

  const selectedPosters = useMemo<DisplayPoster[]>(() => {
    if (activeTrackKey === ALL_POSTERS_KEY) {
      return allPosters;
    }

    const activeTrack = posterTracks.find(
      (track) => track.key === activeTrackKey
    );

    if (!activeTrack) {
      return [];
    }

    return activeTrack.posters.map((poster) => ({
      ...poster,
      track: activeTrack.name,
    }));
  }, [activeTrackKey, allPosters, posterTracks]);

  const filteredPosters = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return selectedPosters;
    }

    return selectedPosters.filter((poster) =>
      [poster.id, poster.title, poster.track].some((value) =>
        value.toLowerCase().includes(query)
      )
    );
  }, [searchQuery, selectedPosters]);

  const activeTrackName =
    activeTrackKey === ALL_POSTERS_KEY
      ? "All Posters"
      : posterTracks.find((track) => track.key === activeTrackKey)?.name ??
        "Poster Presentation";

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#0F2A4D] sm:text-2xl">
            Poster Presentation
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Browse {allPosters.length} posters across {posterTracks.length}{" "}
            scientific tracks.
          </p>
        </div>

        <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {allPosters.length} posters
        </span>
      </div>

      <div className="mt-6">
        <label
          htmlFor="poster-search"
          className="text-sm font-semibold text-slate-900"
        >
          Search posters
        </label>

        <input
          id="poster-search"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search by poster ID, title or track"
          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F2A4D] focus:ring-2 focus:ring-[#0F2A4D]/20"
        />
      </div>

      <div
        className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4"
        role="tablist"
        aria-label="Poster presentation tracks"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTrackKey === ALL_POSTERS_KEY}
          onClick={() => setActiveTrackKey(ALL_POSTERS_KEY)}
          className={[
            "rounded-lg px-4 py-3 text-left transition",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A4D] focus-visible:ring-offset-2",
            activeTrackKey === ALL_POSTERS_KEY
              ? "bg-[#0F2A4D] text-white shadow-sm"
              : "bg-slate-100 text-[#0F2A4D] hover:bg-slate-200",
          ].join(" ")}
        >
          <span className="block text-sm font-bold">All Posters</span>

          <span
            className={[
              "mt-1 block text-xs font-medium",
              activeTrackKey === ALL_POSTERS_KEY
                ? "text-white/80"
                : "text-slate-500",
            ].join(" ")}
          >
            {allPosters.length} posters
          </span>
        </button>

        {posterTracks.map((track) => {
          const isActive = track.key === activeTrackKey;

          return (
            <button
              key={track.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTrackKey(track.key)}
              className={[
                "rounded-lg px-4 py-3 text-left transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A4D] focus-visible:ring-offset-2",
                isActive
                  ? "bg-[#0F2A4D] text-white shadow-sm"
                  : "bg-slate-100 text-[#0F2A4D] hover:bg-slate-200",
              ].join(" ")}
            >
              <span className="block text-sm font-bold leading-snug">
                {track.name}
              </span>

              <span
                className={[
                  "mt-1 block text-xs font-medium",
                  isActive ? "text-white/80" : "text-slate-500",
                ].join(" ")}
              >
                {track.posters.length}{" "}
                {track.posters.length === 1 ? "poster" : "posters"}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-bold text-[#0F2A4D]">
          {activeTrackName}
        </h3>

        <span className="text-sm font-medium text-slate-500">
          Showing {filteredPosters.length} of {selectedPosters.length} posters
        </span>
      </div>

      {filteredPosters.length ? (
        <div className="mt-4 space-y-3">
          {filteredPosters.map((poster, index) => (
            <article
              key={poster.id}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0F2A4D] text-xs font-bold text-white">
                  {index + 1}
                </span>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {poster.id}
                  </p>

                  <h4 className="mt-1 text-sm font-semibold leading-relaxed text-slate-900">
                    {renderItalics(poster.title)}
                  </h4>

                  <p className="mt-2 text-xs font-medium text-slate-500">
                    {poster.track}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <p className="text-sm font-semibold text-slate-700">
            No posters found.
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Try another poster ID, title or track.
          </p>
        </div>
      )}

      <p className="mt-8 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
        Note: Poster presentation details are subject to refinement as the
        final scientific programme is confirmed.
      </p>
    </div>
  );
}

export function ScheduleTabs({
  days,
  posterTracks,
}: {
  days: readonly ScheduleDay[];
  posterTracks: readonly PosterTrack[];
}) {
  const firstKey = useMemo(
    () => days?.[0]?.key ?? POSTER_TAB_KEY,
    [days]
  );

  const [activeKey, setActiveKey] = useState<string>(firstKey);

  useEffect(() => {
    const activeTabStillExists =
      activeKey === POSTER_TAB_KEY ||
      days.some((day) => day.key === activeKey);

    if (!activeTabStillExists) {
      setActiveKey(firstKey);
    }
  }, [days, activeKey, firstKey]);

  const activeDay = useMemo(
    () => days.find((day) => day.key === activeKey),
    [days, activeKey]
  );

  if (!activeDay && activeKey !== POSTER_TAB_KEY) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div
        className="flex flex-wrap gap-2 border-b border-slate-200 bg-slate-50 p-4"
        role="tablist"
        aria-label="Conference programme and presentations"
      >
        {days.map((day) => {
          const isActive = day.key === activeKey;

          return (
            <button
              key={day.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`schedule-panel-${day.key}`}
              onClick={() => setActiveKey(day.key)}
              className={[
                "rounded-lg px-4 py-2 text-left text-sm font-semibold transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A4D] focus-visible:ring-offset-2",
                isActive
                  ? "bg-[#0F2A4D] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-200",
              ].join(" ")}
            >
              <span>{day.label}</span>

              {day.date ? (
                <span
                  className={[
                    "ml-2 text-xs font-medium",
                    isActive ? "text-white/90" : "text-slate-500",
                  ].join(" ")}
                >
                  {day.date}
                </span>
              ) : null}
            </button>
          );
        })}

        <button
          type="button"
          role="tab"
          aria-selected={activeKey === POSTER_TAB_KEY}
          aria-controls="schedule-panel-poster-presentation"
          onClick={() => setActiveKey(POSTER_TAB_KEY)}
          className={[
            "rounded-lg px-4 py-2 text-left text-sm font-semibold transition",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A4D] focus-visible:ring-offset-2",
            activeKey === POSTER_TAB_KEY
              ? "bg-[#0F2A4D] text-white shadow-sm"
              : "bg-white text-slate-700 hover:bg-slate-200",
          ].join(" ")}
        >
          Poster Presentation
        </button>
      </div>

      <div
        id={`schedule-panel-${activeKey}`}
        role="tabpanel"
        className="p-4 sm:p-6"
      >
        {activeKey === POSTER_TAB_KEY ? (
          <PosterTrackTabs posterTracks={posterTracks} />
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
              {activeDay.items.map((item, itemIndex) => (
                <article
                  key={`${activeDay.key}-${item.time}-${itemIndex}`}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                        {item.title}
                      </h3>

                      {item.location ? (
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                          {item.location}
                        </p>
                      ) : null}
                    </div>

                    <div className="w-fit shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-[#0F2A4D]">
                      {item.time}
                    </div>
                  </div>

                  {item.oralTracks?.length ? (
                    <OralTrackTabs oralTracks={item.oralTracks} />
                  ) : item.tracks?.length ? (
                    <div
                      className={[
                        "mt-4 grid gap-4",
                        item.tracks.length === 1
                          ? "grid-cols-1"
                          : item.tracks.length === 2
                            ? "grid-cols-1 md:grid-cols-2"
                            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
                      ].join(" ")}
                    >
                      {item.tracks.map((track, trackIndex) => (
                        <section
                          key={`${track.label}-${trackIndex}`}
                          className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <p className="text-sm font-bold text-[#0F2A4D]">
                              {track.label}
                            </p>

                            {track.location ? (
                              <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500">
                                {track.location}
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-900">
                            {renderItalics(track.name)}
                          </p>

                          {track.role ? (
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                              {renderItalics(
                                track.role.replace(
                                  "International Medical University (IMU)",
                                  "IMU University (IMU)"
                                )
                              )}
                            </p>
                          ) : null}

                          <div className="mt-3 border-t border-slate-200 pt-3">
                            <p className="text-sm leading-relaxed text-slate-700">
                              <span className="font-semibold text-slate-900">
                                Title:
                              </span>{" "}
                              {renderItalics(track.title ?? "TBC")}
                            </p>
                          </div>
                        </section>
                      ))}
                    </div>
                  ) : (
                    <>
                      <DescriptionBlock
                        lines={item.descriptionLines}
                        fallback={item.description}
                      />

                      {item.title === PROFESSORIAL_LIVESTREAM_TITLE ? (
                        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-red-700">
                              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-600" />
                              Live Stream
                            </span>

                            <span className="text-xs font-medium text-slate-500">
                              Starts at 2:45 PM
                            </span>
                          </div>

                          <a
                            href={PROFESSORIAL_LIVESTREAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#FF0000] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                          >
                            <span
                              aria-hidden="true"
                              className="inline-flex h-5 w-7 items-center justify-center rounded bg-white/15"
                            >
                              ▶
                            </span>
                            Watch Live on YouTube
                          </a>

                          <p className="mt-2 text-xs font-medium text-slate-600">
                            Faculty of Pharmacy UiTM
                          </p>
                        </div>
                      ) : null}
                    </>
                  )}
                </article>
              ))}
            </div>

            <p className="mt-8 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
              Note: The schedule is subject to refinement as the final
              scientific programme is confirmed.
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
