import { defineConfig } from 'astro/config';

// Static output: deploys free to Cloudflare Pages or GitHub Pages.
// No CMS lock-in — content lives in src/content/ as Markdown in this repo.
export default defineConfig({
  site: 'https://neoderrp.example.com', // TODO: replace with the real domain / pages URL
  output: 'static',
});
