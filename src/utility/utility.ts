import { cookies } from "next/headers";
import { decrypt } from "@/features/login/lib/session";
import prisma from "@/lib/prisma/client";
import { User } from "@prisma/client";

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

//This function need to be changed after implementing algorithm
export const fetchSuggestedUsers = async (userId : string) => {
    console.log("> fetchSuggestedUsers inititated");
    let userList = [{}];
    let sentRequestList : any= [{}];
    let freshUserList = [{}];

    try {
        userList = await prisma.user.findMany();
        sentRequestList = await prisma.friendRequests.findMany();

        freshUserList = userList.filter((user: any) => {
            for (let index = 0; index < sentRequestList.length; index++) {
                return user.id !== sentRequestList[index].receiver && user.id !== userId;
            }
        });

        
    } catch (error) {
        console.log("Error");
    }
    
    console.log("> fetchSuggestedUsers ended");
    return freshUserList;
}

//This function need to be changed after implementing algorithm
export const fetchPeopleYouMayKnow = async (userId : string) => {
    console.log("> fetchPeopleYouMayKnow inititated");
    let userList = [{}];
    let sentRequestList : any= [{}];
    let freshUserList = [{}];

    try {
        userList = await prisma.user.findMany();
        sentRequestList = await prisma.friendRequests.findMany();

        freshUserList = userList.filter((user: any) => {
            for (let index = 0; index < sentRequestList.length; index++) {
                return user.id !== sentRequestList[index].receiver && user.id !== userId;
            }
        });

        
    } catch (error) {
        console.log("Error");
    }
    
    console.log("> fetchPeopleYouMayKnow ended");
    return freshUserList;
}

export const fetchFriends = async (userId : string) => {
    console.log("> fetchFriends inititated");
    let userList = [{}];
    let user;
    try {
        user = await prisma.user.findFirst({
            where: {id: userId}
        });
        if(user) userList = user.friends;
    } catch (error) {
        console.log("Error");
    }

    console.log("> fetchFriends ended");
    return userList;
}  

export const fetchSentRequests = async (requestor : string) => {
    console.log("> fetchSentRequests inititated");
    let sentRequestList = [{}];
    let sentList = [{}];
    let userList = [];
    try {
        sentRequestList = await prisma.friendRequests.findMany({
            where: {requestor: requestor}
        });
        
        sentList = sentRequestList.map((singleSentRequest : any) => {
            return singleSentRequest.receiver;
        });
        userList = await convertRequestsToUserList(sentList);
       
    } catch (error) {
        console.log("Error: Unable to fetch reqests");
    }
    console.log("> fetchSentRequests ended");
    return userList;
}  

export const fetchReceivedRequests = async (receiver : string) => {
    console.log("> fetchReceivedRequests inititated");
    let receivedRequestList = [{}];
    let userList = [{}];
    try {
        receivedRequestList = await prisma.friendRequests.findMany({
            where: {receiver: receiver}
        });
        userList = receivedRequestList.filter((singleSentRequest : any) => {
            return {id : singleSentRequest.id, request : singleSentRequest.requestor};
        })
    } catch (error) {
        console.log("Error");
    }

    console.log("> fetchReceivedRequests ended");
    return userList;
}  

const convertRequestsToUserList = async (sentList : any) => {
    let userList = [];
    let user : any;
    for (let index = 0; index < sentList.length; index++) {
        try {
            user = await prisma.user.findFirst({
                where: {id: sentList[index]}
            });
        } catch (error) {
            userList.push({});
            console.log("Error: User was unable to fetch for sent request");
        }
        userList.push(user);
    }
    return userList;
}

export const numberConverter = (number: string) => {

} 