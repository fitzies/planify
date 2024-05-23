"use client";

import { deleteProject } from "@/lib/server";
import { DropdownMenuItem } from "./ui/dropdown-menu";

const DropdownButton = ({
  type,
  value,
}: {
  type: "Delete" | "Share";
  value: string;
}) => {
  const onSubmit = async (data: FormData) => {
    if (type === "Delete") {
      await deleteProject(data);
    }
    if (type === "Share") {
      return;
    }
  };

  return (
    <>
      <form action={onSubmit}>
        <input className="hidden" name="id" value={value} />
        <button className="w-full">
          <DropdownMenuItem
            className={`
            cursor-pointer
            ${type === "Delete" ? "text-red-500" : ""}
            ${type === "Share" ? "text-white" : ""}
          `}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {type}
          </DropdownMenuItem>
        </button>
      </form>
    </>
  );
};

export default DropdownButton;
