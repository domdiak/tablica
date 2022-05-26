import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Set-Cookie", [
        cookie.serialize("ACCESS_TOKEN", "", {
            expires: new Date(0),
            path: "/",
        }),
    ]);

    return res.status(200).json({
        success: "Successfully logged out",
    });
};
