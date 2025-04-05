import { Post } from "@/types/post";
import { PostCard } from "@/components/post/post-card";

const posts: Post[] = [
  {
    id: "1",
    title: "My First Post",
    description: "This is my first post.",
    track: {
      album: "Album Name",
      artist: "Artist Name",
      duration: 180,
      genre: "Genre Name",
      id: "1",
      title: "Track Name",
      cover:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    posted_by: {
      id: "1",
      name: "John Doe",
      username: "@John_Doe",
      email: "john.doe@example.com",
      avatar:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "My Second Post",
    description: "This is my second post.",
    track: {
      album: "Album Name",
      artist: "Artist Name",
      duration: 180,
      genre: "Genre Name",
      id: "2",
      title: "Track Name",
      cover:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    posted_by: {
      id: "2",
      name: "Jane Doe",
      username: "@Jane_Doe",
      email: "jane.doe@example.com",
      avatar:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "My Third Post",
    description: "This is my third post.",
    track: {
      album: "Album Name",
      artist: "Artist Name",
      duration: 180,
      genre: "Genre Name",
      id: "3",
      title: "Track Name",
      cover:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    posted_by: {
      id: "3",
      name: "Alice Smith",
      username: "@Alice_Smith",
      email: "alice.smith@example.com",
      avatar:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    updatedAt: new Date(),
    createdAt: new Date(),
  },
];

export function PostList() {
  return (
    <div className="flex w-full gap-10  justify-center items-center flex-col">
      {posts.map((post) => (
        <div className="border-b-2 border-b-[#86cecb] py-10">
          <PostCard key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
}
