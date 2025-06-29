"use client";
import Image from "next/image";
import React, { useState } from "react";
import ConfirmBoxPopUp from "./ConfirmationBoxPopUp";

export default function SingleMember(member: { member?: any }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="bg-slate-200 w-full h-28 rounded-lg flex flex-row p-2 gap-2 items-center justify-between">
      <div className="flex flex-row gap-3 items-center">
        <Image
          src={"/man.png"}
          alt={"Profile Image"}
          width={48}
          height={48}
          className=" rounded-full"
        />
        <div className="flex flex-col">
          <span className=" text-left align-middle text-lg">Name</span>
          <span className=" text-left align-middle text-xs text-green-500">
            member
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <button
          className="bg-slate-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-slate-500"
          onClick={() => handleOpen()}
        >
          View Profile
        </button>
        <button
          className="bg-green-600 text-white px-2 py-1 rounded-lg text-sm hover:opacity-80"
          onClick={() => handleOpen()}
        >
          Make Admin
        </button>
        <button
          className="bg-red-600 text-white px-2 py-1 rounded-lg text-sm hover:opacity-80"
          onClick={() => handleOpen()}
        >
          Kick Out
        </button>
        {/* <button className="bg-pink-400">btn2</button> */}
      </div>
      {open && <ConfirmBoxPopUp setOpen={setOpen} />}
    </div>
  );
}
