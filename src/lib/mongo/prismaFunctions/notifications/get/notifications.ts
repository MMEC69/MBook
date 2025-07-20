import prisma from "@/lib/prisma/client";

export const getNotifications = async (mainReciver: string) => {
  try {
    const res = await prisma.notifications.findMany({
      where: {
        mainReceiver: mainReciver,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
