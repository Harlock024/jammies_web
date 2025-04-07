import { Playlist } from "@/types/playlist";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
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

function PlayListCover({ playlist }: { playlist: Playlist }) {
  return (
    <div className="w-24 h-24 rounded-md overflow-hidden">
      <img
        src={playlist.cover_image}
        alt={playlist.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
export function PlaylistCard({ playlist }: { playlist: Playlist }) {
  return (
    <Card className="flex w-full hover:bg-gray-100 rounded-sm border-none shadow-none">
      <CardHeader className="flex  ">
        <PlayListCover playlist={playlist} />
        <div>
          <h3 className="text-sm font-medium text-gray-900">{playlist.name}</h3>
          <p className="text-sm text-gray-500">
            {playlist.created_by.username}
          </p>
        </div>
      </CardHeader>
      <CardFooter>
        {/* <Button variant="outline" className="w-full">
          Play
        </Button> */}
      </CardFooter>
    </Card>
  );
}

export function PlaylistCardL({ playlist }: { playlist: Playlist }) {
  return (
    <Card
      key={playlist.id}
      className="overflow-hidden border hover:shadow-md transition-shadow"
    >
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <img
            src={playlist.cover_image || "/placeholder.svg"}
            alt={playlist.name}
            className="object-cover w-52"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full h-12 w-12"
            >
              <Play className="h-6 w-6 ml-1" />
            </Button>
          </div>
          {!playlist.is_public && (
            <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm p-1 rounded-full">
              <Lock className="h-4 w-4" />
            </div>
          )}
          <div className="absolute top-2 left-2">
            <Badge
              variant="secondary"
              className="bg-background/80 backdrop-blur-sm"
            >
              My Playlist
            </Badge>
          </div>
          <div className="absolute bottom-2 right-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                >
                  <MoreHorizontal className="h-4 w-4" />
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
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="p-3">
          <a href={`/playlist/${playlist.id}`}>
            <h3 className="font-medium text-sm truncate hover:underline">
              {playlist.name}
            </h3>
          </a>
          {/* <p className="text-xs text-muted-foreground">
            {playlist.trackCount} tracks
          </p> */}
        </div>
      </CardContent>
    </Card>
  );
}
