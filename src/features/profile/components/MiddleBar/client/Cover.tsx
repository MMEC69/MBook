"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Cover({
  src,
  setOpen,
  isUsersProfile,
}: {
  src?: string;
  setOpen: any;
  isUsersProfile: boolean;
}) {
  return (
    <>
      <Image
        src={src || "/yellow-mountains-532857_1280.jpg"}
        alt="Cover photo"
        fill
        className=" object-cover rounded-md hover:cursor-pointer"
        // onClick={() => {
        //   setOpen(true);
        // }}
      />
      {isUsersProfile && (
        <Image
          src={"/edit.png"}
          alt={"edit"}
          width={24}
          height={24}
          className=" object-cover rounded-md cursor-pointer absolute right-2 bottom-2 hover:opacity-80"
          onClick={() => {
            setOpen(true);
          }}
        />
      )}
    </>
  );
}
