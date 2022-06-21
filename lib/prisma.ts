import { PrismaClient } from "@prisma/client";

declare global {
    // eslint-disable-next-line
    var prisma: PrismaClient;
}
// eslint-disable-next-line
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;

// import { PrismaClient } from "@prisma/client";

// add prisma to the NodeJS global type

// interface NodeJS {
//     Global: typeof global
// }

// declare global {namespace NodeJS {
//     interface Global {}
// }}

//     interface CustomNodeJsGlobal extends NodeJS.global {
//         prisma: PrismaClient;
//     }

//     // Prevent multiple instances of Prisma Client in development
//     declare const global: CustomNodeJsGlobal;

// const prisma = global.prisma || new PrismaClient();

// if (process.env.NODE_ENV === "development") global.prisma = prisma;

// export default prisma;
