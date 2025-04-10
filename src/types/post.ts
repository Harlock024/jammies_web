import { Track } from "./track";
import { Album } from "./album";
import { Playlist } from "./playlist";

export type Post =
  | {
      type: "post";
      id: string;
      content: string;
      posted_by: {
        id: string;
        name: string;
        username: string;
        email: string;
        profile_picture: string;
      };
      likes: number;
      comments: string[];
      tags: string[];
      createdAt: Date;
      updatedAt: Date;
    }
  | {
      type: "track";
      id: string;
      content: string;
      posted_by: {
        id: string;
        name: string;
        username: string;
        email: string;
        profile_picture: string;
      };
      likes: number;
      comments: string[];
      tags: string[];
      createdAt: Date;
      updatedAt: Date;
      track: Track;
    }
  | {
      type: "album";
      id: string;
      content: string;
      posted_by: {
        id: string;
        name: string;
        username: string;
        email: string;
        profile_picture: string;
      };
      likes: number;
      comments: string[];
      tags: string[];
      createdAt: Date;
      updatedAt: Date;
      album: Album;
    }
  | {
      type: "playlist";
      id: string;
      content: string;
      posted_by: {
        id: string;
        name: string;
        username: string;
        email: string;
        profile_picture: string;
      };
      likes: number;
      comments: string[];
      tags: string[];
      createdAt: Date;
      updatedAt: Date;
      playlist: Playlist;
    };
