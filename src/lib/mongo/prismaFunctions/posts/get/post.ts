"use server";
import prisma from "@/lib/prisma/client";
import { equal } from "assert";

export const getPosts = async () => {
  let res: any;
  try {
    res = await prisma.post.findMany({});
  } catch (error) {
    console.log(error);
  }
  return res;
};

export const getUserPosts = async (user: string) => {
  let res: any;
  try {
    res = await prisma.post.findMany({
      where: {
        user: user,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return res;
};

export const getUserPostsImgs = async (user: string, limit?: number) => {
  let res: any;
  let imgs: any = [];
  if (!limit) {
    limit = 5;
  }
  try {
    res = await prisma.post.findMany({
      where: {
        user: user,
      },
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.log(error);
  }
  res.map((post: any) => {
    post.img.map((img: any) => {
      if (img.length > 0) imgs.push(img);
    });
  });

  return imgs;
};

export const getGroupPostsImgs = async (group: string, limit?: number) => {
  let res: any;
  let imgs: any = [];
  if (!limit) {
    limit = 5;
  }
  try {
    res = await prisma.post.findMany({
      where: {
        group: group,
      },
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.log(error);
  }
  res.map((post: any) => {
    post.img.map((img: any) => {
      if (img.length > 0) imgs.push(img);
    });
  });

  return imgs;
};
