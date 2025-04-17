import { cookies } from "next/headers";
import { decrypt } from "@/features/login/lib/session";
import prisma from "@/lib/prisma/client";

export const sleep = async (seconds : number) => {
    return new Promise((resolve) => setTimeout(resolve, seconds*1000));
}

export const dateConverter =  (date : any) => {
    const newFormat = new Intl.DateTimeFormat("en-us", {
        dateStyle : "full"
    })
    return newFormat;
}

export const fullDateConverter =  (date : any) => {
    const convertedDate = new Date(date);
    const newFormat = convertedDate.toLocaleDateString("en-us", {
        year : "numeric",
        month : "long",
        day : "numeric"
    });
    return newFormat;
}

export const JSONFetch = async (type : string, path : string, body : object ) => {
    const response = await fetch(path, {
        method : type,
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify(body)
    });
    return response;
}

export const fetchSession = async () => {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);
    let user = session?.userId;
    return user;
}

export const getDefaultAvatar = (gender? : string) => {
    let defaultUserAvatar : string = "/male.png";
    defaultUserAvatar = gender === "Male" ? "/man.png" : "/woman.png";
    return defaultUserAvatar;
}

export const fetchUser = async (userId : string) => {
    console.log("> fetchUser inititated");
    try {
        const user = await prisma.user.findFirst({
            where : {
                id : userId
            }
        });
        return user;
    } catch (error) {
        console.log("Error");
    }
    
    console.log("> fetchUser ended");
    return;
}

export const fetchPosts = async (userId : string) => {
    console.log("> fetchPosts inititated");
    try {
        const posts = await prisma.post.findMany({
            where : {
                user : userId
            }
        });
        return posts;
    } catch (error) {
        console.log("Error");
    }
    
    console.log("> fetchPosts ended");
    return;
    
}

export const checkBlockedUser = async (requestUser : string, requestedUser : string) => {
    console.log("> fetchPosts inititated");
    let isBlocked : boolean = false;
    const res = await prisma.block.findFirst({
        where : {
            user : requestUser,
            blocker : requestedUser
        }
    });
    if(res) isBlocked = true;
    console.log("> fetchPosts ended");
    return isBlocked;
}

export const fetchSuggestedUsers = async () => {
    console.log("> fetchSuggestedUsers inititated");
    let userList = [{}];
    try {
        userList = await prisma.user.findMany();
        
    } catch (error) {
        console.log("Error");
    }
    
    console.log("> fetchSuggestedUsers ended");
    return userList;
}

export const numberConverter = (number: string) => {

} 