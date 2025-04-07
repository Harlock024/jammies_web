import { Track } from "@/types/track";
import { Card, CardHeader } from "../ui/card";
import {
  CirclePlus,
  Heart,
  Play,
  Pause,
  Music,
  MoreHorizontal,
  Edit,
  Trash,
} from "lucide-react";
import { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

function TrackCover({ track }: { track: Track }) {
  return (
    <div className="">
      <img className="w-10 h-10" src={track.cover_image} alt={track.title} />
    </div>
  );
}

export function TrackCard({ track }: { track: Track }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Card className="flex flex-row  w-full   hover:bg-gray-100 justify-between items-center shadow-none border-0 rounded-sm  p-2 ">
      <div className="flex gap-2">
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <TrackCover track={track} />
        <div className="flex justify-center flex-col">
          <h3 className="text-md font-sem">{track.title}</h3>
          <small className="text-gray-400">{track.artist}</small>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-primary">
          {isFavorite ? <Heart className="text-red-500" /> : <Heart />}
        </button>
        <button className="btn btn-secondary">
          <CirclePlus />
        </button>
      </div>
    </Card>
  );
}

export function TrackCardL({ track, index }: { track: Track; index: number }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleDelete = (track_id: string) => {};

  return (
    <TableRow key={track.id} className="hover:bg-muted/50">
      <TableRow className="font-medium">{index + 1}</TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
            <Music className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="font-medium">{track.title}</div>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell text-muted-foreground">
        {track.uploaded_at.toLocaleDateString()}
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
  );
}
