"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createProject = async (data: FormData) => {
  const id = [...Array(10)].map(() => Math.random().toString(36)[2]).join("");

  const project = await prisma.project.create({
    data: {
      id,
      name: data.get("name")!.toString(),
      description: data.get("description")!.toString(),
      userId: data.get("userId")!.toString(),
    },
  });

  revalidatePath("/dashboard");
  return project;
};

export const getProjects = async (userId: string) => {
  const res = await prisma.project.findMany({ where: { userId: userId } });

  return res;
};

export const deleteProject = async (data: FormData) => {
  await prisma.project.delete({ where: { id: data.get("id")!.toString() } });
  revalidatePath("/dashboard");
};

export const getProject = async (projectId: string) => {
  const res = await prisma.project.findFirst({ where: { id: projectId } });

  return res;
};

export const getProjectPercent = async (projectId: string) => {
  const res = await prisma.task.findMany({ where: { projectId } });

  if (res.length === 0) {
    return 0;
  }

  let completedCount = 0;
  for (const task of res) {
    if (task.status === "completed") {
      completedCount++;
    }
  }

  const totalTasks = res.length;
  const percentCompleted = (completedCount / totalTasks) * 100;

  return Math.round(percentCompleted);
};

export const getTasks = async (projectId: string) => {
  const res = await prisma.task.findMany({ where: { projectId } });

  return res;
};

export const createTask = async (data: FormData) => {
  const currentProject = await prisma.project.findFirst({
    where: { id: data.get("projectId")!.toString() },
  });

  let userId = currentProject!.userId;

  // Task creation logic here
  const createdTask = await prisma.task.create({
    data: {
      id: parseInt(data.get("id")!.toString()),
      name: data.get("task")!.toString(),
      status: "notStarted",
      projectId: data.get("projectId")!.toString(),
      assignedTo: userId,
    },
  });

  return createdTask;
};

export const deleteTask = async (data: FormData) => {
  let taskId = parseInt(data.get("taskId")!.toString());

  return await prisma.task.delete({ where: { id: taskId } });
};

const getAccessToken = async () => {
  try {
    const searchParams = {
      grant_type: "client_credentials",
      client_id: "27576fbfa49f41f1bebb83dd4bfa3b99",
      client_secret: "w1tJQ0R50YDtAyzE6W09He23BXxT3mItkC03DktfRM9ShipXw2",
      audience: "https://planify.kinde.com/api",
    };

    const res = await fetch("https://planify.kinde.com/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(searchParams),
    });
    const token = await res.json();
    return token;
  } catch (err) {
    console.error(err);
  }
};

export const getUsers = async () => {
  const accessToken = await getAccessToken();

  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const res = await fetch("https://planify.kinde.com/api/v1/users", {
      method: "GET",
      headers: headers,
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
