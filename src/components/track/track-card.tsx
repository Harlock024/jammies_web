import { Track } from "@/types/track";
import { Card, CardHeader } from "../ui/card";
import { CirclePlus, Heart, Play, Pause } from "lucide-react";
import { useState } from "react";

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
