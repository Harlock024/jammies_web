import { Post } from "@/types/post";
import { PostCard } from "@/components/post/post-card";

const posts: Post[] = [
  {
    id: "1",
    content: "Description example",
    type: "post",
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
    content: "Track Content",
    type: "track",
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
      is_public: true,
      plays: 0,
      uploaded_at: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["tag1", "tag2"],
    comments: ["comment"],
    likes: 0,
  },
  {
    id: "3",

    type: "album",
    content: "post Content",
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
      is_public: true,
      release_date: new Date(),
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
