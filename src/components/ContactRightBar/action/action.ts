"use server";

import prisma from "@/lib/prisma/client";

export const fetchContacts = async (userId: string) => {
  console.log("> Contacts fetch initiation");

  if (!userId) return;

  try {
    const res = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    console.log("> Contacts fetch succesfully");
    return res?.friends;
  } catch (error) {
    console.log("> Contacts fetch failure");
  }
};
