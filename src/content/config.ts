import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.string().optional(),
      title: z.string(),
      meta_title: z.string().optional(),
      description: z.string().optional(),
      date: z.date().optional(),
      image: image().optional(),
      categories: z.array(z.string()).default(["others"]),
      tags: z.array(z.string()).default(["others"]),
      draft: z.boolean().optional(),
    }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.string().optional(),
      title: z.string(),
      meta_title: z.string().optional(),
      description: z.string().optional(),
      image: image().optional(),
      layout: z.string().optional(),
      draft: z.boolean().optional(),
    }),
});

// About collection schema
const aboutCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.string().optional(),
      title: z.string(),
      meta_title: z.string().optional(),
      description: z.string().optional(),
      image: image().optional(),
      layout: z.string().optional(),
      draft: z.boolean().optional(),
    }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
  about: aboutCollection,
};
