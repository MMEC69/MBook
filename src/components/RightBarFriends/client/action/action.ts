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

export const deleteRequest = async (requestor : string, receiver : string) => {
    console.log("> deleteRequest initiated");
   let res : any;
   try {
    res = await prisma.friendRequests.findFirst({
        where : {
            requestor : requestor,
            receiver : receiver
        }
    }) 
    res = await prisma.friendRequests.delete({
        where : {
            id: res.id
        }
    }) 
   } catch (error) {
        console.log(error)
        console.log("Error: Unable to delete a request");
   }
   console.log("> deleteRequest ended");
}


export const acceptRequest = async (requestor : string, receiver : string) => {
    console.log("> acceptRequest initiated");
   let res : any;
   let del : any;

   try {
    res = await prisma.friendRequests.findFirst({
        where : {
            requestor : requestor,
            receiver : receiver
        }
    });
    await prisma.user.update({
        where : {
            id : receiver
        },
        data : {
            friends : {
                push : requestor
            }
        }
    });
   
    del = await prisma.friendRequests.delete({
        where : {
            id: res.id
        }
    }) 
   } catch (error) {
        console.log(error)
        console.log("Error: Unable to delete a request");
   }
   console.log("> acceptRequest ended");
}
