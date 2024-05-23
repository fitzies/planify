import NewPopup from "@/components/new-popup";
import ProjectCardDisplay from "@/components/project-card-display";
import Searchbar from "@/components/searchbar";
import { getProjects } from "@/lib/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { name: string } }) => {
  const user = await getKindeServerSession().getUser();

  if (!user) {
    redirect("/");
  }

  const projects = await getProjects(user.id);

  if (!projects) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-5/6 mx-auto p-4 flex flex-col lg:gap-0 gap-4">
      <div className="px-6 relative flex gap-2">
        <Searchbar />
        <NewPopup userId={user.id} />
      </div>
      <ProjectCardDisplay projects={projects} />
    </div>
  );
};

export default Page;
