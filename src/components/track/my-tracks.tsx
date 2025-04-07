import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Play, MoreHorizontal, Music, Clock, Edit, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Track } from "@/types/track";

const myTracks: Track[] = [
  {
    id: "1",
    album: "Summer Vibes",
    artist: "Jammies",
    duration: 3.45,
    cover_image: "https://example.com/cover.jpg",
    genre: "Pop",
    title: "Summer Vibes",
    is_public: true,
    user_id: "1",
    uploaded_at: new Date(),
    plays: 123456789,
  },
];

export function MyTracks() {
  const [tracks, setTracks] = useState(myTracks);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  const handleDelete = (id: string) => {
    setTracks(tracks.filter((track) => track.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Tracks</h2>
        {/* <Button onClick={() => (window.location.href = "/upload")}>
          Upload New Track
        </Button> */}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Uploaded</TableHead>
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
            <TableRow key={track.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
                    <Music className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="font-medium">{track.title}</div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">
                {formatDate(track.uploaded_at.toLocaleDateString())}
              </TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">
                {track.plays.toLocaleString()}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant={track.is_public ? "default" : "outline"}>
                  {track.is_public ? "Public" : "Private"}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-muted-foreground">
                {track.duration}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Play className="h-4 w-4 mr-2" />
                      Play
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>Create Post</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => handleDelete(track.id)}
                    >
                      <Trash className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
