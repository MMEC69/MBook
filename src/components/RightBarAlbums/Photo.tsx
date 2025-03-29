import React from "react";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Description */}
      <div className=" block">
        <div className="min-h-[512px] max-w-[512px]  relative">
          <Image
            src={"/pexels-jonathanborba-2917373.jpg"}
            fill
            className=" object-cover rounded-md"
            alt="Post Image"
          />
        </div>
      </div>
    </div>
  );
}
