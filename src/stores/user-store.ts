import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { create } from "zustand";

export type UserStore = {
  user: KindeUser | null;
  setUser: (value: any) => void;
};

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (value) => set(() => ({ user: value })),
}));
