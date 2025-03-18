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
