import { Album } from "@/types/album";
import { AlbumsCard } from "./albums-card";

const savedAlbums: Album[] = [
  {
    id: "1",
    title: "Album Title",
    artist: "John Doe",
    description: "This is a description of the album.",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
    is_public: true,
    release_date: new Date("2023-01-01"),
  },
  {
    id: "2",
    title: "Album Title",
    artist: "John Doe",
    description: "This is a description of the album.",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
    is_public: true,
    release_date: new Date("2023-01-01"),
  },
  {
    id: "3",
    title: "Album Title",
    artist: "John Doe",
    description: "This is a description of the album.",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
    is_public: false,
    release_date: new Date("2023-01-01"),
  },
];

export function SavedAlbums() {
  return (
    <div>
      <h1>Saved Albums</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {savedAlbums.map((album) => (
          <AlbumsCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}
