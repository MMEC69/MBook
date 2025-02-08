import React from "react";
import Image from "next/image";

export default function StoryWindow() {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <Image
        src="/pexels-jonathanborba-2917373.jpg"
        alt=""
        width={80}
        height={80}
        className="size-20 rounded-full ring-2 ring-pink-200"
      />
      <span className="font-medium">Eronne</span>
    </div>
  );
}
