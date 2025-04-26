"use server";

import prisma from "@/lib/prisma/client";

export const fetchProfileIntroInfo = async (userId: string) => {
  console.log("> ProfileIntroInfo fetch initiation");

  if (!userId) return;

  try {
    const userProfileInfoRes = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    const postsRes = await prisma.post.findMany({
        where:{
            user: userId
        }
    })


    const profileIntroInfo : object = {
        firstName : userProfileInfoRes?.firstName,
        lastName: userProfileInfoRes?.lastName,
        cover : userProfileInfoRes?.cover,
        avatar: userProfileInfoRes?.avatar,
        friends: userProfileInfoRes?.friends.length,
        posts: postsRes.length
    };
    
    console.log("> ProfileIntroInfo fetch succesfully");
    return profileIntroInfo;
  } catch (error) {
    console.log("> ProfileIntroInfo fetch failure");
  }
};

export const checkRecivedReq = async (user : string, receiver: string) => {
  console.log("> checkRecivedReq fetch initiation");
  let req : any;
  // try {
  //   req = await prisma.friendRequests.findFirst({
  //     where : {

  //     }
  //   })
  // } catch (error) {
    
  // }
  console.log("> checkRecivedReq fetch initiation");
  return false;
}

export const checkSentReq = async (user : string, requestor : string) => {
  console.log("> checkSentReq fetch initiation");
  let req : any;
  let isReq : boolean = false;
  try {
    req = await prisma.friendRequests.findFirst({
      where : {
        requestor : requestor,
        receiver : user
      }
    })
    if (req) isReq = true;
  } catch (error) {
    console.log("> Error : Didn't fetch req");
  }
  console.log("> checkSentReq fetch initiation");
  return isReq;
}
