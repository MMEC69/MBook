"use client";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
//no need to edit this
export default function CommentsClientSimple({
  comments,
  postId,
  user,
}: {
  comments: Comment[];
  postId: string;
  user: User;
}) {
  const [commentState, setCommentState] = useState(comments);
  return (
    <div>
      {/* Write */}
      <div className="flex items-center">
        <Image
          src={"/pexels-jonathanborba-2917373.jpg"}
          width={32}
          height={32}
          alt="Profile Image"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full gap-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-white p-2 rounded-lg outline-none flex-1"
          />
          <Image
            src={"/emojiSelector.png"}
            alt="Emoji"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Comments */}
      <div className="">
        {/* Comment */}
        <div className="flex gap-4 justify-between mt-6">
          {/* Avatar */}
          <Image
            src={"/pexels-jonathanborba-2917373.jpg"}
            width={40}
            height={40}
            alt="Profile Image"
            className="w-10 h-10 rounded-full"
          />

          {/* Desc */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Eronne Cooray</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, corporis. Ut molestias voluptas quis amet sint quasi
              hic dignissimos placeat atque, reiciendis corporis eligendi a
              molestiae reprehenderit officiis harum modi.
            </p>
            <div className="flex items-center gap-8 text-xs to-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src={"/heart2.png"}
                  alt="Like"
                  width={12}
                  height={12}
                  className="cursor-pointer w-3 h-3"
                />
                <span className="text-pink-700"> | </span>
                <span className="text-pink-700">123 Likes</span>
              </div>
            </div>
          </div>

          {/* Icon */}
          <BsThreeDots
            size={16}
            color="pink"
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
}
