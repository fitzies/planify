import DragUi from "@/components/drag-ui";
import { Input } from "@/components/ui/input";
import { getTasks } from "@/lib/server";

const Page = async ({ params }: { params: { id: string } }) => {
  const res = await getTasks(params.id);

  return (
    <div className="w-2/3 mx-auto px-4 py-6 flex flex-col gap-4">
      <h1 className="header">Tasks</h1>
      <div className="w-full flex">
        <Input className="w-1/4 mb-4" placeholder="Search" />
      </div>
      <div className="flex gap-2 h-screen justify-between w-full">
        <DragUi res={res} projectId={params.id} />
      </div>
    </div>
  );
};

export default Page;
