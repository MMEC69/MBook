"use server"

import prisma from "@/lib/prisma/client";

export const sendRequest = async (userId : string, otherUser : string) => {
    let res;
    let data = {
        requestor : userId,
        receiver : otherUser
    }
    try {
        res = await prisma.friendRequests.create({
            data : data
        });
        console.log(res);
    } catch (error) {
        console.log(error)
        console.log("Error: Unable to send a request");
    }
}