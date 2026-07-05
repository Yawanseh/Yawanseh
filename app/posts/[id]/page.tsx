import RelativeTime from "@/components/relative-time";
import { getAllPosts, getPostById } from "@/lib/api";
import Image from "next-image-export-optimizer";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { title, description, cover } = await getPostById(id);
  return {
    title,
    description,
    alternates: {
      canonical: `/posts/${id}`,
    },
    openGraph: {
      images: cover,
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { html, title, publishedAt, publishedAtISO, tags, readingTime, cover } =
    await getPostById(id);

  return (
    <article className="surface overflow-hidden">
      {cover && (
        <figure className="relative">
          <Image
            src={cover}
            alt={title}
            width={1200}
            height={480}
            priority
            className="aspect-[16/7] w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
          />
        </figure>
      )}

      <div className="px-6 py-10 sm:px-10 md:px-14 md:py-14">
        <Link
          href="/"
          className="link-underline mb-8 text-sm text-[var(--ink-soft)]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to all posts
        </Link>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--ink-faint)]">
          <span>
            Posted{" "}
            {publishedAtISO ? (
              <RelativeTime iso={publishedAtISO} fallback={publishedAt} />
            ) : (
              publishedAt
            )}
          </span>
          {readingTime && (
            <>
              <span className="h-1 w-1 rounded-full bg-[var(--line)]" />
              <span>{readingTime}</span>
            </>
          )}
        </div>

        <h1 className="display mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--ink)] sm:text-5xl">
          {title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags?.map((tag: string) => (
            <span key={`${id}-${tag}`} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <hr className="my-10 border-[var(--line)]" />

        <div
          className="prose prose-lg min-h-16 break-words"
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
