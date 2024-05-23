"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useSearchQuery } from "@/stores/search-query-store";

const Searchbar = () => {
  const setSearchQuery = useSearchQuery((state) => state.setQuery);

  return (
    <>
      <Input
        className="w-full pl-10"
        placeholder="Search projects"
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
      />
      <SearchIcon className="absolute top-0 left-0 mt-2 ml-8 text-gray-500" />
    </>
  );
};

export default Searchbar;
