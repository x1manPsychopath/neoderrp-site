import { defineCollection, z } from 'astro:content';

// These three collections mirror the Webflow CMS collections in the
// Build Kit Part 2, field-for-field. In Webflow you'd rent them;
// here you own them as typed Markdown frontmatter in git.

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    platform: z.enum(['Twitch', 'YouTube', 'Shorts / TikTok']),
    url: z.string().url(),
    thumbnail: z.string().optional(),
    gameOrProject: z.string().optional(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    status: z.enum(['Live', 'In progress', 'Parked']),
    repoUrl: z.string().url().optional(),
    screenshot: z.string().optional(),
    techTags: z.array(z.string()).default([]),
  }),
});

const streamWeeks = defineCollection({
  type: 'content',
  schema: z.object({
    weekOf: z.coerce.date(),
    neoNights: z.array(z.string()),
    amaNights: z.array(z.string()),
    specialEvents: z.array(z.string()).default([]),
    notes: z.string().optional(),
  }),
});

export const collections = { videos, projects, streamWeeks };
