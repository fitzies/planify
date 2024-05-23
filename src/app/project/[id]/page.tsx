import Block from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import TableX from "@/components/ui/table_x";
import { getProjectPercent, getTasks } from "@/lib/server";
import { camelCaseToHumanReadable } from "@/lib/utils";
import Link from "next/link";

const Page = async ({ params }: { params: { id: string } }) => {
  const progress = await getProjectPercent(params.id);
  const tasks = await getTasks(params.id);

  return (
    <div className="lg:w-2/3 w-3/4 mx-auto px-4 py-6 overflow-y-auto">
      <h1 className="header">Dashboard</h1>
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-4 ">
          <Block
            subtitle="Create a task"
            description="Organize your projects by breaking them down into manageable tasks and assigning each task to a designated person"
          >
            <Link href={`/project/${params.id}/tasks`}>
              <Button>Create</Button>
            </Link>
          </Block>
          <Block
            header="You have completed"
            title={`${progress}%`}
            subtext={`${tasks.length} total tasks`}
          >
            <Progress value={progress} />
          </Block>
          <Block
            subtitle="Share this project"
            description="Share projects, assign tasks, collaborate effortlessly with designated team members"
          >
            <div className="flex gap-4">
              <Button>Share</Button>
              <Button variant={"secondary"}>User permissions</Button>
            </div>
          </Block>
        </div>
        <div className="flex gap-4">
          <TableX
            headers={["Tasks", "Asigned to", "Status"]}
            text={tasks.length === 0 ? "You have no tasks" : ""}
            values={
              tasks.map((task) => {
                if (task.status === "completed") {
                  return [];
                }
                return [
                  task.name,
                  "You",
                  camelCaseToHumanReadable(task.status),
                ];
              }) as string[][]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
