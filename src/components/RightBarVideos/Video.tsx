import React from "react";
import Image from "next/image";

export default function Video() {
  return (
    <div className="min-h-[512px] min-w-[95%]  relative">
      <Image
        src={"/pexels-jonathanborba-2917373.jpg"}
        fill
        className=" object-cover rounded-md"
        alt="Post Image"
      />
    </div>
  );
}
