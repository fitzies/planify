import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import Link from "next/link";
import ProjectDropdown from "./project-dropdown";
import { getProjectPercent } from "@/lib/server";

const ProjectCard = async ({ id, name }: { id: string; name: string }) => {
  const progress = await getProjectPercent(id);
  const status = progress != 100 ? "Building" : "Completed";

  return (
    <Link href={`/project/${id}`}>
      <Card className="p-4 hover:-translate-y-1 duration-150 lg:mx-0 mx-6">
        <div className="bg-zinc-900 object-cover w-full h-20 rounded-xl cursor-pointer"></div>
        <CardContent className="p-4">
          <div className="flex items-center justify-start gap-2">
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
            <Badge variant={"default"}>{status}</Badge>
            <ProjectDropdown id={id} />
          </div>
          <div className="pt-2 flex flex-col gap-1">
            <p className="text-gray-600 text-md dark:text-gray-300">
              {progress}% completed
            </p>
            <Progress value={progress} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
