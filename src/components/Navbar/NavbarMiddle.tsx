"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { FaStore } from "react-icons/fa";
import { redirect } from "next/navigation";

export default function NavbarMiddle({ userId }: any) {
  console.log(userId);
  return (
    <div className="hidden lg:flex gap-20 p-3 justify-center items-center">
      <FaHome
        size={32}
        color="#fff"
        className=" cursor-pointer"
        onClick={() => redirect(`/home/${userId}`)}
      />
      <FaVideo size={32} color="#fff" className=" cursor-pointer" />
      <TiGroup size={32} color="#fff" className=" cursor-pointer" />
      <FaStore size={32} color="#fff" className=" cursor-pointer" />
    </div>
  );
}
