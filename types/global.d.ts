import { PrismaClient } from "@prisma/client";

// To declare a global type
declare global {
  var prisma: PrismaClient | undefined;
}

export {};
