import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    layout: z.string().optional(),
    draft: z.boolean().optional().default(false),
    bskyPostId: z.string().optional(),
    image: z.string().optional(),
  }),
})

const podcast = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/transcripts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    layout: z.string().optional(),
    permalink: z.string().optional(),
  }),
})

export const collections = { blog, podcast }