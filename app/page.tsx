import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white">
        <div className="section py-20">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-100">International Conference</p>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{site.conferenceName}</h1>
          <p className="mt-4 max-w-4xl text-base text-indigo-100 sm:text-lg">{site.fullConferenceName}</p>
          <p className="mt-3 max-w-3xl text-base text-indigo-100 sm:text-lg">{site.tagline}</p>
          <p className="mt-3 text-sm text-indigo-100">
            {new Date(site.date).toLocaleDateString("en-GB", { dateStyle: "full" })} • {site.venue}, {site.location}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={site.registrationUrl} className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 hover:bg-slate-100">Register Now</Link>
            {site.cfpUrl && <Link href={site.cfpUrl} className="rounded-md border border-indigo-200 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Call for Papers</Link>}
          </div>
          <Countdown targetIso={site.date} />
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-bold text-slate-900">About the Conference</h2>
        <p className="mt-3 max-w-4xl text-slate-700">{site.description}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {site.highlights.map((item) => (
            <article key={item} className="card p-5">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-slate-600">Structured to support scientific exchange, practical learning, and long-term collaboration.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <h2 className="text-2xl font-bold text-slate-900">Conference Tracks</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {site.tracks.map((track) => (
            <article key={track} className="card p-4 text-sm font-medium text-slate-700">{track}</article>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <h2 className="text-2xl font-bold text-slate-900">Important Dates</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <tbody>
              {site.importantDates.map((item) => (
                <tr key={item.label} className="border-b border-slate-100">
                  <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-700">{item.label}</th>
                  <td className="px-4 py-3 text-slate-700">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section pt-0">
        <h2 className="text-2xl font-bold">Sponsors</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {site.sponsors.map((sponsor) => (
            <div key={sponsor} className="card flex h-20 items-center justify-center px-3 text-center text-sm font-semibold text-slate-600">{sponsor} Logo</div>
          ))}
        </div>
      </section>
    </main>
  );
}
