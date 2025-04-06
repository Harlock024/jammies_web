import { Track } from "@/types/track";

const currentSong: Track = {
  id: "",
  title: "Evolve",
  artist: "The Warning",
  cover_image:
    "https://i.scdn.co/image/ab67616d0000b273833f4f371d38761280847992",
  duration: 0,
  album: "Error",
  genre: "Rock",
  user_id: "1",
};
export function PlayerCurrentSong() {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={currentSong?.cover_image}
        alt="Portada"
        className="w-12 h-12 rounded-md"
      />
      <div>
        <h4 className="text-sm font-bold">{currentSong?.title}</h4>
        <p className="text-xs text-gray-400">{currentSong?.artist}</p>
      </div>
    </div>
  );
}
