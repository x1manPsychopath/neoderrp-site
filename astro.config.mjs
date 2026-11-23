import { defineConfig } from 'astro/config';

// Static output: deploys free to Cloudflare Pages or GitHub Pages.
// No CMS lock-in — content lives in src/content/ as Markdown in this repo.
export default defineConfig({
  // Live URL once Cloudflare Pages connects this repo: the free pages.dev
  // subdomain. If Joshua picks a custom domain later, this one line changes.
  site: 'https://neoderrp-site.pages.dev',
  output: 'static',
});
