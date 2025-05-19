import prisma from "@/lib/prisma/client";

export const getUser = async (id: string) => {
  let res: any;
  try {
    res = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return res;
};

export const getBlocks = async (id: string) => {
  let res: any;
  try {
    res = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return res.blocks;
};

export const getFriends = async (id: string) => {
  let res: any;
  try {
    res = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return res.friends;
};
