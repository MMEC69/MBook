"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SingleNotification({
  image,
  alt,
  option,
  time,
  desc,
  userId,
}: {
  image: string;
  alt: string;
  option: string;
  time?: string;
  desc: string;
  userId: string;
}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/friends/requests/received/${userId}`);
  };
  return (
    <div
      className="flex flex-row gap-5 bg-slate-100 items-center p-2 rounded-[10px] hover:bg-slate-200 hover:cursor-pointer"
      onClick={() => handleClick()}
    >
      <Image
        src={image}
        alt={alt}
        width={10}
        height={10}
        className="  w-10 h-10 bg-fixed rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <span className="">{option}</span>
        <div className="flex flex-col g-1">
          <span className="text-xs ">{desc}</span>
          {/* <span className="text-[10px]">{time}</span> */}
        </div>
      </div>
    </div>
  );
}
