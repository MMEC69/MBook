"use client";
import Image from "next/image";
import React from "react";
import { getChatRoom, getMessages } from "./actions/actions";

export default function SingleChatUser({
  name,
  setChatUser,
  user1,
  user2,
  setMessages,
}: {
  name: string;
  setChatUser: any;
  user1: string;
  user2: string;
  setMessages: any;
}) {
  return (
    <button
      className=" h-[10%] bg-slate-200 text-slate-600 hover:bg-slate-100  rounded-lg p-3 text-left flex flex-row gap-1"
      onClick={async () => {
        // console.log("*****************");
        const chatRoom = await getChatRoom(user1, user2);
        // console.log("*****************");
        // console.log(chatRoom);
        setChatUser(chatRoom);
        if (!chatRoom) return;
        const messages = await getMessages(chatRoom.id);
        setMessages(messages);
      }}
    >
      <Image src="/man.png" alt="User" width={24} height={24} className="" />
      {name}
    </button>
  );
}
