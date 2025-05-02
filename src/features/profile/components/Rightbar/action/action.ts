"use server";

import prisma from "@/lib/prisma/client";
import { User } from "@prisma/client";
import { unFriend } from "../../MiddleBar/action/action";
import { unfriend } from "@/components/RightBarFriends/client/action/action";

export const fetchPhotos = async (userId: string) => {
  // console.log("> Photos fetch initiation");

  if (!userId) return;

  try {
    const PostsRes = await prisma.post.findMany({
      where: {
        user: userId,
      },
    });
    let photos: any;
    PostsRes.map((post) => {
      post.img.map((singleImg) => {
        photos.push(singleImg);
      });
    });

    // console.log("> Photos fetch succesfully");
    return photos;
  } catch (error) {
    console.log(error);
    // console.log("> Photos fetch failure");
    // console.log(error);
  }
};

//====================================================
export const fetchUserDetails = async (userId: string) => {
  if (!userId) return;

  try {
    const res = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    const userDetails = {
      firstName: res?.firstName,
      lastName: res?.lastName,
      userName: res?.userName,
      desc: res?.desc,
      lives: res?.lives,
      birthday: res?.birthday,
      gender: res?.gender,
      education: res?.education,
      works: res?.works,
      love: res?.love,
      links: res?.links,
      phone: res?.phone,
    };
    return userDetails;
  } catch (error) {
    console.log(error);
  }
};

export const block = async (userId: string, profileId: string) => {
  let isFriend: boolean = false;
  let res: any;

  try {
    res = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
  } catch (error) {
    console.log(error);
  }

  if (res.friends.includes(profileId)) isFriend = true;

  if (isFriend) {
    unfriend(userId, profileId);
  }

  // add to the block list
  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        blocks: {
          push: profileId,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
  return;
};
