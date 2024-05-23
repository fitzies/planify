import prisma from "@/db";

export async function POST(request: Request) {
  const url = new URL(request.url);
  const id = parseInt(url.pathname.split("/")[3]);

  const data = await request.json();
  if (
    data.status !== "notStarted" &&
    data.status !== "inProgress" &&
    data.status !== "completed"
  ) {
    return Response.json({ error: "Not a proper status", status: data.status });
  }

  let updatedTask = await prisma.task.update({
    where: {
      id,
    },
    data: {
      status: data.status,
    },
  });

  return Response.json({ updatedTask });
}
