"use server";

import prisma from "@/lib/prisma/client";

export const fetchPosts = async (userId: string) => {
  console.log("> Posts fetch initiation");

  if (!userId) return;

  try {
    const res = await prisma.post.findMany({
      where: {
        user: userId,
      },
    });
    console.log("> Posts fetch succesfully");
    return res;
  } catch (error) {
    console.log("> Posts fetch failure");
  }
};
