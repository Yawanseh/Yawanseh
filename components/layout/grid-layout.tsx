import PostsList from "@/components/layout/posts-list";
import { ExtendedPostCard } from "@/components/post-card";

const GridLayout: React.FC<{
  posts: ExtendedPostCard[];
}> = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-3 grid-col-1 gap-4">
      {posts.map((post, index) => {
        let cardStyle = "";

        if (index === 0) {
          cardStyle = "md:row-span-3 md:col-span-2";
        } else if (index === 1) {
          cardStyle = "md:row-span-2 md:col-span-1";
        }

        return (
          <PostsList
            key={post.id}
            post={{ ...post, cardStyle, isBanner: index === 0 }}
          />
        );
      })}
    </div>
  );
};

export default GridLayout;
