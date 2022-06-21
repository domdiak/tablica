import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
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

    const [newUser] = await prisma.user.findMany({
        where: { email },
    });

    expect(newUser.email).toBe(email);
    expect(bcrypt.compare(newUser.password, password)).toBeTruthy();
});

// it("should login an existing user", async () =>{
//     const email = `${uuidv4()}@test.com`;
//     const password = uuidv4();

//     await createUserAction({ prisma, email, password });

//     const loggedInUser = await prisma.user.findUnique({
//         where: {
//             email,
//         },
//     });

// docker ps

// docker exec -it eed2acdcfc99 psql -U dominik tests
