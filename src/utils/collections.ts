import { getCollection } from "astro:content";
import { careers } from "@/data/careers";
import { knowledgeBaseArticles } from "@/data/knowledgeBaseArticles";
import { collections } from "@/content/config";

const dataCollections = {
  careers,
  knowledgeBaseArticles,
};

const collectionSlugMap = {
  posts: "blog",
  tags: "blog/tag",
  articles: "help",
  integrations: "integrations",
  updates: "changelog",
  knowledgeBaseArticles: "help",
  knowledgeBaseCategories: "help",
};

const getCollectionSlugByName = (name: string): string => {
  return collectionSlugMap[name] || "";
};

export type CollectionKeys = keyof typeof collections;
export type DataCollectionName = keyof typeof dataCollections;

// typescript type - Array with objects that have a slug and other keys
export type DataCollection = {
  slug: string;
  [key: string]: any;
};

export const getDataCollection = (
  collectionName: DataCollectionName
): DataCollection[] => {
  let items = dataCollections[collectionName];

  if (!items) {
    return [];
  }

  if (!Array.isArray(items)) {
    items = Object.values(items);
  }

  items = items.map((item) => {
    const replaceFields = ["name", "html", "excerpt"];

    replaceFields.forEach((field) => {
      if (!item[field]) {
        return;
      }

      item[field] = item[field].replaceAll("HelpHQ", "Semplice");
    });

    item.collectionSlug = getCollectionSlugByName(collectionName);
    return item;
  });

  return items;
};

// keyof typeof collectionSlugMap

export const getItemsFromCollection = async (
  collectionName: CollectionKeys
) => {
  if (!collectionName) {
    return [];
  }

  let items = [];

  // getCollection uses never instead of CollectionKeys value
  const collectionItems: any[] = await getCollection(collectionName);

  for (const item of collectionItems) {
    const { Content } = await item.render();
    items.push({
      ...item.data,
      render: item.render,
      slug: item.slug,
      collectionSlug: getCollectionSlugByName(collectionName),
      Content,
    });
  }

  if (collectionName === "knowledgeBaseCategories") {
    items = items.sort((a, b) => (a.publishedAt > b.publishedAt ? 1 : -1));
  }

  if (collectionName === "posts") {
    items = items.map((item) => {
      return {
        ...item,
        tagsItems: item.tags?.map((tag) => ({
          name: tag,
          slug: tag,
          collectionSlug: getCollectionSlugByName("tags"),
        })),
      };
    });
  }

  return items;
};
