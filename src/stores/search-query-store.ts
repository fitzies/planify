import { create } from "zustand";

export type SearchQueryState = {
  query: string;
  setQuery: (value: string) => void;
};

export const useSearchQuery = create<SearchQueryState>()((set) => ({
  query: "",
  setQuery: (string) => set(() => ({ query: string })),
}));
