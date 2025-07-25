"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  acceptRequest,
  deleteRequest,
  sendRequest,
  unfriend,
} from "./action/action";
import FriendWindowClientCancelButton from "./FriendWindowClientCancelButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FriendWindowClient({
  image,
  alt,
  name,
  button1,
  button2,
  userId,
  otherUser,
  type,
  isAllFriends,
}: {
  image: string;
  alt: string;
  name: string;
  button1: string;
  button2: string;
  userId: string;
  otherUser: string;
  type?: string;
  isAllFriends?: boolean;
}) {
  const [cancel, setCancel] = useState<boolean>(false);
  const [reqId, setReqId] = useState<string>("");
  const [remove, setRemove] = useState<boolean>(false);

  const router = useRouter();

  return (
    <>
      {!remove ? (
        <div className="flex flex-col gap-1 bg-slate-100 rounded-lg p-3 text-center justify-center">
          <Link href={`/profile/${otherUser}`}>
            <Image
              src={image}
              alt={alt}
              width={128}
              height={128}
              className=" w-32 h-32 bg-fixed rounded-full object-cover"
            />
          </Link>

          <Link href={`/profile/${otherUser}`}>
            <span className=" text-xs font-normal hover:underline">{name}</span>
          </Link>

          {type === "accepting" && (
            <>
              {!isAllFriends && (
                <button
                  className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300 text-xs"
                  onClick={async () => {
                    await acceptRequest(otherUser, userId);
                    setRemove(true);
                  }}
                >
                  {button1}
                </button>
              )}
              <button
                className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300 text-xs"
                onClick={async () => {
                  await unfriend(userId, otherUser);
                  setRemove(true);
                }}
              >
                {isAllFriends ? "Unfriend" : button2}
              </button>
            </>
          )}
          {type === "requesting" &&
            (!cancel ? (
              <>
                <button
                  className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300 text-xs"
                  onClick={async () => {
                    const res: any = await sendRequest(userId, otherUser);
                    setReqId(res);
                    setCancel(true);
                  }}
                >
                  {button1}
                </button>
                <button
                  className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300 text-xs"
                  onClick={() => {
                    setRemove(true);
                  }}
                >
                  {button2}
                </button>
              </>
            ) : (
              <>
                <FriendWindowClientCancelButton
                  reqId={reqId}
                  setCancel={setCancel}
                />
                <button
                  className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300 text-xs"
                  onClick={() => {
                    setRemove(true);
                  }}
                >
                  {button2}
                </button>
              </>
            ))}
          {type === "refreshing" && (
            <>
              <button
                className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300 text-xs"
                onClick={async () => {
                  await deleteRequest(userId, otherUser);
                  await sendRequest(userId, otherUser);
                }}
              >
                {button1}
              </button>
              <button
                className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300 text-xs"
                onClick={() => {
                  deleteRequest(userId, otherUser);
                  setRemove(true);
                }}
              >
                {button2}
              </button>
            </>
          )}
          {type === "wish" && (
            <>
              <button
                className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300 text-xs"
                onClick={async () => {
                  router.push(`/profile/${otherUser}`);
                }}
              >
                {button1}
              </button>
              <button
                className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300 text-xs"
                onClick={() => {
                  setRemove(true);
                }}
              >
                {button2}
              </button>
            </>
          )}
          {!type && (
            <>
              <button
                className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300 text-xs"
                onClick={() => sendRequest(userId, otherUser)}
              >
                {button1}
              </button>
              <button className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300 text-xs">
                {button2}
              </button>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
