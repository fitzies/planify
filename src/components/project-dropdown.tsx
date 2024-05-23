import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteProject } from "@/lib/server";
import { EllipsisIcon } from "lucide-react";
import DropdownButton from "./dropdown-button";

const ProjectDropdown = ({ id }: { id: string }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="ml-auto">
          <EllipsisIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownButton type="Share" value={id} />
          <DropdownButton type="Delete" value={id} />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProjectDropdown;
