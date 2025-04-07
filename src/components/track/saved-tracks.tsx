import { Track } from "@/types/track";
import { TrackCard, TrackCardL } from "./track-card";
import {
  TableCell,
  TableBody,
  Table,
  TableHeader,
  TableRow,
  TableHead,
} from "../ui/table";
import { Clock } from "lucide-react";

const tracks: Track[] = [
  {
    id: "1",
    title: "Track Title",
    artist: "Artist Name",
    duration: 180,
    album: "Album Title",
    cover_image: "https://example.com/cover.jpg",
    genre: "Pop",
    is_public: true,
    user_id: "user123",
    uploaded_at: new Date(),
    plays: 20,
  },
];

export function SavedTracks() {
  return (
    <div>
      <h2 className="text-xl font-bold">Saved Tracks</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">uploaded</TableHead>
            <TableHead className="hidden md:table-cell">Plays</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="text-right">
              <Clock className="h-4 w-4 ml-auto" />
            </TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tracks.map((track, index) => (
            <TrackCardL key={track.id} track={track} index={index} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
