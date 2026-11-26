import { defineConfig } from 'astro/config';

// Static output: deploys free to Cloudflare Workers.
// No CMS lock-in — content lives in src/content/ as Markdown in this repo.
export default defineConfig({
  // Canonical is the Workers address; the future custom-domain switch (after
  // EU.org approval) changes this one line to https://neoderrp.eu.org.
  site: 'https://neoderrp-site.phillips-joshua0108.workers.dev',
  output: 'static',
});
