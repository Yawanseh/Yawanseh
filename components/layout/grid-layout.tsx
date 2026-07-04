import PostsList from "@/components/layout/posts-list";
import { ExtendedPostCard } from "@/components/post-card";

// Bento rhythm on a 6-col desktop grid. Index 0 is a full-width featured hero.
// The two after it are halves; everything beyond flows as thirds. The pattern
// repeats so the layout stays varied and balanced as more posts are published.
function tileClass(index: number): string {
  if (index === 0) return "md:col-span-6";
  if (index === 1 || index === 2) return "md:col-span-3";
  return "md:col-span-2";
}

const GridLayout: React.FC<{
  posts: ExtendedPostCard[];
}> = ({ posts }) => {
  return (
    <section>
      <div className="mb-7 flex items-end justify-between">
        <div>
          <span className="eyebrow">Writing</span>
          <h2 className="display mt-2 text-2xl tracking-tight text-[var(--ink)] sm:text-3xl">
            Latest posts
          </h2>
        </div>
        <span className="hidden text-sm text-[var(--ink-faint)] sm:block">
          {posts.length} article{posts.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="grid auto-rows-[1fr] grid-cols-1 gap-4 md:grid-cols-6">
        {posts.map((post, index) => (
          <PostsList
            key={post.id}
            post={{
              ...post,
              cardStyle: tileClass(index),
              isBanner: index === 0,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default GridLayout;
