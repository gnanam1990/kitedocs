import { defineCollection, z } from "astro:content";

const docSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number().default(99),
  last_updated: z.string().optional(),
  authors: z.array(z.string()).default([]),
  preview: z.boolean().default(false),
});

export const collections = {
  tutorials: defineCollection({ type: "content", schema: docSchema }),
  reference: defineCollection({ type: "content", schema: docSchema }),
  guides: defineCollection({ type: "content", schema: docSchema }),
};
