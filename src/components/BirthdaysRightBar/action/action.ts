"use server";
// complete -> to filter birthdays
import prisma from "@/lib/prisma/client";

export const fetchBirthdays = async (userId: string) => {
  if (!userId) return;

  try {
    // fetch the friend list
    const res = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
