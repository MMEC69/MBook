import React from "react";
import Image from "next/image";

export default function Collection({
  image,
  alt,
  name,
  type,
  desc,
  date,
}: {
  image: string;
  alt: string;
  name: string;
  type: string;
  desc: string;
  date: string;
}) {
  return (
    <div className="flex flex-col gap-1 bg-slate-100 rounded-lg p-3">
      <Image src={"/cat-4558651_1280.jpg"} alt={alt} width={256} height={192} />
      <div className="flex flex-row justify-between">
        <span className=" text-base font-normal ">{name}</span>
        <span className=" text-xs font-normal">{date}</span>
      </div>
      <span className=" text-xs font-normal">{desc}</span>
    </div>
  );
}
