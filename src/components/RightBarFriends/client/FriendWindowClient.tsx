"use client";
import React, { useState } from "react";
import Image from "next/image";
import { acceptRequest, deleteRequest, sendRequest } from "./action/action";
import FriendWindowClientCancelButton from "./FriendWindowClientCancelButton";
import Link from "next/link";

export default function FriendWindowClient({
  image,
  alt,
  name,
  button1,
  button2,
  userId,
  otherUser,
  type,
}: {
  image: string;
  alt: string;
  name: string;
  button1: string;
  button2: string;
  userId: string;
  otherUser: string;
  type?: string;
}) {
  const [cancel, setCancel] = useState<boolean>(false);
  const [reqId, setReqId] = useState<string>("");
  const [remove, setRemove] = useState<boolean>(false);

  return (
    <>
      {!remove ? (
        <div className="flex flex-col gap-1 bg-slate-100 rounded-lg p-3">
          <Link href={`/profile/${otherUser}`}>
            <Image src={image} alt={alt} width={192} height={192} />
          </Link>

          <Link href={`/profile/${otherUser}`}>
            <span className=" text-sm font-normal hover:underline">{name}</span>
          </Link>

          {type === "accepting" && (
            <>
              <button
                className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300"
                onClick={async () => {
                  await acceptRequest(otherUser, userId);
                }}
              >
                {button1}
              </button>
              <button
                className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300"
                onClick={async () => {
                  await deleteRequest(otherUser, userId);
                  setRemove(true);
                }}
              >
                {button2}
              </button>
            </>
          )}
          {type === "requesting" &&
            (!cancel ? (
              <>
                <button
                  className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300"
                  onClick={async () => {
                    const res: any = await sendRequest(userId, otherUser);
                    setReqId(res);
                    setCancel(true);
                  }}
                >
                  {button1}
                </button>
                <button
                  className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300"
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
                  className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300"
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
                className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300"
                onClick={async () => {
                  await deleteRequest(userId, otherUser);
                  await sendRequest(userId, otherUser);
                }}
              >
                {button1}
              </button>
              <button
                className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300"
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
                className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300"
                onClick={async () => {}}
              >
                {button1}
              </button>
              <button
                className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300"
                onClick={() => {}}
              >
                {button2}
              </button>
            </>
          )}
          {!type && (
            <>
              <button
                className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300"
                onClick={() => sendRequest(userId, otherUser)}
              >
                {button1}
              </button>
              <button className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300">
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
