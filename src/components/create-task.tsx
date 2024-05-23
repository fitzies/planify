import React, { useState, useRef } from "react";
import { createTask } from "@/lib/server";
import { Input } from "./ui/input";
import { Task } from "@prisma/client";

type CreateTaskProps = {
  projectId: string;
  update: any;
};

const CreateTask: React.FC<CreateTaskProps> = ({ projectId, update }) => {
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
    const createdTask: Task = await createTask(data);

    update((prev: any[]) => [...prev, createdTask]);

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
      />
      <button type="submit" className="hidden" ref={submitButtonRef}></button>
    </form>
  );
};

export default CreateTask;
