import { schedule as sourceSchedule } from "@/lib/programme";

export type ProgrammeTrackItem = {
  label: string;
  name: string;
  title?: string;
  location?: string;
  affiliation?: string;
  moderator?: string;
  sessionChair?: string;
};

export type ProgrammeOralPresentation = {
  id: string;
  title: string;
  time?: string;
  presenter?: string;
  track?: string;
};

export type ProgrammeOralTrack = {
  key: string;
  label: string;
  name: string;
  location?: string;
  presentations: readonly ProgrammeOralPresentation[];
};

export type ProgrammeItem = {
  time: string;
  title: string;
  description?: string;
  descriptionLines?: readonly string[];
  location?: string;
  tracks?: readonly ProgrammeTrackItem[];
  oralTracks?: readonly ProgrammeOralTrack[];
};

export type ProgrammeDay = {
  key: string;
  label: string;
  date?: string;
  items: readonly ProgrammeItem[];
};

type RawTrackItem = {
  label: string;
  name: string;
  role?: string;
  title?: string;
  location?: string;
};

type RawOralPresentation = {
  id: string;
  title: string;
  track?: string;
};

type RawOralTrack = {
  key: string;
  label: string;
  name: string;
  location?: string;
  presentations: readonly RawOralPresentation[];
};

type RawProgrammeItem = {
  time: string;
  title: string;
  description?: string;
  descriptionLines?: readonly string[];
  location?: string;
  tracks?: readonly RawTrackItem[];
  oralTracks?: readonly RawOralTrack[];
};

type RawProgrammeDay = {
  key: string;
  label: string;
  date?: string;
  items: readonly RawProgrammeItem[];
};

function parseTrackRole(role?: string) {
  if (!role) {
    return {};
  }

  const moderatorMarker = " · Moderator: ";
  const chairMarker = " · Session chair: ";

  if (role.includes(moderatorMarker)) {
    const [affiliation, moderator] = role.split(moderatorMarker);
    return { affiliation, moderator };
  }

  if (role.includes(chairMarker)) {
    const [affiliation, sessionChair] = role.split(chairMarker);
    return { affiliation, sessionChair };
  }

  return { affiliation: role };
}

function parsePresentationMeta(value?: string, fallbackTrack?: string) {
  if (!value) {
    return { track: fallbackTrack };
  }

  const parts = value.split(" · ");
  const looksLikeTime = /^\d{2}:\d{2}–\d{2}:\d{2}$/.test(parts[0] ?? "");

  if (looksLikeTime && parts.length >= 3) {
    return {
      time: parts[0],
      presenter: parts[1],
      track: parts.slice(2).join(" · "),
    };
  }

  return { track: value || fallbackTrack };
}

const rawSchedule = sourceSchedule as unknown as readonly RawProgrammeDay[];

export const programmeSchedule: readonly ProgrammeDay[] = rawSchedule.map(
  (day) => ({
    ...day,
    items: day.items.map((item) => ({
      ...item,
      tracks: item.tracks?.map((track) => ({
        label: track.label,
        name: track.name,
        title: track.title,
        location: track.location,
        ...parseTrackRole(track.role),
      })),
      oralTracks: item.oralTracks?.map((oralTrack) => ({
        ...oralTrack,
        presentations: oralTrack.presentations.map((presentation) => ({
          id: presentation.id,
          title: presentation.title,
          ...parsePresentationMeta(presentation.track, oralTrack.name),
        })),
      })),
    })),
  })
);
