// // lib/db.ts
// import { PrismaClient } from '../src/generated/prisma'
// // import { PrismaClient } from "@prisma/client";

// const prismaClientSingleton = () => {

// console.log("DEBUGGER env singleton", process.env.DATABASE_URL);  return new PrismaClient();
// };

// // To declare a global variable
// const prisma = globalThis.prisma ? globalThis.prisma : prismaClientSingleton();

// export default prisma;

// if( process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
