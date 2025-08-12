import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { setToken, deleteToken } from "@/helpers/auth";
import type { AuthState } from "@/Types/auth";
import { router } from "@/router";
// import type { logout } from "@/service/auth";

export const authStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setToken(t) {
        if (t) setToken(t);
        else deleteToken();
        set({ token: t });
      },
      setUser: (u) => set({ user: u }),
      logout: () => {
        deleteToken();
        set({ token: null, user: null });
        router.navigate({ to: "/login", replace: true });
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ token: s.token, user: s.user }),
    }
  )
);
