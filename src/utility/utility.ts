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
    let userList: any;
    let reqList : any;
    let userListF : any;

    try {
        userList = await prisma.user.findMany({
            where : {
                NOT : {
                    id: userId
                }
            }
        });
        reqList = await prisma.friendRequests.findMany();

        userListF = userList.filter((user: any) => {
            for (let index = 0; index < reqList.length; index++) {
                return user.id !== reqList[index].receiver && user.id !== reqList[index].requestor;
            }
        });
        if (userListF.length < 1)  userListF = userList  
         

        
    } catch (error) {
        console.log("Error");
    }
    
    console.log("> fetchSuggestedUsers ended");
    return userListF;
}

//This function need to be changed after implementing algorithm
export const fetchPeopleYouMayKnow = async (userId : string) => {
    console.log("> fetchPeopleYouMayKnow inititated");
    let userList: any;
    let reqList : any;
    let userListF : any;

    try {
        userList = await prisma.user.findMany({
            where : {
                NOT : {
                    id: userId
                }
            }
        });
        reqList = await prisma.friendRequests.findMany();

        userListF = userList.filter((user: any) => {
            for (let index = 0; index < reqList.length; index++) {
                return user.id !== reqList[index].receiver && user.id !== reqList[index].requestor;
            }
        });
        if (userListF.length < 1)  userListF = userList  
         

        
    } catch (error) {
        console.log("Error");
    }
    
    console.log("> fetchPeopleYouMayKnow ended");
    return userListF;
}

export const fetchFriends = async (userId : string) => {
    console.log("> fetchFriends inititated");
    let userList : any;
    let user;
    try {
        user = await prisma.user.findFirst({
            where: {id: userId}
        });
        userList = convertUserIdToUserList(user?.friends);
    } catch (error) {
        console.log("Error");
    }
    
    console.log("> fetchFriends ended");
    return userList;
}  

export const fetchRequests = async (user : string, requestor : boolean) => {
    console.log("> fetchRequests inititated");
    let reqList: any;
    let list: any;
    let userList: any;
    try {
        if(requestor) {
            reqList = await prisma.friendRequests.findMany({
                where: {requestor: user}
            })
            list = reqList.map((singleSentRequest : any) => {
                return singleSentRequest.receiver;
            });
            userList = await convertUserIdToUserList(list);
        } 
        else {
                reqList = await prisma.friendRequests.findMany({
                where: {receiver: user}
            });
            list = reqList.map((singleSentRequest : any) => {
                return singleSentRequest.requestor;
            });
            userList = await convertUserIdToUserList(list);
        };

        
       
    } catch (error) {
        console.log("Error: Unable to fetch reqests");
    }
    console.log("> fetchSentRequests ended");
    return userList;
}  

const convertUserIdToUserList = async (list : any) => {
    let userList = [];
    let user : any;
    for (let index = 0; index < list.length; index++) {
        try {
            user = await prisma.user.findFirst({
                where: {id: list[index]}
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