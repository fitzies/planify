"use client";

import {
  Clipboard,
  LayoutDashboardIcon,
  Pencil,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidenav = () => {
  const pathname = usePathname();
  const path =
    pathname.split("/").length > 3
      ? pathname.split("/").slice(3).join("/")
      : "";

  const id =
    pathname.split("/").length >= 3
      ? pathname.split("/").slice(2, 3).join("/")
      : "";

  const options = [
    { name: "", icon: <LayoutDashboardIcon /> },
    { name: "Tasks", icon: <Clipboard /> },
    { name: "Notes", icon: <Pencil /> },
    { name: "Users", icon: <Users /> },
    { name: "Settings", icon: <Settings /> },
  ];

  return (
    <div className="border-r border-zinc-800 flex flex-col pl-3 pr-4 py-8 gap-2">
      {options.map((option, index) => {
        const selected =
          option.name.toLowerCase() === path
            ? "!text-white bg-zinc-800"
            : "hover:bg-zinc-600 hover:bg-opacity-30 duration-150";

        return (
          <Link
            key={option.name}
            className={`text-left text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 duration-200 cursor-pointer rounded-md pl-1 lg:pr-16 pr-1 py-1 flex gap-2 items-center ${
              index === options.length - 1 ? "mt-auto" : ""
            } ${selected}`}
            href={
              option.name
                ? `/project/${id}/${option.name.toLowerCase()}`
                : `/project/${id}/`
            }
          >
            <div className="scale-[.75]">{option.icon}</div>
            <p className="text-sm lg:block hidden">
              {option.name.length <= 0 ? "Dashboard" : option.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidenav;
