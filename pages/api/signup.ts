import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const salt = bcrypt.genSaltSync();
    const { email, password } = req.body;
    console.log(email, password);

    let user;

    try {
        user = await prisma.user.create({
            data: {
                email,
                password: bcrypt.hashSync(password, salt),
            },
        });
    } catch (e) {
        console.log(here);
        res.status(401);
        res.json({ error: "User already exists" });
        return;
    }

    const token = jwt.sign(
        {
            email: user.email,
            id: user.id,
            time: Date.now(),
        },
        "hello",
        { expiresIn: "24h" }
    );

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("ACCESS_TOKEN", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60,
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        })
    );
    res.json(user);
};
