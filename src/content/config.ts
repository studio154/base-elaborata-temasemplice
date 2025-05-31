import { defineCollection, z } from "astro:content";
const team = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      bio: z.string().optional(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      socials: z
        .object({
          twitter: z.string().optional(),
          website: z.string().optional(),
          linkedin: z.string().optional(),
          email: z.string().optional(),
        })
        .optional(),
    }),
});
const store = defineCollection({
  schema: ({ image }) =>
    z.object({
      price: z.string(),
      title: z.string(),
      checkout: z.string(),
      license: z.string(),
      highlights: z.array(z.string()),
      specifications: z
        .array(
          z.object({
            name: z.string(),
            value: z.string(),
          })
        )
        .optional(),
      description: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      images: z.array(
        z.object({
          url: image(),
          alt: z.string(),
        })
      ),
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),
    }),
});

const gallery = defineCollection({
  schema: ({ image }) =>
    z.object({
      category: z.string(),
      bgColor: z.string().optional(),
      textColor: z.string().optional(),
      title: z.string(),
      description: z.string(),
      thumbnail: z.object({
        url: image(),
        alt: z.string(),
      }),
      thumbnailClass: z.string().optional(),
      imageGrid: z.string().optional(),
      images: z
        .array(
          z.object({
            url: image(),
            alt: z.string(),
            class: z.string().optional(), // Add this line
          })
        )
        .optional(),
    }),
});


const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      team: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
export const collections = {
  team: team,
  store: store,
  gallery: gallery,
  infopages: infopages,
  posts: postsCollection,
};
