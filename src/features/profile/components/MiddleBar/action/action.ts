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
      where: {
        user: userId,
      },
    });

    const profileIntroInfo: object = {
      firstName: userProfileInfoRes?.firstName,
      lastName: userProfileInfoRes?.lastName,
      cover: userProfileInfoRes?.cover,
      avatar: userProfileInfoRes?.avatar,
      friends: userProfileInfoRes?.friends.length,
      posts: postsRes.length,
    };

    console.log("> ProfileIntroInfo fetch succesfully");
    return profileIntroInfo;
  } catch (error) {
    console.log("> ProfileIntroInfo fetch failure");
  }
};

export const checkRecivedReq = async (user: string, receiver: string) => {
  console.log("> checkRecivedReq initiation");
  let req: any;
  let isReq: boolean = false;
  try {
    req = await prisma.friendRequests.findFirst({
      where: {
        requestor: user,
        receiver: receiver,
      },
    });
    if (req) isReq = true;
  } catch (error) {
    console.log("> Error : Didn't fetch req");
  }
  console.log("> checkRecivedReq ended");
  return isReq;
};

export const checkSentReq = async (user: string, requestor: string) => {
  console.log("> checkSentReq initiation");
  let req: any;
  let isReq: boolean = false;
  try {
    req = await prisma.friendRequests.findFirst({
      where: {
        requestor: requestor,
        receiver: user,
      },
    });
    if (req) isReq = true;
  } catch (error) {
    console.log("> Error : Didn't fetch req");
  }
  console.log("> checkSentReq initiation");
  return isReq;
};

export const checkFriend = async (profile: string, user: string) => {
  console.log("> checkFriend initiation");
  let friends: any = [];
  let isFriend: boolean = false;
  if (profile === user) return false;
  try {
    const res = await prisma.user.findFirst({
      where: {
        id: user,
      },
    });
    friends = res?.friends;
    isFriend = friends.includes(profile);
  } catch (error) {
    console.log("> Error : Didn't fetch friends");
  }
  console.log("> checkFriend initiation");
  return isFriend;
};

export const unFriend = async (user: string, friend: string) => {
  console.log("> unFriend initiation");

  try {
    // try to use different type of efficient method here
    const res = await prisma.user.findFirst({
      where: {
        id: user,
      },
    });
    const updatedFriendList = res?.friends.filter((singleFriend) => {
      return singleFriend !== friend;
    });
    const updatedRaw = await prisma.user.update({
      where: { id: user },
      data: {
        friends: updatedFriendList,
      },
    });
  } catch (error) {
    console.log("> Error : Didn't fetch friends");
  }
  try {
    // try to use different type of efficient method here
    const res = await prisma.user.findFirst({
      where: {
        id: friend,
      },
    });
    const updatedFriendList = res?.friends.filter((singleFriend) => {
      return singleFriend !== user;
    });
    const updatedRaw = await prisma.user.update({
      where: { id: friend },
      data: {
        friends: updatedFriendList,
      },
    });
  } catch (error) {
    console.log("> Error : Didn't fetch friends");
  }
  console.log("> unFriend ended");
};
