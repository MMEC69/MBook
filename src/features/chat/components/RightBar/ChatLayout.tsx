"use client";
import React, { useState } from "react";
import SingleChatUser from "./SingleChatUser";
import Message from "./Message";
import { getMessages, sendMessage } from "./actions/actions";

export default function ChatLayout({
  friends,
  userId,
}: {
  friends: any[];
  userId: string;
}) {
  const [messages, setMessages] = useState<any>([]);
  const [chatUser, setChatUser] = useState("");
  const [message, setMessage] = useState("");

  return (
    //chat members //chat place
    //chat input
    <div className="w-full h-[85vh] flex flex-col gap-1 p-1 rounded-lg">
      <div className="w-full h-[89%] flex flex-row gap-1 rounded-lg bg-slate-200 p-1">
        <div className="w-[20%] h-full rounded-lg bg-slate-300 flex flex-col gap-1 p-1 ">
          {(friends?.length < 1 || !friends) && (
            <span className="text-sm text-pink-400 bg-white p-1 rounded-lg">
              Go find some friends
            </span>
          )}
          {friends?.length > 0 &&
            friends.map((friend: any) => {
              return (
                <SingleChatUser
                  key={friend.id}
                  name={`${friend.firstName} ${friend.lastName}`}
                  setChatUser={setChatUser}
                  user1={friend.id}
                  user2={userId}
                  setMessages={setMessages}
                />
              );
            })}
          {/* <SingleChatUser />
          <SingleChatUser />
          <SingleChatUser />
          <SingleChatUser />
          <SingleChatUser /> */}
        </div>
        <div className="w-[80%] h-[510px] rounded-lg bg-white flex flex-col gap-1 p-1 overflow-y-scroll">
          {messages.map((message: any) => {
            // console.log(message);
            return (
              <Message
                key={message.messageDetails.id}
                sender={`${message.senderDetails.firstName} ${message.senderDetails.lastName}`}
                message={message.messageDetails.message}
              />
            );
          })}
          {/* <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message /> */}
        </div>
      </div>
      <div className="w-full h-[10%] rounded-lg bg-slate-200">
        <div className="h-full flex flex-row justify-between align-middle p-1 rounded-lg">
          <input
            type="text"
            className=" w-[95%] rounded-lg text-lg px-2 outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className=" p-1 bg-pink-400 px-2 rounded-lg text-white hover:opacity-85"
            onClick={async () => {
              const res = await sendMessage(chatUser, userId, message);
              const updatedMessages = await getMessages(chatUser);
              setMessages(updatedMessages);
              setMessage("");
              // setChatUser(chatUser);
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
