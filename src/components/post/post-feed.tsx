import { Post } from "@/types/post";
import { PostCard } from "@/components/post/post-card";
import { usePostStore } from "@/stores/usePostStore";
import { useEffect, useRef, useState } from "react";
import { PostForm } from "./post-form";
import { Button } from "../ui/button";

export function PostFeed() {
  const { posts, fetchPosts, isLoading, hasMore } = usePostStore();
  const [isTogglePostModal, setTogglePostModal] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        const lastPost = posts[posts.length - 1];
        fetchPosts(lastPost?.createdAt.toISOString());
      }
    });
    if (loaderRef.current) observer.disconnect();

    return () => {
      if (loaderRef.current) {
        observer.disconnect();
      }
    };
  }, [loaderRef.current, posts, hasMore]);

  const closeModal = () => {
    setTogglePostModal(false);
  };
  return (
    <div className="flex w-full gap-10  justify-center items-center flex-col">
      <div className="flex p-2  w-full justify-end">
        <Button
          variant={"outline"}
          className=""
          onClick={() => setTogglePostModal(true)}
        >
          Post
        </Button>
      </div>
      {isTogglePostModal && <PostForm closeModal={closeModal} />}
      {posts.map((post) => (
        <div className="py-5 ">
          <PostCard key={post.id} post={post} />
        </div>
      ))}
      <div ref={loaderRef} className="h-10 flex justify-center items-center">
        {isLoading && <p>Cargando más posts...</p>}
      </div>
    </div>
  );
}
