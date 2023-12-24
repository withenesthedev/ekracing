import { defineCollection, z } from "astro:content";

export const ServiceCollection = defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      thumbnail: z.string(),
      content: z.string(),
      meta: z.object({
        description: z.string(),
      })
    })
});