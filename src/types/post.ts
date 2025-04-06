import { Track } from "./track";
import { Album } from "./album";

export type Post =
  | {
      type: "post";
      id: string;
      title: string;
      description: string;
      posted_by: {
        id: string;
        name: string;
        username: string;
        email: string;
        avatar: string;
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
      title: string;
      description: string;
      posted_by: {
        id: string;
        name: string;
        username: string;
        email: string;
        avatar: string;
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
      title: string;
      description: string;
      posted_by: {
        id: string;
        name: string;
        username: string;
        email: string;
        avatar: string;
      };
      likes: number;
      comments: string[];
      tags: string[];
      createdAt: Date;
      updatedAt: Date;
      album: Album;
    };
