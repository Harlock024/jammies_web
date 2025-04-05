import { Track } from "./track";

export type Post = {
  id: string;
  title: string;
  description: string;
  track: Track;
  posted_by: {
    id: string;
    name: string;
    username: string;
    email: string;
    avatar: string;
  };
  createdAt: Date;
  updatedAt: Date;
};
