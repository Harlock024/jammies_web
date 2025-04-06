import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ProfileAlbumList } from "./profile-album-list";
import { ProfilePlaylistList } from "./profile-playlist-list";
import { ProfilePostList } from "./profile-post-list";
import { ProfileTrackList } from "./profile-track-list";

export function ProfileTabsContent() {
  return (
    <div className="flex  justify-center">
      <ProfileTrackList />
      {/* <Tabs className="">
        <TabsList>
          <TabsTrigger className="text-lg" value="posts">
            Posts
          </TabsTrigger>
          <TabsTrigger
            defaultValue={"tracks"}
            className="text-lg"
            value="tracks"
          >
            Tracks
          </TabsTrigger>
          <TabsTrigger className="text-lg" value="albums">
            Albums
          </TabsTrigger>
          <TabsTrigger className="text-lg" value="playlists">
            Playlists
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <ProfilePostList />
        </TabsContent>
        <TabsContent value="tracks">

        </TabsContent>
        <TabsContent value="albums">
          <ProfileAlbumList />
        </TabsContent>
        <TabsContent value="playlists">
          <ProfilePlaylistList />
        </TabsContent>
      </Tabs> */}
    </div>
  );
}
