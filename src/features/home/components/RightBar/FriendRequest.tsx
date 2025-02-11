import React from "react";
import Image from "next/image";

export default function FriendRequest() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={"/pexels-jonathanborba-2917373.jpg"}
          alt="User Photo"
          width={40}
          height={40}
          className=" w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold">Eronne Cooray</span>
      </div>
      <div className="flex gap-3 justify-end">
        <Image
          src={"/accept.png"}
          alt="Accept"
          width={21}
          height={21}
          className="cursor-pointer"
        />
        <Image
          src={"/reject.png"}
          alt="Reject"
          width={21}
          height={21}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
