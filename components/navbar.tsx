"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Speakers", "/speakers"],
  ["Schedule", "/schedule"],
  ["Venue", "/venue"],
  ["Registration", "/registration"],
  ["Sponsors", "/sponsors"],
  ["FAQ", "/faq"],
  ["Code of Conduct", "/code-of-conduct"],
  ["Contact", "/contact"]
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="text-sm font-semibold text-brand-900 sm:text-base">
          {site.conferenceName}
        </Link>

        <button
          className="rounded border border-slate-300 px-3 py-1 text-sm md:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <ul className="hidden items-center gap-4 text-sm md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="text-slate-700 hover:text-brand-700">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded px-2 py-2 text-sm text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
