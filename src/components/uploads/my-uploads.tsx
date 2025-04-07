import { MyAlbums } from "../albums/my-albums";
import { MyPlaylists } from "../playlists/my-playlist";
import { MyTracks } from "../track/my-tracks";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

export function MyUploads() {
  return (
    <div>
      <Tabs className="flex w-full items-center ">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="tracks">Tracks</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
        </TabsList>

        <TabsContent value="tracks">
          <MyTracks />
        </TabsContent>
        <TabsContent value="albums">
          <MyAlbums />
        </TabsContent>
        <TabsContent value="playlists">
          <MyPlaylists />
        </TabsContent>
      </Tabs>
    </div>
  );
}
