"use server"

import prisma from "@/lib/prisma/client";

export const fetchUserInfo = async (userId : string) => {
    console.log("> profile card user fetch initiation");
    
    if(!userId) return;

    try {
        const res = await prisma.user.findFirst({
            where: {
                id: userId
            },
        });
        console.log("> profile card user fetch succesfully");
        return res;
    } catch (error) {
        console.log("> profile card user fetch failure");
    }
}