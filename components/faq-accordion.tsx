"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={item.question} className="card">
          <button
            className="flex w-full items-center justify-between px-4 py-4 text-left"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <span className="font-medium">{item.question}</span>
            <span>{open === idx ? "−" : "+"}</span>
          </button>
          {open === idx && <p className="border-t border-slate-200 px-4 py-4 text-sm text-slate-700">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
