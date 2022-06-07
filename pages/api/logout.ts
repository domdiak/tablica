import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

// const cookieOptions = {
//     httpOnly: true,
//     maxAge: 2592000,
//     path: "/",
//     sameSite: "Strict",
//     secure: process.env.NODE_ENV === "production",
// };

// function setCookie(
//     res: any,
//     name: string,
//     value: string,
//     options: Record<string, unknown> = {}
// ): void {
//     const stringValue =
//         typeof value === "object"
//             ? `j:${JSON.stringify(value)}`
//             : String(value);

//     res.setHeader(
//         "Set-Cookie",
//         cookie.serialize(name, String(stringValue, options))
//     );
// }

// export function clearUser(res: NextApiResponse): void {
//     setCookie(res, "ACCESS_TOKEN", "0", {
//         ...cookieOptions,
//         path: "/",
//         maxAge: 1,
//     });
// }

const cookieOptions = {
    httpOnly: true,
    maxAge: 24 * 60 * 60,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { key } = req.body;
    console.log({ key });

    if (req.method !== "POST")
        return res
            .status(405)
            .json({ status: "fail", message: "Method not allowed here!" });

    if (req.body.key === 23) {
        res.setHeader("Set-Cookie", [
            cookie.serialize("ACCESS_TOKEN", "", {
                ...cookieOptions,
                path: "/",
                maxAge: 1,
            }),
        ]);
    }

    return res.status(200).json({
        success: "Successfully logged out",
    });
};
