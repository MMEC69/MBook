import Image from "next/image";
import React from "react";

export default function SearchResult() {
  return (
    <div className="bg-slate-200 w-full h-20 rounded-lg flex flex-row p-2 gap-2 items-center justify-between">
      <div className="flex flex-row gap-3 items-center">
        <Image
          src={"/man.png"}
          alt={"Profile Image"}
          width={48}
          height={48}
          className=" rounded-full"
        />
        <span className=" text-center align-middle">Name</span>
      </div>
      <div className="flex flex-row gap-1">
        <button className="bg-slate-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-slate-500">
          View Profile
        </button>
        {/* <button className="bg-pink-400">btn2</button> */}
      </div>
    </div>
  );
}
