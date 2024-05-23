"use client";

import { DragDropContext } from "@hello-pangea/dnd";
import TaskGroup from "@/components/task-group";
import { useState } from "react";
import { $Enums, Task } from "@prisma/client";

const DragUi = ({ res, projectId }: { res: any; projectId: string }) => {
  const [tasks, setTasks] = useState<Task[]>(res); // res is  tasks fetched on the server in the page.tsx. its named res because i want to keep the vartiable name task free

  const onDragEnd = (result: any) => {
    const taskId: string = result.draggableId;
    const status: $Enums.Status = result.destination.droppableId;
    const updatedTask: Task = tasks.filter(
      (task: Task) => task.id.toString() === taskId.toString()
    )[0];
    updatedTask.status = status;
    const tempTasks: Task[] = tasks.map((task: Task) =>
      task.id.toString() === taskId ? updatedTask : task
    );

    setTasks(() => tempTasks);

    fetch(`/api/tasks/${taskId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((data: Task) => {
        // revalidatePath(`/project/${projectId}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TaskGroup
        title="notStarted"
        tasks={tasks}
        projectId={projectId}
        setTasks={setTasks}
      />
      <TaskGroup
        title="inProgress"
        tasks={tasks}
        projectId={projectId}
        setTasks={setTasks}
      />
      <TaskGroup
        title="completed"
        tasks={tasks}
        projectId={projectId}
        setTasks={setTasks}
      />
    </DragDropContext>
  );
};

export default DragUi;
