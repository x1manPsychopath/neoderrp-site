# NeoDerrp / Derrp Gaming — Astro site (Webflow-sketch rebuild)

Implements the Webflow sketch in `../Airtable-and-Webflow-Build-Kit.md` Part 2,
collection-for-collection, with no Webflow subscription and no CMS lock-in.

## Run locally (on NeoDerrp)

```powershell
npm install
npm run dev
```

## Deploy (free)

1. Push this folder as a new GitHub repo under `x1manPsychopath`.
2. Cloudflare Pages → Create project → connect the repo → Framework preset: **Astro** → Deploy.
   (GitHub Pages also works: build command `npm run build`, output `dist/`.)
3. Replace `site:` in `astro.config.mjs` with the real URL. Ama's VGen link is
   already wired in `src/pages/commissions.astro`: https://vgen.co/amaderrp

## Still TODO before public launch

- Brand mark RULED by Joshua 2026-11-23: the stacked NeoDerrp wordmark (headset / crescent / chat / cocoa / controller) replaces the owl badge — `public/wordmark-stacked.png` (hero + favicon) and `public/wordmark-header.png` (trimmed crop, header + footer) are in place.
- VGen URL confirmed (https://vgen.co/amaderrp, on record since 2026-11-17 and re-confirmed 2026-11-23); keep the no-DM rule and link-only price default.
- Wire "next stream" to a weekly static update or Command Center data — do not hand-fake live status.
- Scrub any Command Center screenshots (tokens/credentials/viewer data) and show Ama before publishing.
