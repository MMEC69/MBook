"use server";

import prisma from "@/lib/prisma/client";

export const getSearchResults = async (searchItem: string) => {
  try {
    const res = await prisma.user.findMany({
      where: {
        firstName: searchItem,
      },
    });
    if (res) return res;
  } catch (error) {
    console.log(error);
  }
  return [];
};
