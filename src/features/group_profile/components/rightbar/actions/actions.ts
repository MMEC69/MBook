"use server";
import prisma from "@/lib/prisma/client";

export const joinGroup = async (groupId: string, userId: string) => {
  try {
    const res = await prisma.group.update({
      where: { id: groupId },
      data: {
        members: {
          push: userId,
        },
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const leaveGroup = async (groupId: string, userId: string) => {
  try {
    let group = await prisma.group.findUnique({
      where: {
        id: groupId,
      },
      select: { members: true, admin: true },
    });

    const updatedMembers = group?.members?.filter((member: string) => {
      return member !== userId;
    });

    if (group?.admin.includes(userId)) {
      const updatedAdmin = group?.admin?.filter((member: string) => {
        return member !== userId;
      });
      const resAdmin = await prisma.group.update({
        where: {
          id: groupId,
        },
        data: {
          admin: updatedAdmin,
        },
      });
    }

    const res = await prisma.group.update({
      where: {
        id: groupId,
      },
      data: {
        members: updatedMembers,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
