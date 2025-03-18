"use server";
// complete -> to filter birthdays
import prisma from "@/lib/prisma/client";

export const fetchBirthdays = async (userId: string) => {
  console.log("> Birthdays fetch initiation");

  if (!userId) return;

  try {
    // fetch the friend list
    const res = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    console.log("> Birthdays fetch succesfully");
    return res;
  } catch (error) {
    console.log("> Birthdays fetch failure");
  }
};
