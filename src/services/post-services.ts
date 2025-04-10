import { API_URL } from "./api_url";
import { Post } from "@/types/post";

export async function fetchPosts(cursor?: string): Promise<Post[]> {
  const url = new URL(`${API_URL}/post`);
  url.searchParams.set("limit", "10");
  if (cursor) url.searchParams.set("cursor", cursor);
  const res = await fetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Error fetching posts");
  }

  return res.json();
}
