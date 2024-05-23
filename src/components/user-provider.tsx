"use client";

import { useUserStore } from "@/stores/user-store";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

const UserProvider = ({
  children,
  user,
}: {
  children: any;
  user: KindeUser | null;
}) => {
  const setUser = useUserStore((state) => state.setUser);
  setUser(user); // Set the user on the Nav, I know its dumb...

  return <>{children}</>;
};

export default UserProvider;
