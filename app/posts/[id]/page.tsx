import { getAllPosts, getPostById } from "@/lib/api";
import Image from "next-image-export-optimizer";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { title, description } = await getPostById(id);
  return {
    title,
    description,
  };
}

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { html, title, publishedAt, tags, updatedAt, cover } =
    await getPostById(id);

  return (
    <article className="bg-base-300 border border-base-content/30 max-w-[100%]">
      {cover && (
        <Image
          src={cover}
          alt="blog image"
          width={1200}
          height={300}
          priority
          className="w-full object-cover"
        />
      )}
      <div className="p-12">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <h4 className="my-3 text-sm text-base-content/60">{`Posted on ${publishedAt} • Updated on ${updatedAt}`}</h4>
        <div className="mt-4 mb-10">
          {tags?.map((tag: string) => (
            <div key={`${id}-${tag}`} className="badge badge-outline mr-2">
              {tag}
            </div>
          ))}
        </div>
        <div
          className="min-h-16 break-all prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </article>
  );
}

// This function can statically allow nextjs to find all the posts that you have made, and statically generate them
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post: any) => ({
    id: post.id,
  }));
}
