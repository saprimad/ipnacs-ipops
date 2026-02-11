# Conference Website (Next.js + Tailwind + TypeScript)

## Project Overview
This project is a modern, responsive conference website built with Next.js App Router, Tailwind CSS, and TypeScript. It is optimized for performance, accessibility, and straightforward content editing via JSON files.

## Features
- Home page hero with event details and live countdown timer
- About, Speakers, Schedule, Venue, Registration, Sponsors, FAQ, Code of Conduct, and Contact pages
- Dynamic speaker detail route at `/speakers/[slug]`
- Day-tab schedule UI using data from JSON
- Contact form with client-side validation and mock API endpoint (`/api/contact`)
- SEO metadata using Next.js Metadata API (including Open Graph and Twitter metadata)
- Sticky responsive navigation with mobile menu
- Back-to-top button

## Run Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Start production server:
   ```bash
   npm run start
   ```

## Edit Content via JSON Files
All editable conference content is in the `data/` directory:
- `data/site.json`: conference identity, date/time, links, highlights, and social links
- `data/speakers.json`: speaker profiles and slugs used by `/speakers/[slug]`
- `data/schedule.json`: day-based timetable content used in `/schedule`

When you update JSON, pages refresh automatically in development mode.

## Deploy to Vercel
1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use default build settings (`npm run build`, output: Next.js).
4. Deploy. Vercel will provide a production URL.
