import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Organizer</h2>
          <p className="mt-2 text-sm text-slate-700">{site.organizer}</p>
          <p className="text-sm text-slate-700">{site.location}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</h2>
          <p className="mt-2 text-sm text-slate-700">{site.contactEmail}</p>
          <p className="text-sm text-slate-700">{site.venue}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Social</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="text-brand-700 hover:underline" href={site.socials.linkedin}>LinkedIn</Link></li>
            <li><Link className="text-brand-700 hover:underline" href={site.socials.x}>X</Link></li>
            <li><Link className="text-brand-700 hover:underline" href={site.socials.youtube}>YouTube</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
