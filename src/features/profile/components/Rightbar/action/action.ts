"use server";

import prisma from "@/lib/prisma/client";

export const fetchPhotos = async (userId: string) => {
  console.log("> Photos fetch initiation");

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

    console.log("> Photos fetch succesfully");
    return photos;
  } catch (error) {
    console.log("> Photos fetch failure");
  }
};

//====================================================
export const fetchUserDetails = async (userId: string) => {
    console.log("> UserDetails fetch initiation");
  
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
        phone: res?.phone
      }
  
      console.log("> UserDetails fetch succesfully");
      return userDetails;
    } catch (error) {
      console.log("> UserDetails fetch failure");
    }
  };
  