import { User } from "./user";

export type AuthResponse = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
};
