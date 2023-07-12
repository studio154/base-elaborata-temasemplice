import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    excerpt: z.string(),
    publishedAt: z.date(),

    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),

    author: z.string(),
    tags: z.array(z.string()),
  }),
});

const updatesCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    publishedAt: z.date(),
    category: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

const integrationsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    excerpt: z.string(),
    publishedAt: z.date(),
    category: z.string(),
    companyURL: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

const knowledgeBaseCategoriesCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    excerpt: z.string(),
    publishedAt: z.date(),
    icon: z.string(),
  }),
});

export const collections = {
  integrations: integrationsCollection,
  posts: postsCollection,
  updates: updatesCollection,

  knowledgeBaseCategories: knowledgeBaseCategoriesCollection,
};
