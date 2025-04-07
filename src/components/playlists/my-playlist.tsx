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
import { Playlist } from "@/types/playlist";
import { PlaylistCardL } from "./playlist-card";

// "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300"

const myPlaylists: Playlist[] = [
  {
    id: "1",
    name: "My Playlist",
    description: "My Playlist Description",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    updatedAt: new Date(),
    createdAt: new Date(),
    created_by: {
      username: "John Doe",
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      avatar:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    is_public: true,
  },
  {
    id: "2",
    name: "My Playlist",
    description: "My Playlist Description",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    updatedAt: new Date(),
    createdAt: new Date(),
    created_by: {
      username: "John Doe",
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      avatar:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    is_public: true,
  },
  {
    id: "3",
    name: "My Playlist",
    description: "My Playlist Description",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    updatedAt: new Date(),
    createdAt: new Date(),
    created_by: {
      username: "John Doe",
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      avatar:
        "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    },
    is_public: false,
  },
];

export function MyPlaylists() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Playlists</h2>
        <Button onClick={() => (window.location.href = "/playlist/create")}>
          Create New Playlist
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {myPlaylists.map((playlist) => (
          <PlaylistCardL playlist={playlist} />
        ))}
      </div>
    </div>
  );
}
