"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Speakers", "/speakers"],
  ["Schedule", "/schedule"],
  ["Venue", "/venue"],
  ["Registration", "/registration"],
  ["Sponsors", "/sponsors"],
  ["Submit Abstract", "/faq"],
  ["Code of Conduct", "/code-of-conduct"],
  ["Contact", "/contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-[#0F2A4D]">
          IPNACS–IPOPS 2026
        </Link>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="text-slate-600 hover:text-[#0F2A4D] transition">
                {label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/registration"
              className="ml-2 rounded-lg bg-[#0F2A4D] px-4 py-2 text-white font-medium hover:opacity-90 transition"
            >
              Register
            </Link>
          </li>
        </ul>

        <button
          className="rounded border border-slate-300 px-3 py-1 text-sm md:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-gray-200 bg-white px-6 py-4 md:hidden">
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

          <li>
            <Link
              href="/registration"
              className="block rounded bg-[#0F2A4D] px-4 py-2 text-center text-white font-medium hover:opacity-90 transition"
              onClick={() => setOpen(false)}
            >
              Register
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
