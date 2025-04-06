import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import { Post } from "@/types/post";
import { useState } from "react";

const PostHeader = ({ postedBy }: { postedBy: Post["posted_by"] }) => (
  <div className="flex items-center">
    <img
      src={postedBy.avatar}
      alt={`${postedBy.username}'s avatar`}
      width={40}
      height={40}
      className="rounded-full mr-2"
    />
    <div>
      <h2 className="text-lg font-bold">{postedBy.name}</h2>
      <p className="text-sm text-gray-500">@{postedBy.username}</p>
    </div>
  </div>
);

const PostFooter = ({
  onLike,
  onComment,
  onRepost,
  isLiked,
}: {
  onLike: () => void;
  onComment: () => void;
  onRepost: () => void;
  isLiked: boolean;
}) => (
  <footer className="flex gap-5 py-2">
    <button
      onClick={onLike}
      aria-label="Like"
      className={`text-sm ${isLiked ? "text-red-500" : "text-gray-500"}`}
    >
      <Heart fill={isLiked ? "red" : "none"} />
    </button>
    <button
      onClick={onComment}
      aria-label="Comment"
      className="text-sm text-gray-500"
    >
      <MessageCircle />
    </button>
    <button
      onClick={onRepost}
      aria-label="Repost"
      className="text-sm text-gray-500"
    >
      <Repeat2 />
    </button>
  </footer>
);

export function PostCard({ post }: { post: Post }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const handleComment = () => {
    console.log("Comentar en el post");
  };

  const handleRepost = () => {
    console.log("Repostear el post");
  };

  return (
    <article className="flex flex-col border-b border-gray-200 w-[350px] pb-4 mb-4">
      <header className="flex justify-between items-center">
        <PostHeader postedBy={post.posted_by} />
        <button className="text-sm text-gray-500">...</button>
      </header>

      <div className="mt-2">
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p className="text-sm text-gray-500">
          {post.createdAt.toLocaleString()}
        </p>
        <p className="text-sm  text-gray-700 mt-1">{post.description}</p>
      </div>

      {/* Condicional para verificar el tipo de post */}
      {post.type === "track" && post.track?.cover_image && (
        <img
          src={post.track.cover_image}
          alt={post.track.title}
          width={350}
          height={350}
          className="mt-2 rounded-lg object-cover"
        />
      )}

      {post.type === "album" && post.album?.cover_image && (
        <img
          src={post.album.cover_image}
          alt={post.album.title}
          width={350}
          height={350}
          className="mt-2 rounded-lg object-cover"
        />
      )}

      <PostFooter
        onLike={handleLike}
        onComment={handleComment}
        onRepost={handleRepost}
        isLiked={isLiked}
      />
    </article>
  );
}
