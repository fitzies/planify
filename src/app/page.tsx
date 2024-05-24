import { ClientAuth } from "@/components/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Page = async ({ params }: { params: { slug: string } }) => {
  const user = await getKindeServerSession().getUser();

  return (
    <div className="w-screen">
      {user ? <Link href={"/dashboard"}>Dashboard</Link> : <ClientAuth />}
    </div>
  );
};

export default Page;
