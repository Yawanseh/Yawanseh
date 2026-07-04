import { Post } from "@/lib/api";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import RelativeTime from "./relative-time";

export type ExtendedPostCard = {
  cardStyle?: string;
  isBanner?: boolean;
} & Post;

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Meta = ({
  publishedAt,
  publishedAtISO,
  readingTime,
}: {
  publishedAt?: string;
  publishedAtISO?: string;
  readingTime?: string;
}) => (
  <div className="flex items-center gap-2 text-xs font-medium text-[var(--ink-faint)]">
    {publishedAtISO ? (
      <RelativeTime iso={publishedAtISO} fallback={publishedAt} />
    ) : (
      <span>{publishedAt}</span>
    )}
    {readingTime && (
      <>
        <span className="h-1 w-1 rounded-full bg-[var(--line)]" />
        <span>{readingTime}</span>
      </>
    )}
  </div>
);

const Tags = ({ id, tags, max }: { id: string; tags?: string[]; max: number }) => (
  <div className="flex flex-wrap gap-2">
    {tags?.slice(0, max).map((tag) => (
      <span key={`${id}-${tag}`} className="chip">
        {tag}
      </span>
    ))}
  </div>
);

const PostCard: React.FC<ExtendedPostCard> = ({
  id,
  title,
  description,
  cover,
  publishedAt,
  publishedAtISO,
  readingTime,
  tags,
  cardStyle,
  isBanner,
}) => {
  const base =
    "group surface relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]";

  // Featured hero (index 0) — a full-width horizontal lead block.
  if (isBanner) {
    return (
      <Link
        href={`/posts/${id}`}
        className={`${base} md:flex-row md:items-stretch ${cardStyle}`}
      >
        <div className="flex flex-1 flex-col justify-center p-8 sm:p-10 md:p-12">
          <div className="flex items-center gap-3">
            <span className="eyebrow">Featured essay</span>
            <span className="h-px w-6 bg-[var(--line)]" />
            <Meta
            publishedAt={publishedAt}
            publishedAtISO={publishedAtISO}
            readingTime={readingTime}
          />
          </div>
          <h2 className="display mt-5 max-w-xl text-3xl leading-[1.06] tracking-tight text-[var(--ink)] sm:text-4xl md:text-[2.6rem]">
            {title}
          </h2>
          {description && (
            <p className="mt-5 max-w-xl leading-relaxed text-[var(--ink-soft)]">
              {description}
            </p>
          )}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Tags id={id} tags={tags} max={3} />
            <span className="link-underline ml-1 text-sm text-[var(--ink)]">
              Read essay
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>

        {cover ? (
          <div className="relative hidden overflow-hidden md:block md:w-[42%]">
            <Image
              src={cover}
              alt={title}
              width={900}
              height={1100}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </div>
        ) : (
          <div className="relative hidden items-center justify-center overflow-hidden border-l border-[var(--line-soft)] bg-[var(--surface-2)] md:flex md:w-[38%]">
            <span
              aria-hidden="true"
              className="display pointer-events-none absolute -right-6 bottom-0 select-none text-[12rem] leading-none text-[var(--line-soft)]"
            >
              01
            </span>
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--invert-bg)] text-[var(--invert-ink)] transition-transform duration-300 group-hover:translate-x-1">
              <Arrow className="h-5 w-5" />
            </span>
          </div>
        )}
      </Link>
    );
  }

  return (
    <Link href={`/posts/${id}`} className={`${base} ${cardStyle}`}>
      {cover && (
        <figure className="relative overflow-hidden">
          <Image
            src={cover}
            alt={title}
            width={isBanner ? 1200 : 640}
            height={isBanner ? 630 : 360}
            className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] ${
              isBanner ? "aspect-[16/10]" : "aspect-[16/9]"
            }`}
          />
        </figure>
      )}

      <div className="flex flex-1 flex-col p-6">
        <Meta
            publishedAt={publishedAt}
            publishedAtISO={publishedAtISO}
            readingTime={readingTime}
          />

        <h2
          className={`display mt-3 tracking-tight text-[var(--ink)] ${
            isBanner ? "text-2xl sm:text-[1.75rem]" : "text-xl"
          }`}
        >
          {title}
        </h2>

        {isBanner && description && (
          <p className="mt-3 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
            {description}
          </p>
        )}

        <div className="mt-auto pt-5">
          <Tags id={id} tags={tags} max={isBanner ? 4 : 2} />
        </div>

        <span className="link-underline mt-5 text-sm text-[var(--ink)]">
          Read article
          <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default PostCard;
