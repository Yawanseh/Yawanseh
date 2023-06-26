import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";

const baseUrl = "https://www.yawanseh.com";

export default async function sitemap(): Promise<
  Promise<Promise<MetadataRoute.Sitemap>>
> {
  const routesMap = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const postsPromise = getAllPosts().then((posts) =>
    posts.map((post) => ({
      url: `${baseUrl}/posts/${post.id}`,
      lastModified: post.updated_at,
    }))
  );

  const fetchedRoutes = (
    await Promise.all([postsPromise])
  ).flat();

  return [...routesMap, ...fetchedRoutes];
}
