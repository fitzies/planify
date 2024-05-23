"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { camelCaseToHumanReadable } from "@/lib/utils";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Task } from "@prisma/client";
import { PencilIcon, Trash } from "lucide-react";
import CreateTask from "./create-task";
import { deleteTask } from "@/lib/server";
import { useUserStore } from "@/stores/user-store";

const TaskGroup = ({
  title,
  tasks,
  projectId,
  setTasks,
}: {
  title: string;
  tasks: Task[];
  projectId: string;
  setTasks: Function;
}) => {
  const groupTasks = tasks.filter((task) => task.status === title);
  const user = useUserStore((state) => state.user);
  const initials = `${user?.given_name?.[0] ?? ""}${
    user?.family_name?.[0] ?? ""
  }`;

  return (
    <div className="lg:w-1/3 w-full border-zinc-900 py-4 rounded-2xl flex flex-col gap-2 h-full">
      <h2 className="font-medium text-lg">
        {camelCaseToHumanReadable(title)} ({groupTasks.length})
      </h2>
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className="h-5/6 overflow-y-auto"
            style={{
              border: "dashed",
              borderRadius: "16px",
              borderColor: snapshot.isDraggingOver ? "#18181B" : "transparent",
            }}
            {...provided.droppableProps}
          >
            {provided.placeholder}
            {groupTasks.map((task) => {
              return (
                <Draggable
                  draggableId={task.id.toString()}
                  index={task.id}
                  key={task.name + task.id}
                >
                  {(provided, snapshot) => (
                    // Actual block from here
                    <motion.div
                      key={task.id}
                      layout
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1, originY: 0 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 40,
                      }}
                    >
                      <div
                        className="w-full bg-zinc-900 border border-zinc-800 border-opacity-50 px-4 py-3 rounded-xl flex gap-3 items-center my-2"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="flex flex-col w-full">
                          <h3>{task.name}</h3>
                          <p className="text-sm text-zinc-500">
                            {task.description}{" "}
                          </p>
                        </div>
                        <div className="text-xs justify-center-center flex text-zinc-500 ml-auto cursor-grab gap-1 py-2 w-1/6">
                          <PencilIcon className="scale-75" />
                          <form
                            action={async (data: FormData) => {
                              let temp = tasks.filter(
                                (task) =>
                                  task.id !==
                                  parseInt(data.get("taskId")!.toString())
                              );

                              setTasks(() => temp);
                              await deleteTask(data);
                            }}
                          >
                            <input
                              name="taskId"
                              value={task.id}
                              className="hidden"
                            />
                            <button className="hover:!text-red-500 hover:rotate-12 duration-150">
                              <Trash className="scale-[.65]" />
                            </button>
                          </form>
                        </div>
                        <Avatar className="scale-[.75] ">
                          <AvatarImage src={user?.picture ?? ""} />
                          <AvatarFallback>{initials}</AvatarFallback>
                        </Avatar>
                      </div>
                    </motion.div>
                  )}
                </Draggable>
              );
            })}
            {title === "notStarted" ? (
              <CreateTask
                projectId={projectId}
                update={setTasks}
                tasks={tasks}
              />
            ) : null}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskGroup;
