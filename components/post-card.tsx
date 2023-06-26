import { Post } from "@/lib/api";
import Image from "next-image-export-optimizer";
import Link from "next/link";

export type ExtendedPostCard = { cardStyle?: string, isBanner?: boolean } & Post;

const PostCard: React.FC<ExtendedPostCard> = ({
  id,
  title,
  description,
  cover,
  publishedAt,
  tags,
  // updatedAt,
  cardStyle,
  isBanner,
}) => {
  return (
    <Link
      href={`/posts/${id}`}
      className={`card bg-base-100 hover:bg-gradient-to-tr hover:from-base-300 hover:to-base-300 transition border border-base-content/30 w-full ${cardStyle}`}
    >
      {cover && (
        <figure>
          <Image src={cover} alt="blog image" width="1200" height="600" />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-base-content/50">{publishedAt}</p>
        {isBanner && <p className="text-base-content/70">{description}</p>}
        <div>
          {tags?.map((tag: string) => (
            <div key={`${id}-${tag}`} className="badge badge-outline mr-2">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
