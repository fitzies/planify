"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import { useProject } from "@/lib/hooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Project } from "@prisma/client";

export const ProjectNavSelect = ({ projects }: { projects: Project[] }) => {
  const id = usePathname().split("/")[2];

  const { project, error, isLoading } = useProject(id);
  const router = useRouter();

  if (error) {
    redirect("/dashboard");
  }

  if (isLoading) {
    return (
      <Select>
        <SelectTrigger className="!border-transparent !px-0">
          <SelectValue placeholder="..." />
        </SelectTrigger>
      </Select>
    );
  }

  return (
    <Select onValueChange={(e) => router.push(`/project/${e}`)}>
      <SelectTrigger className="!border-transparent !outline-transparent !px-0">
        <SelectValue placeholder={project.name} className="!text-md" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {projects.map((p, index) => {
            return (
              <SelectItem
                key={index}
                value={p.id}
                className="!text-md cursor-pointer"
              >
                {p.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
