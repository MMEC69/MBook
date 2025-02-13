import Image from "next/image";
import React from "react";

export default function ProfileCard() {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className=" h-20 relative">
        <Image
          src={"/cat-9389500_1280.jpg"}
          alt="Cover photo"
          fill
          className=" rounded-md object-cover"
        />
        <Image
          src={"/love-9347917_1280.jpg"}
          alt="Profile Photo"
          width={48}
          height={48}
          className=" rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className=" font-semibold">Eronne Cooray</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src={"/love-9347917_1280.jpg"}
              alt="Profile Photo"
              width={12}
              height={12}
              className=" rounded-full object-cover w-3 h-3"
            />
            <Image
              src={"/love-9347917_1280.jpg"}
              alt="Profile Photo"
              width={12}
              height={12}
              className=" rounded-full object-cover w-3 h-3"
            />
            <Image
              src={"/love-9347917_1280.jpg"}
              alt="Profile Photo"
              width={12}
              height={12}
              className=" rounded-full object-cover w-3 h-3"
            />
          </div>
          <span className="text-xs text-gray-500">200 Friends</span>
        </div>
        <button className="bg-pink-300 text-white text-xs rounded-md p-2">
          My Profile
        </button>
      </div>
    </div>
  );
}
