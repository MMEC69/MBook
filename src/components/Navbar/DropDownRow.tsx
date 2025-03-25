import React from "react";
import Image from "next/image";

export default function DropDownRow({
  image,
  alt,
  option,
  time,
}: {
  image: string;
  alt: string;
  option: string;
  time?: string;
}) {
  return (
    <div className="flex flex-row gap-5 bg-slate-100 items-center p-2 rounded-[10px] hover:bg-slate-200 hover:cursor-pointer">
      <Image src={image} alt={alt} width={20} height={20} />
      <p>
        {option} <br />
        <span className="text-[10px]">{time}</span>
      </p>
    </div>
  );
}
