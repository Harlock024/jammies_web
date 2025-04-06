import { Playlist } from "@/types/playlist";
import { PlaylistCard } from "../playlists/playlist-card";

const playlists: Playlist[] = [
  {
    id: "1",
    name: "My Playlist",
    description: "My playlist description",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date(),
    created_by: {
      username: "user_username",
      id: "user_id",
      email: "user@example.com",
      name: "User Name",
      avatar: "https://example.com/avatar.jpg",
    },
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Another Playlist",
    description: "Another playlist description",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date(),
    created_by: {
      username: "another_username",
      id: "another_id",
      email: "another@example.com",
      name: "Another Name",
      avatar: "https://example.com/avatar.jpg",
    },
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Yet Another Playlist",
    description: "Yet another playlist description",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    createdAt: new Date(),
    created_by: {
      username: "yet_another_username",
      id: "yet_another_id",
      email: "yet_another@example.com",
      name: "Yet Another Name",
      avatar: "https://example.com/avatar.jpg",
    },
    updatedAt: new Date(),
  },
];

export function ProfilePlaylistList() {
  return (
    <div className="flex flex-col w-[92dvh]">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
}
