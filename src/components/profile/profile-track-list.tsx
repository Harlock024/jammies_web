import { TrackCard } from "../track/track-card";

import { Track } from "../../types/track";

const tracks: Track[] = [
  {
    id: "1",
    title: "Track 1",
    album: "Album 1",
    artist: "Artist 1",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    duration: 180,
    genre: "Rock",
    user_id: "1",
    is_public: true,
    plays: 123456789,
    uploaded_at: new Date("2023-01-01T00:00:00Z"),
  },
  {
    id: "2",
    title: "Track 2",
    album: "Album 2",
    artist: "Artist 2",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    duration: 240,
    genre: "Pop",
    user_id: "2",
    is_public: false,
    plays: 987654321,
    uploaded_at: new Date("2023-01-01T00:00:00Z"),
  },
  {
    id: "3",
    title: "Track 3",
    album: "Album 3",
    artist: "Artist 3",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    duration: 180,
    genre: "Rock",
    user_id: "3",
    is_public: true,
    plays: 456789123,
    uploaded_at: new Date("2023-01-01T00:00:00Z"),
  },
  {
    id: "4",
    title: "Track 4",
    album: "Album 4",
    artist: "Artist 4",
    cover_image:
      "https://kzmkmvl1upuwcpiajfpp.lite.vusercontent.net/placeholder.svg?height=300&width=300",
    duration: 210,
    genre: "Hip-Hop",
    user_id: "4",
    is_public: true,
    plays: 123456789,
    uploaded_at: new Date("2023-01-01T00:00:00Z"),
  },
];

export function ProfileTrackList() {
  return (
    <div className="flex flex-col w-screen justify-center items-center">
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </div>
  );
}
