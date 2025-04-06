import { Track } from "./track";

export type Album = {
  id: string;
  title: string;
  description: string;
  artist: string;
  // posted_by: {
  //   id: string;
  //   name: string;
  //   email: string;
  //   avatar: string;
  // };
  cover_image: string;

  createdAt: Date;
  updatedAt: Date;
};
