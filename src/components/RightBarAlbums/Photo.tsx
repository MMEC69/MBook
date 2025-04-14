import React from "react";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="h-[256px] w-[256px]  relative">
      <Image
        src={"/pexels-jonathanborba-2917373.jpg"}
        fill
        className=" object-cover rounded-md"
        alt="Post Image"
      />
    </div>
  );
}
