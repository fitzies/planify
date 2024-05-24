import useSWR from "swr";
import { fetcher } from "./utils";
import { Project } from "@prisma/client";
import { useEffect, useRef } from "react";

const useProject = (id: string) => {
  const { data, error, isLoading } = useSWR(`/api/project/${id}`, fetcher);

  return { project: data as Project, error, isLoading };
};

export { useProject };
