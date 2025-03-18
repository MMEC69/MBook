"use server";

import prisma from "@/lib/prisma/client";

export const fetchFriendRequests = async (userId: string) => {
  console.log("> FriendRequests fetch initiation");

  if (!userId) return;

  try {
    const res = await prisma.friendRequests.findMany({
      where: {
        receiver: userId,
      },
    });
    console.log("> FriendRequests fetch succesfully");
    return res;
  } catch (error) {
    console.log("> FriendRequests fetch failure");
  }
};
