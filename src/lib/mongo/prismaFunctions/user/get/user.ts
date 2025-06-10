import prisma from "@/lib/prisma/client";

export const getUser = async (id: string) => {
  let res: any;
  try {
    res = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getBlocks = async (id: string) => {
  let res: any;
  try {
    res = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    return res.blocks;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const getFriends = async (id: string) => {
  let res: any;
  try {
    res = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    return res.friends;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const getFirstName = async (id: string) => {
  let res: any;
  try {
    res = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    return res.firstName;
  } catch (error) {
    console.log(error);
  }
  return "";
};

export const getLastName = async (id: string) => {
  let res: any;
  try {
    res = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    return res.lastName;
  } catch (error) {
    console.log(error);
  }
  return "";
};
