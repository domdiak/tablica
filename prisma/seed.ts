import { PrismaClient } from "@prisma/client";

import { userData, cardsData, categoryData } from "./mockData";

const prisma = new PrismaClient();

const run = async () => {
    await prisma.card.deleteMany({});
    await prisma.category.deleteMany({});
    await prisma.user.deleteMany({});

    await prisma.user.createMany({
        data: userData,
    });
    console.log("User data have been added");

    await prisma.category.createMany({
        data: categoryData,
    });
    console.log("Category data have been added");

    await prisma.card.createMany({
        data: cardsData,
    });
    console.log("Cards data have been added");
};

run()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
