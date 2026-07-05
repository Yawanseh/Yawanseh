import { siteUrl } from "@/constants";
import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const home = {
    url: `${siteUrl}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  };

  const postRoutes = posts.map((post) => ({
    url: `${siteUrl}/posts/${post.id}`,
    lastModified: post.updated_at ?? new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [home, ...postRoutes];
}
