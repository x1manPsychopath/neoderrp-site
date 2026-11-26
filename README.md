# NeoDerrp / Derrp Gaming — Astro site (Webflow-sketch rebuild)

Implements the Webflow sketch in `../Airtable-and-Webflow-Build-Kit.md` Part 2,
collection-for-collection, with no Webflow subscription and no CMS lock-in.

## Run locally (on NeoDerrp)

```powershell
npm install
npm run dev
```

## Deploy (Cloudflare Workers — free)

*Note: Old Cloudflare Pages instructions are **SUPERSEDED (2026-11-26)**.*

1. Deployment is **Cloudflare Workers** (Git-connected to `x1manPsychopath/neoderrp-site`, project `neoderrp-site`, production branch `main`, build command `npm run build`, output `dist/`), live at `https://neoderrp-site.phillips-joshua0108.workers.dev`.
2. Canonical `site:` in `astro.config.mjs` is set to `https://neoderrp-site.phillips-joshua0108.workers.dev`. Ama's VGen link is already wired in `src/pages/commissions.astro`: https://vgen.co/amaderrp
3. Custom domain (after EU.org approval): Workers & Pages → `neoderrp-site` → Settings → Domains & Routes → add `neoderrp.eu.org` as a Custom Domain ONLY after EU.org approval, then update `site:` to `https://neoderrp.eu.org`, commit, push.

## Still TODO before public launch

- Brand mark RULED by Joshua 2026-11-23: the stacked NeoDerrp wordmark (headset / crescent / chat / cocoa / controller) replaces the owl badge — `public/wordmark-stacked.png` (hero + favicon) and `public/wordmark-header.png` (trimmed crop, header + footer) are in place.
- VGen URL confirmed (https://vgen.co/amaderrp, on record since 2026-11-17 and re-confirmed 2026-11-23); keep the no-DM rule and link-only price default.
- Wire "next stream" to a weekly static update or Command Center data — do not hand-fake live status.
- Scrub any Command Center screenshots (tokens/credentials/viewer data) and show Ama before publishing.
