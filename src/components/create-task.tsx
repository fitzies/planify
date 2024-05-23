import React, { useState, useRef } from "react";
import { createTask } from "@/lib/server";
import { Input } from "./ui/input";
import { Task } from "@prisma/client";

type CreateTaskProps = {
  projectId: string;
  update: any;
  tasks: Task[];
};

const CreateTask: React.FC<CreateTaskProps> = ({
  projectId,
  update,
  tasks,
}) => {
  const [taskInput, setTaskInput] = useState(""); // State to manage the input field value
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (submitButtonRef.current) {
        submitButtonRef.current.click();
      }
    }
  };

  const handleCreateTask = async (data: FormData) => {
    if (data.get("task")!.toString().length <= 0) {
      return;
    }

    const id = (new Date().getTime() / 1000).toFixed(0);

    data.set("id", id);
    // const tempPrev = tasks;
    const tempCreatedTask: Task = {
      name: data.get("task")!.toString(),
      assignedTo: "",
      description: "",
      id: parseInt(id),
      projectId: projectId,
      status: "notStarted",
    };
    update((prev: any[]) => [...prev, tempCreatedTask]);
    const createdTask: Task = await createTask(data);

    // update((prev: any[]) => [...tempPrev, createdTask]);

    setTaskInput(""); // Clear the input field after form submission
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(event.target as HTMLFormElement);
        handleCreateTask(formData);
      }}
      className="w-full bg-zinc-900 border border-zinc-800 border-opacity-50 px-4 py-3 rounded-xl flex gap-3 items-center my-2"
    >
      <input type="hidden" name="projectId" value={projectId} />
      <Input
        className="my-1 w-full"
        placeholder="Create a new task"
        autoFocus
        name="task"
        value={taskInput} // Bind input value to state
        onKeyDown={handleSubmit}
        onChange={(e) => setTaskInput(e.target.value)} // Update state on change
        minLength={1}
      />
      <button type="submit" className="hidden" ref={submitButtonRef}></button>
    </form>
  );
};

export default CreateTask;
