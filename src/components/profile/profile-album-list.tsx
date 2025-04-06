import { Album } from "@/types/album";
import { AlbumsCard } from "../albums/albums-card";

const albums: Album[] = [
  {
    id: "1",
    title: "Midnight Echoes",
    description: "A journey through ambient soundscapes",
    artist: "Luna Wave",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15"),
  },
  {
    id: "2",
    title: "Electric Dreams",
    description: "Synthwave fusion with modern beats",
    artist: "Neon Pulse",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date("2023-02-20"),
    updatedAt: new Date("2023-02-20"),
  },
  {
    id: "3",
    title: "Desert Wind",
    description: "Folk inspired acoustic melodies",
    artist: "Canyon Echo",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date("2023-03-10"),
    updatedAt: new Date("2023-03-10"),
  },
  {
    id: "4",
    title: "Urban Symphony",
    description: "Urban beats with a touch of soul",
    artist: "City Rhythm",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date("2023-04-05"),
    updatedAt: new Date("2023-04-05"),
  },
  {
    id: "5",
    title: "Space Odyssey",
    description: "Cosmic exploration through electronic music",
    artist: "Starlight Orchestra",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date("2023-05-15"),
    updatedAt: new Date("2023-05-15"),
  },
  {
    id: "6",
    title: "Jazz Odyssey",
    description: "Jazz fusion with modern beats",
    artist: "Blue Note",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date("2023-06-20"),
    updatedAt: new Date("2023-06-20"),
  },
];

export function ProfileAlbumList() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {albums.map((album) => (
          <AlbumsCard album={album} />
        ))}
      </div>
    </div>
  );
}
