import { getProject } from "@/lib/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/")[3];

  const res = await getProject(id);

  return Response.json({ ...res });
}
