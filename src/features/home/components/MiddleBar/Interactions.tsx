import Image from "next/image";
import React from "react";

export default function Interactions() {
  return (
    <div className="flex items-center justify-between text-sm my-4">
      <div className="flex gap-8">
        <div className="flex items-center gap-4 bg-pink-100 p-2 rounded-xl">
          <Image
            src={"/heart2.png"}
            width={16}
            height={16}
            alt="like button"
            className="cursor-pointer"
          />
          <span className="text-pink-700"> | </span>
          <span className="text-pink-700">
            123 <span className="hidden md:inline">Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-pink-100 p-2 rounded-xl">
          <Image
            src={"/comment.png"}
            width={16}
            height={16}
            alt="comment button"
            className="cursor-pointer"
          />
          <span className="text-pink-700"> | </span>
          <span className="text-pink-700">
            123 <span className="hidden md:inline">Comments</span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-pink-100 p-2 rounded-xl">
        <Image
          src={"/share.png"}
          width={16}
          height={16}
          alt="share button"
          className="cursor-pointer"
        />
        <span className="text-pink-700"> | </span>
        <span className="text-pink-700">
          123 <span className="hidden md:inline">Shares</span>
        </span>
      </div>
    </div>
  );
}
