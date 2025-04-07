import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthResponse } from "@/types/auth-response";

import { User } from "@/types/user";

import { signIn, signUp } from "@/services/auth-services";

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refresh: () => Promise<void>;
};
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoading: false,
      login: async (username: string, password: string) => {
        set({ isLoading: true });
        try {
          const auth: AuthResponse | null = await signIn(username, password);

          const user = auth?.user;
          set({
            user,
            accessToken: auth?.accessToken,
            refreshToken: auth?.refreshToken,
            isLoading: false,
          });
        } catch (err) {
          console.error(err);
          set({ isLoading: false });
        }
      },
      logout: () => {
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
        });
      },
      refresh: async () => {
        const { refreshToken } = get();
        if (!refreshToken) return;

        try {
          const res = await fetch("/api/auth/refresh", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken }),
          });
          if (!res.ok) throw new Error("Refresh failed");

          const { accessToken } = await res.json();
          set({ accessToken });
        } catch (error) {
          console.error(error);
          get().logout();
        }
      },
      register: async (username: string, email: string, password: string) => {
        const auth: AuthResponse | null = await signUp(
          username,
          email,
          password,
        );
        set({
          user: auth?.user,
          accessToken: auth?.accessToken,
          refreshToken: auth?.refreshToken,
        });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
