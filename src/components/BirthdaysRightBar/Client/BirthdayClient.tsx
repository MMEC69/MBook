import React from "react";
import Image from "next/image";

export default function BirthdayClient({ avatar }: { avatar: string }) {
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
        <span className="font-semibold">Eronne Cooray</span>
      </div>

      <Image
        src={"/cake2.png"}
        alt="Wish"
        width={21}
        height={21}
        className="cursor-pointer"
      />
    </div>
  );
}
