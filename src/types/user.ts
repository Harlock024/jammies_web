export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  following: number;
  followers: number;
  links: UserLinks[];
};

type UserLinks = {
  id: number;
  user_id: number;
  url: string;
  label: string;
};
