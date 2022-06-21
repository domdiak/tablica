import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export interface CreateUserActionParams {
    prisma: PrismaClient;
    email: string;
    password: string;
}

const createUserAction = async ({
    prisma,
    email,
    password,
}: CreateUserActionParams) => {
    const salt = bcrypt.genSaltSync();

    const newUser = await prisma.user.create({
        data: {
            email,
            password: bcrypt.hashSync(password, salt),
            categories: {
                create: [
                    {
                        name: "Shortlist",
                    },
                    { name: "Applied" },
                    { name: "Interview" },
                    { name: "Rejected" },
                    { name: "Archived" },
                ],
            },
        },
    });
};

export default createUserAction;
