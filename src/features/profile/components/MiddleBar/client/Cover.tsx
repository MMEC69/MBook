"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Cover({
  src,
  setOpen,
}: {
  src?: string;
  setOpen: any;
}) {
  return (
    <>
      <Image
        src={src || "/yellow-mountains-532857_1280.jpg"}
        alt="Cover photo"
        fill
        className=" object-cover rounded-md hover:cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      />
    </>
  );
}
