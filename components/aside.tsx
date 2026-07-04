import { getPostById } from "@/lib/api";
import RelativeTime from "./relative-time";

const Aside = async ({ id }: { id: string }): Promise<JSX.Element> => {
  const { title, description, publishedAt, publishedAtISO, readingTime, tags } =
    await getPostById(id);

  return (
    <div className="surface w-full p-7 lg:sticky lg:top-24">
      <span className="eyebrow">In this article</span>

      <h2 className="display mt-3 text-xl font-semibold leading-snug tracking-tight text-[var(--ink)]">
        {title}
      </h2>

      <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[var(--ink-faint)]">
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

      {description && (
        <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
          {description}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {tags?.map((tag: string) => (
          <span key={`${id}-${tag}`} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Aside;
