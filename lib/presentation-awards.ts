export type PresentationAwardWinner = {
  id: string;
  name: string;
  rank: 1 | 2 | 3;
  medal: "🥇" | "🥈" | "🥉";
};

export type PresentationAward = {
  category: "Best Oral Presentation" | "Best Poster Presentation";
  winners: readonly PresentationAwardWinner[];
};

export const PRESENTATION_AWARD_WINNERS: readonly PresentationAward[] = [
  {
    category: "Best Oral Presentation",
    winners: [
      { id: "OP066", name: "Shu Obana", rank: 1, medal: "🥇" },
      {
        id: "OP055",
        name: "apt. Rickha Octavia, M.Sc",
        rank: 2,
        medal: "🥈",
      },
      {
        id: "OP103",
        name: "Dr. Hisyam Abdul Hamid",
        rank: 3,
        medal: "🥉",
      },
    ],
  },
  {
    category: "Best Poster Presentation",
    winners: [
      {
        id: "PP030",
        name: "Ts. Mohd Radzi Ab. Aziz",
        rank: 1,
        medal: "🥇",
      },
      {
        id: "PP106",
        name: "Larasati Arrum Kusumawardani",
        rank: 2,
        medal: "🥈",
      },
      {
        id: "PP109",
        name: "Nur Asyiera Amiruddin",
        rank: 3,
        medal: "🥉",
      },
    ],
  },
] as const;

export const presentationAwardById = Object.fromEntries(
  PRESENTATION_AWARD_WINNERS.flatMap((award) =>
    award.winners.map((winner) => [
      winner.id,
      {
        category: award.category,
        rank: winner.rank,
        medal: winner.medal,
      },
    ])
  )
) as Readonly<
  Record<
    string,
    {
      category: PresentationAward["category"];
      rank: PresentationAwardWinner["rank"];
      medal: PresentationAwardWinner["medal"];
    }
  >
>;
