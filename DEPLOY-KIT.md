# Deploy kit — NeoDerrp Astro site

**Status:** Live on Cloudflare Workers (Git-connected, project `neoderrp-site`) at `https://neoderrp-site.phillips-joshua0108.workers.dev`. Builds clean locally (4/4 pages, verified 2026-11-23). Old Cloudflare Pages instructions below are **SUPERSEDED (2026-11-26)**.

## Domain decision — RESOLVED to Option A: Cloudflare Workers (2026-11-26)

`astro.config.mjs` now has `site: 'https://neoderrp-site.phillips-joshua0108.workers.dev'` (the live Cloudflare Workers URL for project `neoderrp-site`). The never-created Cloudflare Pages URL is SUPERSEDED (2026-11-26).
- **A (current):** live on Cloudflare Workers at `https://neoderrp-site.phillips-joshua0108.workers.dev` — Git-connected (`x1manPsychopath/neoderrp-site`, production branch `main`, build command `npm run build`), free.
- **B (future custom domain):** Workers & Pages → `neoderrp-site` → Settings → Domains & Routes → add `neoderrp.eu.org` as a Custom Domain ONLY after EU.org approval, then update `site:` in `astro.config.mjs` to `https://neoderrp.eu.org`, commit, push.

## Step 1 — .gitignore (create in the project root, if missing)

```
node_modules/
dist/
.astro/
```

## Step 2 — push to GitHub (in `C:\Tools\neoderrp-site-astro`)

If `gh` CLI is installed:

```
gh repo create neoderrp-site --public --source=. --remote=origin --push
```

If `gh` is not installed, create the empty repo `neoderrp-site` under `x1manPsychopath` on github.com, then:

```
git init
git add .
git commit -m "NeoDerrp site v2 — polished Astro scaffold"
git branch -M main
git remote add origin https://github.com/x1manPsychopath/neoderrp-site.git
git push -u origin main
```

## Step 3 — Cloudflare Workers deployment (current; old Cloudflare Pages instructions SUPERSEDED 2026-11-26)

*Note: Old Cloudflare Pages instructions are **SUPERSEDED (2026-11-26)**. Deployment is Cloudflare Workers (Git-connected, project `neoderrp-site`, live at `https://neoderrp-site.phillips-joshua0108.workers.dev`).*

1. Live project: dash.cloudflare.com → Workers & Pages → `neoderrp-site` (Git-connected to `x1manPsychopath/neoderrp-site`, production branch `main`, build command: `npm run build`, output: `dist`).
2. Canonical URL is set in `astro.config.mjs` to `https://neoderrp-site.phillips-joshua0108.workers.dev`. Pushes to `main` redeploy automatically.
3. Custom domain (after EU.org approval): Workers & Pages → `neoderrp-site` → Settings → Domains & Routes → add `neoderrp.eu.org` as a Custom Domain ONLY after EU.org approval, then update `site:` to `https://neoderrp.eu.org`, commit, push.

## Verify gate (paste back)

- GitHub repo URL exists and shows the 4 pages + `public/wordmark-stacked.png` and `public/wordmark-header.png`.
- Cloudflare Workers deploy status (`neoderrp-site`): Success, and the live URL (`https://neoderrp-site.phillips-joshua0108.workers.dev`) loads the hero with the stacked wordmark in the header.
