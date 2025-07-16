import React from "react";
import Image from "next/image";

export default function SingleNotification({
  image,
  alt,
  option,
  time,
  desc,
}: {
  image: string;
  alt: string;
  option: string;
  time?: string;
  desc: string;
}) {
  return (
    <div className="flex flex-row gap-5 bg-slate-100 items-center p-2 rounded-[10px] hover:bg-slate-200 hover:cursor-pointer">
      <Image src={image} alt={alt} width={20} height={20} />
      <div className="flex flex-col gap-1">
        <span className="">{option}</span>
        <div className="flex flex-col g-1">
          <span className="text-xs ">{desc}</span>
          <span className="text-[10px]">{time}</span>
        </div>
      </div>
    </div>
  );
}
