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
