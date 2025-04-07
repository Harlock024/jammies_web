import { Playlist } from "@/types/playlist";
import { PlaylistCard } from "./playlist-card";
import { Button } from "../ui/button";

const savedPlaylists: Playlist[] = [
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

export function SavedPlaylist() {
  return (
    <div className="w-[92dvh]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Playlists saved</h2>
        <Button onClick={() => (window.location.href = "/playlist/create")}>
          Create New Playlist
        </Button>
      </div>
      <div className="grid-cols-2 md:grid-cols-3 gap-4">
        {savedPlaylists.map((playlist) => (
          <PlaylistCard playlist={playlist} />
        ))}
      </div>
    </div>
  );
}
