import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Interactions from "./Interactions";
import Comments from "./Comments";
export default function Post(props: any) {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={"/pexels-jonathanborba-2917373.jpg"}
            alt="User Account"
            width={40}
            height={40}
            className="size-10 rounded-full"
          />
          <span className="font-medium">Eronne Cooray</span>
        </div>
        <BsThreeDots size={16} color="#ed5fe1" />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={"/pexels-jonathanborba-2917373.jpg"}
            fill
            className=" object-cover rounded-md"
            alt="Post Image"
          />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          ratione qui quod iure quisquam quasi nisi aperiam praesentium dolorem
          modi explicabo magni nulla culpa, obcaecati cum ipsam quos natus
          voluptas.
        </p>
      </div>

      {/* Interaction */}
      <Interactions />
      <Comments />
    </div>
  );
}
