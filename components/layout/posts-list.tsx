import PostCard, { ExtendedPostCard } from "../post-card";

const PostsList: React.FC<{
  post: ExtendedPostCard;
}> = ({ post }) => {
  return <PostCard {...post} />;
};

export default PostsList;
