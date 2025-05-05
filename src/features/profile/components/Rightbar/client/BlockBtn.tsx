"use client";

import React, { useState } from "react";
import { MdBlock } from "react-icons/md";
import { block, unBlock } from "../action/action";

export default function BlockBtn({
  userId,
  profileId,
  blocked,
}: {
  userId: string;
  profileId: string;
  blocked: any;
}) {
  const [remove, setRemove] = useState(blocked);
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1 items-center"></div>
      <div className="flex gap-1 items-center hover:cursor-pointer">
        <MdBlock color="pink" className=" hover:opacity-70" />
        {!remove && (
          <span
            className=" text-pink-400 hover:text-pink-300 hover:underline hover:cursor-pointer"
            onClick={async () => {
              await block(userId, profileId);
              setRemove(true);
            }}
          >
            Block
          </span>
        )}
        {remove && (
          <span
            className=" text-pink-400 hover:text-pink-300 hover:underline hover:cursor-pointer"
            onClick={async () => {
              await unBlock(userId, profileId);
              setRemove(false);
            }}
          >
            Unblock
          </span>
        )}
      </div>
    </div>
  );
}
