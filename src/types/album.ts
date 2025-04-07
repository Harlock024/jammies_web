import { Track } from "./track";

export type Album = {
  id: string;
  title: string;
  description: string;
  artist: string;
  cover_image: string;
  is_public: boolean;
  createdAt: Date;
  updatedAt: Date;
  release_date: Date;
};
