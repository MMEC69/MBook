import prisma from "@/lib/prisma/client";

export const getGroups = async () => {
  try {
    const groups = await prisma.group.findMany();
    return groups;
  } catch (error) {
    console.log(error);
  }
  return [];
};
