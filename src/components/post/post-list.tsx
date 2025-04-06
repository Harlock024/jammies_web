import { Post } from "@/types/post";
import { PostCard } from "@/components/post/post-card";

const posts: Post[] = [
  {
    id: "1",
    title: "Title",
    type: "post",
    description: "Description",
    posted_by: {
      id: "1",
      name: "Author",
      username: "author",
      email: "author@example.com",
      avatar:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["tag1", "tag2"],
    comments: ["comment"],
    likes: 0,
  },
  {
    id: "2",
    title: "Title",
    type: "track",
    description: "Description",
    posted_by: {
      id: "1",
      name: "Author",
      username: "author",
      email: "author@example.com",
      avatar:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    track: {
      id: "1",
      title: "Track Title",
      duration: 180,
      album: "Album Title",
      artist: "Artist Name",
      genre: "Genre Name",
      user_id: "1",
      cover_image:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["tag1", "tag2"],
    comments: ["comment"],
    likes: 0,
  },
  {
    id: "3",
    title: "Title",
    type: "album",
    description: "Description",
    posted_by: {
      id: "1",
      name: "Author",
      username: "author",
      email: "author@example.com",
      avatar:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    album: {
      id: "1",
      title: "Album Title",
      artist: "Artist Name",
      cover_image:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
      createdAt: new Date(),
      updatedAt: new Date(),
      description: "",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["tag1", "tag2"],
    comments: ["comment"],
    likes: 0,
  },
];
export function PostList() {
  return (
    <div className="flex w-full gap-10  justify-center items-center flex-col">
      {posts.map((post) => (
        <div className="py-5 ">
          <PostCard key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
}
