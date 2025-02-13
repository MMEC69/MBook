import React from "react";
import { FaHome } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { FaStore } from "react-icons/fa";

export default function NavbarMiddle() {
  return (
    <div className="hidden lg:flex gap-20 p-3 justify-center items-center">
      <FaHome size={32} color="#fff" className=" cursor-pointer" />
      <FaVideo size={32} color="#fff" className=" cursor-pointer" />
      <TiGroup size={32} color="#fff" className=" cursor-pointer" />
      <FaStore size={32} color="#fff" className=" cursor-pointer" />
    </div>
  );
}
