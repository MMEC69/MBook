"use server";

import prisma from "@/lib/prisma/client";

export const fetchPosts = async (userId: string) => {
  if (!userId) return;

  try {
    const res = await prisma.post.findMany({
      where: {
        user: userId,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
