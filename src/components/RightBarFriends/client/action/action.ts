"use server"

import prisma from "@/lib/prisma/client";
import { FriendRequests } from "@prisma/client";

export const sendRequest = async (userId : string, otherUser : string) => {
    console.log("> sendRequest initiated");
    let res : FriendRequests;
    let data = {
        requestor : userId,
        receiver : otherUser
    }
    try {
        res = await prisma.friendRequests.create({
            data : data
        });
        return res?.id;
    } catch (error) {
        console.log(error)
        console.log("Error: Unable to send a request");
    }
    console.log("> sendRequest ended");
}

export const cancelRequest = async (reqId : string) => {
    console.log("> cancelRequest initiated");
   let res : any;
   try {
    res = await prisma.friendRequests.delete({
        where : {
            id : reqId
        }
    }) 
   } catch (error) {
        console.log(error)
        console.log("Error: Unable to send a request");
   }
   console.log("> cancelRequest ended");
}