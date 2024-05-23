import { PrismaClient } from "@prisma/client";

// const libsql = createClient({
//   url: `${process.env.DATABASE_URL}`,
//   authToken: `${process.env.DATABASE_AUTH_TOKEN}`,
// });

// const adapter = new PrismaLibSQL(libsql);

interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
