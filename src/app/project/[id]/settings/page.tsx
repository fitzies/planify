import SettingsForm from "@/components/settings-form";

import { getProject } from "@/lib/server";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);

  if (!project) {
    redirect("/dashboard");
  }

  return <SettingsForm project={project} />;
};

export default Page;
