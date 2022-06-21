import { PrismaClient, User } from "@prisma/client";
// import prisma from "../../lib/prisma";
// import { User } from "../../APIResponseTypes";

export interface CreateUserActionParams {
    prisma: PrismaClient;
    email: string;
    password: string;
}

const createUserAction = async ({
    prisma,
    email,
    password,
}: CreateUserActionParams): Promise<User> => {
    return prisma.user.create({ data: { email, password } });
};

export default createUserAction;

// const createUserAction = async ({
//     prisma,
//     email,
//     password,
// }: CreateUserActionParams): Promise<User> => {
//     return prisma.user.create({ data: { email, password } });
// };
// export default createUserAction;
