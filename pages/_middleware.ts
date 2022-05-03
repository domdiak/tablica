import { NextResponse } from "next/server";

const signedInPages = ["/"];

export default function middleware(req) {
    if (signedInPages.find((p) => p === req.nextUrl)) {
        const token = req.cookies.ACCESS_TOKEN;

        if (!token) {
            return NextResponse.redirect("/signin");
        }
    }
}
