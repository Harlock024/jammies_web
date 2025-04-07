import { Card, CardContent } from "@/components/ui/card";
import { Play, Edit, MoreHorizontal, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Album } from "@/types/album";
import { AlbumsCardP } from "./albums-card";

const myAlbums: Album[] = [
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

export function MyAlbums() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Albums</h2>
        <Button onClick={() => (window.location.href = "/upload")}>
          Create New Album
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {myAlbums.map((album) => (
          <AlbumsCardP album={album} />
        ))}
      </div>
    </div>
  );
}
