import { siteUrl } from "@/constants";
import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<
  Promise<Promise<MetadataRoute.Sitemap>>
> {
  const routesMap = [""].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const postsPromise = getAllPosts().then((posts) =>
    posts.map((post) => ({
      url: `${siteUrl}/posts/${post.id}`,
      lastModified: post.updated_at,
    }))
  );

  const fetchedRoutes = (await Promise.all([postsPromise])).flat();

  return [...routesMap, ...fetchedRoutes];
}
