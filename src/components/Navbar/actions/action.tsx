"use server";
import prisma from "@/lib/prisma/client";
import { redirect } from "next/navigation";
import { z } from "zod";

const searchSchema = z.object({
  search: z.string().trim().min(3, { message: "Invalid name" }),
});

export const search = async (
  prevState: any,
  payload: { formData: FormData; userId: string }
) => {
  const { userId, formData } = payload;
  const result = searchSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return false;
  }

  redirect(`/search/${result.data.search}`);
};

export const getNotificationsDetails = async (notifications: any[]) => {
  let notificationDetails: any[] = [];
  try {
    for (let index = 0; index < notifications.length; index++) {
      const notification = notifications[index];
      const senderInfo = await prisma.user.findFirst({
        where: {
          id: notification.sender,
        },
      });
      if (!senderInfo) continue;
      const notificationDetail = {
        id: notification.id,
        sender: notification.sender,
        mainReciver: notification.mainReciver,
        recivers: notification.recivers || [],
        mainReciverDetails: {
          id: senderInfo.id,
          name: `${senderInfo.firstName} ${senderInfo.lastName}`,
          avatar: senderInfo.avatar
            ? senderInfo.avatar
            : senderInfo.gender === "Male"
            ? "/man.png"
            : "woman.png",
        },
      };
      notificationDetails.push(notificationDetail);
    }
    return notificationDetails;
  } catch (error) {
    console.log(error);
  }
};

//=================================
export const getJoinedGroups = async (userId: string) => {
  // need to change this method as number of groups increases
  let membershipGroups: any[] = [];
  try {
    const groups = await prisma.group.findMany();
    for (let index = 0; index < groups.length; index++) {
      const group = groups[index];
      for (let index = 0; index < group.members.length; index++) {
        const member = group.members[index];
        if (member === userId) {
          membershipGroups.push(group);
          break;
        }
      }
    }
    return groups;
  } catch (error) {
    console.log(error);
  }
  return [];
};

//==========================
export const changeTheme = async (userId: string) => {
  try {
    const res = await prisma.theme.findFirst({
      where: { userId: userId },
    });
    if (!res) {
      const res = await prisma.theme.create({
        data: {
          userId: userId,
          isDark: true,
        },
      });
    }
    if (res) {
      let newColor = false;
      if (res.isDark) {
        newColor = false;
      } else {
        newColor = true;
      }
      const newTheme = await prisma.theme.update({
        where: {
          id: res.id,
        },
        data: {
          isDark: newColor,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTheme = async (userId: string) => {
  try {
    const res = await prisma.theme.findFirst({
      where: {
        userId: userId,
      },
    });
    return res?.isDark;
  } catch (error) {
    console.log(error);
  }
  return false;
};
