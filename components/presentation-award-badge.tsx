import { presentationAwardById } from "@/lib/presentation-awards";

const RANK_LABELS = {
  1: "1st Place",
  2: "2nd Place",
  3: "3rd Place",
} as const;

export function PresentationAwardBadge({
  presentationId,
}: {
  presentationId: string;
}) {
  const award = presentationAwardById[presentationId];

  if (!award) {
    return null;
  }

  return (
    <div className="mt-3 flex">
      <span className="inline-flex items-center gap-2 rounded-lg border border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-100 px-3 py-2 text-xs font-bold leading-relaxed text-[#0F2A4D] shadow-sm">
        <span aria-hidden="true" className="text-base leading-none">
          {award.medal}
        </span>
        <span>{award.category}</span>
        <span className="text-amber-700">· {RANK_LABELS[award.rank]}</span>
      </span>
    </div>
  );
}
