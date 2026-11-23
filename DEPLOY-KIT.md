# Deploy kit — NeoDerrp Astro site (prepared, not yet run)

**Status:** v2 polished scaffold runs locally at `http://localhost:4321` and builds clean (4/4 pages, verified 2026-11-23). This kit is the next step only — push to GitHub, deploy free on Cloudflare Pages.

## Open decision (his, before deploy)

`astro.config.mjs` still has `site: 'https://neoderrp.example.com'`. Pick one:
- **A:** use the Cloudflare Pages subdomain (`https://neoderrp-site.pages.dev` style) — no domain needed, free.
- **B:** a domain he already owns / wants to buy — name it, then set `site:` to it.

Do not deploy on the placeholder URL.

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

## Step 3 — Cloudflare Pages (free)

1. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git.
2. Pick `x1manPsychopath/neoderrp-site`.
3. Framework preset: **Astro**. Build command: `npm run build`. Build output directory: `dist`.
4. Deploy. First deploy gives the `*.pages.dev` URL; add a custom domain later if decision B.
5. Set `site:` in `astro.config.mjs` to the real URL, commit, push — Pages redeploys automatically.

## Verify gate (paste back)

- GitHub repo URL exists and shows the 4 pages + `public/owl-badge.png`.
- Cloudflare Pages deploy status: Success, and the live URL loads the hero with the owl badge in the header.
