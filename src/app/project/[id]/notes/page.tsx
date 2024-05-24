import Notes from "@/components/notes";
import { getProject } from "@/lib/server";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);

  if (!project) {
    redirect("/");
  }

  return (
    <div className="lg:w-2/3 w-3/4 mx-auto px-4 py-6 overflow-y-auto flex flex-col gap-2">
      <h1 className="header">Notes</h1>
      <Notes project={project} />
    </div>
  );
};

export default Page;
