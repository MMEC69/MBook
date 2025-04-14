import React from "react";
import Image from "next/image";

export default function RightBarSettingsPostWindow({
  image,
  alt,
  name,
  button1,
}: {
  image: string;
  alt: string;
  name: string;
  button1: string;
}) {
  return (
    <div className="flex flex-row gap-1 justify-between bg-slate-100 rounded-lg p-3">
      <div className="flex flex-row gap-3">
        <Image
          src={"/cat-4558651_1280.jpg"}
          alt={alt}
          width={192}
          height={192}
        />
        <div className="flex flex-col gap-3">
          <span className="text-[15px] ">Post Description</span>
          <div className="flex flex-col ">
            <div className="flex flex-row gap-1">
              <span>12</span>
              <span>Reacts</span>
            </div>
            <div className="flex flex-row gap-1">
              <span>12</span>
              <span>Comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4">
        <button className="bg-green-400 p-2 rounded-lg hover:cursor-pointer hover:bg-green-300 text-[15px]">
          Public
        </button>
        <button className="bg-green-400 p-2 rounded-lg hover:cursor-pointer hover:bg-green-300 text-[15px]">
          Private
        </button>
        <button className="bg-green-400 p-2 rounded-lg hover:cursor-pointer hover:bg-green-300 text-[15px]">
          Custom
        </button>
      </div>
    </div>
  );
}
