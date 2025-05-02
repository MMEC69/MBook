"use client";

import React from "react";
import { MdBlock } from "react-icons/md";
import { block } from "../action/action";

export default function BlockBtn({
  userId,
  profileId,
}: {
  userId: string;
  profileId: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1 items-center"></div>
      <div className="flex gap-1 items-center hover:cursor-pointer">
        <MdBlock color="pink" className=" hover:opacity-70" />
        <span
          className=" text-pink-400 hover:text-pink-300 hover:underline hover:cursor-pointer"
          onClick={async () => {
            await block(userId, profileId);
          }}
        >
          Block
        </span>
      </div>
    </div>
  );
}
