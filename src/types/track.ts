export type Track = {
  id: string;
  user_id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  cover_image: string;
  duration: number;
  uploaded_at: Date;
  is_public: boolean;
  plays: number;
};
