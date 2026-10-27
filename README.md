# Algomise — Landing Page

Updated marketing site for [algomise.com](https://algomise.com), built with Next.js (App Router), Tailwind CSS v4 and TypeScript.

## Design

- **Palette:** Electric Ice — a deep navy base (`#060b13`) with an electric-blue (`#38bdf8`) and ice (`#93c5fd`) accent pair. Tokens live in [`app/globals.css`](app/globals.css).
- **Type:** the Netlify set — Figtree (display), Instrument Sans (body), Martian Mono (mono), loaded via `next/font/google`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx          fonts + metadata
  page.tsx            section composition
  globals.css         theme tokens (palette + fonts)
  components/         Nav, Hero, Stats, Apps, Services, Process, Contact, Footer
lib/
  data.ts             all copy + app/stat/service data in one place
```

Edit content in [`lib/data.ts`](lib/data.ts) — stats, app details, services and company info are all there.
