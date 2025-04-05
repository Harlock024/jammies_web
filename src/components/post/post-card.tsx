import { Post } from "@/types/post";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col">
      <div className="card-header flex justify-between">
        <div className="flex items-center">
          <img
            src={post.posted_by.avatar}
            alt={post.posted_by.username}
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <h2 className="text-lg font-bold">{post.posted_by.name}</h2>
            <p className="text-sm text-gray-500">{post.posted_by.username}</p>
          </div>
        </div>
        <div>
          <button className="text-sm text-gray-500">...</button>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">{post.title}</p>
        <p className="text-sm text-gray-500">
          {post.createdAt.toLocaleString()}
        </p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">{post.description}</p>
      </div>
      <div>
        <img
          src={post.track.cover}
          alt={post.title}
          className=" size-[350px] object-cover rounded-lg"
        />
      </div>
      <footer>
        <div className="flex gap-5 py-2">
          <button className="text-sm text-gray-500">
            <Heart />
          </button>
          <button className="text-sm text-gray-500">
            <MessageCircle />
          </button>
          <button className="text-sm text-gray-500">
            <Repeat2 />
          </button>
        </div>
      </footer>
    </div>
  );
}
