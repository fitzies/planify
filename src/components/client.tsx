"use client";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "./ui/button";

const ClientAuth = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <>
      <RegisterLink className={`w-full ${className}`}>
        <Button className="w-full">{text}</Button>
      </RegisterLink>
    </>
  );
};

export { ClientAuth };
