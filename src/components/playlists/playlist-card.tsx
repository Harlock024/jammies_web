import { Card, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Playlist } from "@/types/playlist";

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
