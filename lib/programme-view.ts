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

function normalizePresenterName(name?: string) {
  if (!name) {
    return name;
  }

  return name
    .replace("SADIA SULTAN", "Sadia Sultan")
    .replace(/^MST Rahman\b/, "Mst Rahman");
}

function normalizeTrackTitle(name: string, title?: string) {
  if (name === "Associate Professor Dr Shazia Jamshed") {
    return "_Applications of Digital Health in Pharmacy Practice and Education: Current Insights and Future Directions_";
  }

  return title;
}

function normalizeFeaturedSessionLines(
  title: string,
  lines?: readonly string[]
): readonly string[] | undefined {
  if (!lines?.length) {
    return lines;
  }

  if (title === "Keynote Lecture" && lines.length >= 2) {
    const [talkTitle, speaker, ...details] = lines;
    return [speaker, talkTitle, ...details];
  }

  if (title === "Plenary Session I" && lines.length >= 2) {
    const [talkTitle, speakerLine, ...details] = lines;
    const commaIndex = speakerLine.indexOf(",");

    if (commaIndex > -1) {
      const speaker = speakerLine.slice(0, commaIndex).trim();
      const affiliation = speakerLine.slice(commaIndex + 1).trim();
      return [speaker, talkTitle, affiliation, ...details];
    }

    return [speakerLine, talkTitle, ...details];
  }

  if (title === "Closing Plenary" && lines.length >= 2) {
    const [talkTitle, lectureLine, ...details] = lines;
    const speaker = lectureLine
      .replace(/^Professorial Lecture by\s+/i, "")
      .replace(/^Prof Dr\s+/, "Prof. Dr. ");

    return [speaker, talkTitle, "Professorial Lecture", ...details];
  }

  return lines;
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
      presenter: normalizePresenterName(parts[1]),
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
      descriptionLines: normalizeFeaturedSessionLines(
        item.title,
        item.descriptionLines
      ),
      tracks: item.tracks?.map((track) => ({
        label: track.label,
        name: track.name,
        title: normalizeTrackTitle(track.name, track.title),
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
