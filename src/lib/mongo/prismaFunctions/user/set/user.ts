import prisma from "@/lib/prisma/client";

export const setBlocks = async (id: string, blocks: any) => {
  let res: any;
  try {
    res = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        blocks: blocks,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return res;
};

export const setCover = async (id: string, cover: string) => {
  let res: any;
  try {
    res = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        cover: cover,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return res;
};

export const setProfile = async (id: string, avatar: string) => {
  let res: any;
  try {
    res = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        avatar: avatar,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return res;
};
