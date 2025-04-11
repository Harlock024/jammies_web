import { Search, X } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Track = {
  id: string;
  title: string;
  artist: string;
};

const mockTracks: Track[] = [
  { id: "1", title: "Blinding Lights", artist: "The Weeknd" },
  { id: "2", title: "Levitating", artist: "Dua Lipa" },
  { id: "3", title: "Peaches", artist: "Justin Bieber" },
];

export function PostForm({ closeModal }: { closeModal: () => void }) {
  const [content, setContent] = useState("");
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const [showSongSelector, setShowSongSelector] = useState();
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submit con track:", selectedTrackId);
  };

  const filtered = mockTracks.filter((track) =>
    `${track.title} ${track.artist}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  const selectedTrack = selectedTrackId
    ? mockTracks.find((track) => track.id === selectedTrackId)
    : null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start p-5 justify-center z-50">
      <div className="w-full max-w-md overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: showSongSelector ? "translateX(-100%)" : "translateX(0)",
          }}
        >
          {/* Post Form */}
          <Card className="bg-white rounded-2xl shadow-lg p-6 w-full flex-shrink-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Create Post</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-black"
              >
                <X />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <textarea
                className="border p-2 rounded min-h-[120px] resize-none"
                placeholder="What do you think?"
                id="content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <div>
                <label className="block mb-1 font-medium">
                  Link a song to your post
                </label>
                {selectedTrack ? (
                  <div className="flex items-center gap-2 border rounded p-2">
                    <div className="flex-1">
                      <p className="font-medium truncate">
                        {selectedTrack.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {selectedTrack.artist}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => setSelectedTrackId(null)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove song</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => setShowSongSelector(true)}
                      >
                        <Search className="h-4 w-4" />
                        <span className="sr-only">Change song</span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    type="button"
                    className="flex gap-2 items-center w-full justify-start"
                    onClick={() => setShowSongSelector(true)}
                  >
                    <Search className="w-4 h-4" />
                    Search for a song
                  </Button>
                )}
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="mt-2 px-4 py-2 rounded">
                  Post
                </Button>
              </div>
            </form>
          </Card>

          {/* Song Selector */}
          <Card className="bg-white rounded-2xl shadow-lg p-6 w-full flex-shrink-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Select a Song</h2>
              <button
                onClick={() => setShowSongSelector(false)}
                className="text-gray-500 hover:text-black"
              >
                <X />
              </button>
            </div>

            <input
              type="text"
              className="border p-2 rounded w-full mb-4"
              placeholder="Search a song..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {filtered.map((track) => (
                <div
                  key={track.id}
                  onClick={() => {
                    setSelectedTrackId(track.id);
                    setShowSongSelector(false);
                  }}
                  className="cursor-pointer p-3 rounded-lg border hover:bg-gray-100"
                >
                  <p className="font-semibold">{track.title}</p>
                  <p className="text-sm text-gray-500">{track.artist}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 text-right">
              <Button
                variant="ghost"
                onClick={() => setShowSongSelector(false)}
              >
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
