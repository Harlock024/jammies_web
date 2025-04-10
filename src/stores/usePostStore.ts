import { create } from "zustand";

import { Post } from "@/types/post";
import { fetchPosts } from "@/services/post-services";

type PostState = {
  posts: Post[];
  isLoading: boolean;
  hasMore: boolean;
  fetchPosts: (cursor?: string) => Promise<void>;
};

export const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  isLoading: false,
  hasMore: true,
  fetchPosts: async (cursor) => {
    if (get().isLoading || !get().hasMore) return;
    set({ isLoading: true });
    const posts = await fetchPosts(cursor);
    console.log(posts);
    set((state) => ({
      ...state,
      posts: [...state.posts, ...posts],
      isLoading: false,
      hasMore: posts.length === 10,
    }));
  },
}));
