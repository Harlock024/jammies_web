import React from "react";
import { Album } from "@/types/album";
import { Card, CardFooter } from "../ui/card";

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
