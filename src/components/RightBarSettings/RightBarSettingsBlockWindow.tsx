"use client";
import React, { useState } from "react";
import Image from "next/image";
import { unBlock } from "@/features/profile/components/Rightbar/action/action";

export default function RightBarSettingsBlockWindow({
  image,
  alt,
  name,
  button1,
  userId,
  profileId,
}: {
  image: string;
  alt: string;
  name: string;
  button1: string;
  userId: string;
  profileId: string;
}) {
  const [remove, setRemove] = useState(false);
  return (
    <>
      {!remove && (
        <div className="flex flex-col gap-1 bg-slate-100 rounded-lg p-3">
          <Image src={image} alt={alt} width={192} height={192} />
          <span className=" text-sm font-normal">{name}</span>
          <button
            className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300"
            onClick={async () => {
              await unBlock(userId, profileId);
              setRemove(true);
            }}
          >
            {button1}
          </button>
        </div>
      )}
    </>
  );
}
