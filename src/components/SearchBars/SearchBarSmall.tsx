import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBarSmall() {
  return (
    <div className="w-min flex flex-row gap-2 mb-3 rounded-lg bg-white">
      <input type="text" className=" rounded-lg p-1 outline-none" />
      <CiSearch size={32} color="pink" className="" />
    </div>
  );
}
