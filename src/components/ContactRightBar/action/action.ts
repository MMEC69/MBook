"use server";

import prisma from "@/lib/prisma/client";

export const fetchContacts = async (userId: string) => {
  if (!userId) return;

  try {
    const res = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    return res?.friends;
  } catch (error) {
    console.log(error);
  }
};
