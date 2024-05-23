import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getProject } from "@/lib/server";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);

  if (!project) {
    redirect("/dashboard");
  }

  return (
    <div className="lg:w-2/3 w-3/4 mx-auto px-4 py-6 overflow-y-auto flex flex-col gap-4">
      <h1 className="header">Settings</h1>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          defaultValue={project.name}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Description</Label>
        <Textarea
          id="description"
          defaultValue={project.description}
          className="resize-none"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="repo">GitHub repository</Label>
        <Input
          type="text"
          id="repo"
          placeholder="https://github.com/john/apples.git"
          // defaultValue={project.repo}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="website">Website</Label>
        <Input
          type="text"
          id="website"
          placeholder="https://mywebsite.com"
          // defaultValue={project.website}
        />
      </div>
    </div>
  );
};

export default Page;
