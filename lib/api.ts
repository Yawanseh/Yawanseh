import { compareAsc, format } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { join } from "path";
import { any, array, boolean, date, object, string, z } from "zod";
import { timeAgo, toISO } from "./time";

marked.setOptions({ async: false, gfm: true, breaks: false });

// Zod schema for post data
export const PostSchema = object({
  published_at: any(),
  updated_at: date().optional(),
  cover: string().optional(),
  description: string().optional(),
  html: string(),
  id: string(),
  published: boolean().optional().default(false),
  publishedAt: string().optional(),
  tags: array(string()),
  title: string(),
  updatedAt: string().optional(),
  readingTime: string().optional(),
  publishedAtISO: string().optional(),
});

export type Post = z.infer<typeof PostSchema>;

function formatDate(date: Date): string {
  if (date) {
    return format(date, "MMM dd");
  }

  return "";
}

export async function getPostById(postId: string): Promise<Post> {
  const postIdWithoutExtension = postId.replace(/\.md$/, "");
  const fullPostPath = join("_posts", `${postIdWithoutExtension}.md`);
  const fileContents = await fs.promises.readFile(fullPostPath, "utf8");
  const stats = await fs.promises.stat(fullPostPath);
  const lastEditDate = stats.mtime;

  const { data, content } = matter(fileContents);

  const htmlContent = marked.parse(content) as string;

  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));

  const postData = {
    ...data,
    published_at: data.published_at,
    updated_at: lastEditDate,
    cover: data.cover,
    description: data.description,
    html: htmlContent,
    id: postIdWithoutExtension,
    published: data.published,
    publishedAt: timeAgo(data.published_at),
    tags: data.tags?.split(",") || [],
    title: data.title,
    updatedAt: formatDate(lastEditDate),
    readingTime: `${minutes} min read`,
    publishedAtISO: toISO(data.published_at),
  };

  // Validate the data with Zod
  PostSchema.parse(postData);

  return postData;
}

export async function getAllPosts(): Promise<Array<Post>> {
  const postFilenames = fs.readdirSync("_posts");
  const posts = await Promise.all(postFilenames.map((id) => getPostById(id)));

  return posts
    .filter((post) => post.published)
    .sort((post1, post2) =>
      compareAsc(post2.published_at, post1.published_at)
    );
}
