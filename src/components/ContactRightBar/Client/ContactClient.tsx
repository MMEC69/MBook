import React from "react";
import Image from "next/image";

export default function ContactClient({
  firstName,
  lastName,
  avatar,
}: {
  firstName: string;
  lastName: string;
  avatar: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt="User Photo"
          width={40}
          height={40}
          className=" w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold">{`${firstName} ${lastName}`}</span>
      </div>

      <Image
        src={"/chat.png"}
        alt="chat"
        width={32}
        height={32}
        className="cursor-pointer"
      />
    </div>
  );
}
