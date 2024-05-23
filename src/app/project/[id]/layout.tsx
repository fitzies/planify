import Sidenav from "@/components/sidenav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { option: string } }>) {
  return (
    <main className="flex h-full">
      <Sidenav />
      {children}
    </main>
  );
}
