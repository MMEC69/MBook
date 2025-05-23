import Image from "next/image";
import React from "react";

export default function FriendWindow({
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
  type: string;
}) {
  return (
    <div className="flex flex-col gap-1 bg-slate-100 rounded-lg p-3">
      <Image src={image} alt={alt} width={192} height={192} />
      <span className=" text-sm font-normal">{name}</span>
      <button className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300">
        {button1}
      </button>
      <button className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300">
        {button2}
      </button>
    </div>
  );
}
