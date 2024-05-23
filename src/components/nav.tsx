"use client";

import { usePathname, useRouter } from "next/navigation";
import { useUserStore } from "@/stores/user-store";
import icon from "@/../public/icon.png";
import Image from "next/image";
import { useProject } from "@/lib/hooks";

const Nav = () => {
  const router = useRouter();

  const id = usePathname().split("/")[2];
  const { project, error, isLoading } = useProject(id);

  const path = !usePathname().includes("project");
  const user = useUserStore((state) => state.user);

  return (
    <div className="px-6 border-b border-zinc-800 flex gap-4 items-center py-3">
      <Image
        src={icon}
        alt="Planify"
        width={33}
        height={33}
        onClick={() => router.push("/dashboard")}
        className="cursor-pointer"
      />
      <p className="text-zinc-400 dark:text-zinc-500 text-lg">/</p>
      <div className="rounded-full cursor-default bg-zinc-800 w-[33px] h-[33px]">
        {user ? (
          <Image
            src={user?.picture ?? ""}
            alt={user?.given_name ?? "User"}
            width={33}
            height={33}
          />
        ) : (
          ""
        )}
      </div>
      <p className="cursor-default text-sm">{user?.given_name ?? "..."}</p>
      {!path && project ? (
        <>
          <p className="text-zinc-400 dark:text-zinc-500 text-lg">/</p>
          <p className="cursor-default text-sm">{project.name}</p>

          {/* <ProjectNavSelect projects={projects} /> */}
        </>
      ) : null}
    </div>
  );
};

export default Nav;
