import { Skeleton } from "@/components/ui/skeleton";
import { PencilIcon, Trash } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="lg:w-2/3 w-3/4 mx-auto px-4 py-6 overflow-y-auto flex flex-col gap-4">
      <h1 className="header">Tasks</h1>
      <div className="w-full flex gap-2">
        <div className="w-1/3 border-zinc-900 py-4 rounded-2xl flex flex-col gap-2 h-full">
          <h2 className="font-medium text-lg">Not started (0)</h2>
          <Skeleton className="w-full bg-zinc-900 border border-zinc-800 border-opacity-50 px-4 py-3 rounded-xl flex gap-3 items-center my-2">
            <p className="text-transparent">This is a loading Ui element</p>
            <div className="text-xs justify-center-center flex text-zinc-500 ml-auto cursor-grab gap-1 py-2 w-1/6">
              <PencilIcon className="scale-75 text-transparent" />
              <form>
                <button className="hover:!text-red-500 hover:rotate-12 duration-150">
                  <Trash className="scale-[.65] text-transparent" />
                </button>
              </form>
            </div>
          </Skeleton>
        </div>
        <div className="w-1/3 border-zinc-900 py-4 rounded-2xl flex flex-col gap-2 h-full">
          <h2 className="font-medium text-lg">In progress (0)</h2>
          <Skeleton className="w-full bg-zinc-900 border border-zinc-800 border-opacity-50 px-4 py-3 rounded-xl flex gap-3 items-center my-2">
            <p className="text-transparent">This is a loading Ui element</p>
            <div className="text-xs justify-center-center flex text-zinc-500 ml-auto cursor-grab gap-1 py-2 w-1/6">
              <PencilIcon className="scale-75 text-transparent" />
              <form>
                <button className="hover:!text-red-500 hover:rotate-12 duration-150">
                  <Trash className="scale-[.65] text-transparent" />
                </button>
              </form>
            </div>
          </Skeleton>
        </div>
        <div className="w-1/3 border-zinc-900 py-4 rounded-2xl flex flex-col gap-2 h-full">
          <h2 className="font-medium text-lg">Completed (0)</h2>
          <Skeleton className="w-full bg-zinc-900 border border-zinc-800 border-opacity-50 px-4 py-3 rounded-xl flex gap-3 items-center my-2">
            <p className="text-transparent">This is a loading Ui element</p>
            <div className="text-xs justify-center-center flex text-zinc-500 ml-auto cursor-grab gap-1 py-2 w-1/6">
              <PencilIcon className="scale-75 text-transparent" />
              <form>
                <button className="hover:!text-red-500 hover:rotate-12 duration-150">
                  <Trash className="scale-[.65] text-transparent" />
                </button>
              </form>
            </div>
          </Skeleton>
        </div>
      </div>
      {/* <Skeleton /> */}
    </div>
  );
}
