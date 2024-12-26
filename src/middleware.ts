import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/features/login/lib/session";
import { publicRoutes, protectedRoutes } from "./meta/meta";

export default async function middelware (req: NextRequest){
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublcRoutes = publicRoutes.includes(path);

    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if(isProtectedRoute && !session?.userId){
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    if(isPublcRoutes && session?.userId){
        return NextResponse.redirect(new URL("/home", req.nextUrl));
    }

    return NextResponse.next();
} 