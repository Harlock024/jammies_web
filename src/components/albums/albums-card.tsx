import React from "react";
import { Album } from "@/types/album";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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

function AlbumCover({ album }: { album: Album }) {
  return (
    <div>
      <img className="w-52" src={album.cover_image} alt={album.title} />
    </div>
  );
}
export function AlbumsCard({ album }: { album: Album }) {
  return (
    <Card className="border-0 shadow-none">
      <AlbumCover album={album} />
      <CardFooter>
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">{album.title}</h3>
            <small className="text-sm text-gray-500">{album.artist}</small>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export function AlbumsCardP({ album }: { album: Album }) {
  return (
    <Card
      key={album.id}
      className="overflow-hidden border hover:shadow-md transition-shadow"
    >
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <img
            src={album.cover_image}
            alt={album.title}
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
          {!album.is_public && (
            <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm p-1 rounded-full">
              <Lock className="h-4 w-4" />
            </div>
          )}
          <div className="absolute top-2 left-2">
            <Badge
              variant="secondary"
              className="bg-background/80 backdrop-blur-sm"
            >
              My Upload
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
          <a href={`/album/${album.id}`}>
            <h3 className="font-medium text-sm truncate hover:underline">
              {album.title}
            </h3>
          </a>
          <p className="text-xs text-muted-foreground">
            Album • {album.release_date.toLocaleDateString()} • tracks
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
