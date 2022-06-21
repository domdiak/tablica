import { v4 as uuidv4 } from "uuid";
// import { PrismaClient } from "@prisma/client";
import createUserAction from "./createUserAction";
import prisma from "../../lib/prisma";

// Create data
// beforeAll (async () => {

// })

// Delete data
// afterAll(async () => {

// })

it("should create a new user", async () => {
    const email = `${uuidv4()}@test.com`;
    const password = uuidv4();

    await createUserAction({ prisma, email, password });

    const [savedUser] = await prisma.user.findUnique({
        where: { email },
    });

    expect(savedUser.email).toBe(email);
});
