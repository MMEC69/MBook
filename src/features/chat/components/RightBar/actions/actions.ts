"use server";

import prisma from "@/lib/prisma/client";

export const getChatRoom = async (user1: string, user2: string) => {
  try {
    const res = await prisma.chatRoom.findMany();
    if (res.length < 1) {
      const res = await prisma.chatRoom.create({
        data: {
          users: [user1, user2],
        },
      });
      return res;
    }
    for (let i = 0; i < res.length; i++) {
      if (res[i].users.includes(user1) && res[i].users.includes(user2)) {
        // console.log(res[i]);
        return res[i];
      } else if (i === res.length - 1) {
        const newChatRoom = await prisma.chatRoom.create({
          data: {
            users: [user1, user2],
          },
        });
        return newChatRoom;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMessages = async (chatRoom: string) => {
  let messages: any[] = [];
  try {
    const res = await prisma.message.findMany({
      where: {
        chatRoom: chatRoom,
      },
    });
    if (res.length < 0) return [];
    for (let i = 0; i < res.length; i++) {
      const senderDetails = await prisma.user.findFirst({
        where: { id: res[i].sender },
      });
      messages.push({
        messageDetails: res[i],
        senderDetails: senderDetails,
      });
    }
    return messages;
  } catch (error) {
    console.log(error);
  }
  return messages;
};

export const sendMessage = async (
  chatRoom: any,
  sender: string,
  message: string
) => {
  //   console.log("$$$$$$$$$$$$$$$$$");
  //   console.log(chatRoom);
  try {
    const res = await prisma.message.create({
      data: {
        chatRoom: chatRoom.id,
        sender: sender,
        message: message,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
