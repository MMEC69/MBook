import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function NavbarLeft() {
  return (
    <div className="flex flex-row justify-between pl-3 items-center gap-3">
      {/* <Image
        src="/temp_placeholder.png"
        alt="place_holder"
        width={16}
        height={16}
      /> */}
      <Image
        src="/temp_placeholder.png"
        alt="place_holder"
        width={32}
        height={32}
      />
      <div className="flex flex-row justify-between items-center gap-1 bg-white h-8 rounded p-1">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none p-0.5 rounded"
        />
        <CiSearch size={32} color="pink" />
      </div>
    </div>
  );
}
