export type Playlist = {
  id: string;
  name: string;
  description: string;
  created_by: {
    id: string;
    name: string;
    username: string;
    email: string;
    avatar: string;
  };
  cover_image: string;
  createdAt: Date;
  updatedAt: Date;
};
