import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/features/login/lib/session";

export default async function middelware (req: NextRequest){
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);
    const user = session?.userId;

    if(!user){
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    return NextResponse.next();
} 

export const config = {
    matcher: [
        "/home/:userId*", 
        "/profile/:userId*", 
        "/chat/:userId*", 
        "/events/:userId*", 
        "/groups/:userId*", 
        "/reels/:userId*", 
        "/shop/:userId*", 
        "/settings/:userId*", 
        "/videos/:userId*", 
        ]
}