import { defineCollection, z } from "astro:content";

export const ServiceCollection = defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      thumbnail: z.string(),
    })
});