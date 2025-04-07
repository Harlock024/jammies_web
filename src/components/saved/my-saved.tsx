import { SavedAlbums } from "../albums/saved-albums";
import { SavedPlaylist } from "../playlists/saved-playlist";
import { SavedTracks } from "../track/saved-tracks";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

export function MySaved() {
  return (
    <div>
      <Tabs className="flex w-full items-center ">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="tracks">Tracks</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
        </TabsList>
        <TabsContent value="tracks">
          <SavedTracks />
        </TabsContent>
        <TabsContent value="albums">
          <SavedAlbums />
        </TabsContent>
        <TabsContent value="playlists">
          <SavedPlaylist />
        </TabsContent>
      </Tabs>
    </div>
  );
}
