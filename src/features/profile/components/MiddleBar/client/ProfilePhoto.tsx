"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ProfilePhoto({
  src,
  defaultUserAvatar,
  setOpen,
}: {
  src?: string;
  defaultUserAvatar: string;
  setOpen: any;
}) {
  return (
    <>
      <Image
        src={src || defaultUserAvatar}
        alt="Profile photo"
        width={128}
        height={128}
        className=" object-cover w-32 h-32 rounded-full absolute left-6 right-0 -bottom-16 ring-4 ring-white hover:cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      />
    </>
  );
}
