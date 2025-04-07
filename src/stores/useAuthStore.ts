import { create } from "zustand";
import { persist } from "zustand/middleware";

import { User } from "@/types/user";

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
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
          const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          });

          if (!res.ok) throw new Error("Login failed");

          const { accessToken, refreshToken } = await res.json();

          const me = await fetch("/api/auth/me", {
            headers: { Authorization: `Bearer ${accessToken}` },
          });

          if (!me.ok) throw new Error("Failed to get user profile");

          const user = await me.json();
          set({
            user,
            accessToken,
            refreshToken,
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
    }),
    {
      name: "auth-storage",
    },
  ),
);
