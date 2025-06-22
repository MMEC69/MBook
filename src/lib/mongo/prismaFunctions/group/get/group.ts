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

export const getGroup = async (id: string) => {
  try {
    const group = await prisma.group.findFirst({
      where: {
        id: id,
      },
    });
    if (group) {
      return group;
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
  }
  return {};
};
