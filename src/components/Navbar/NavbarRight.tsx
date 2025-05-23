import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { User } from "@prisma/client";

export default async function NavbarRight({
  user,
  defaultUserAvatar,
}: {
  user: User;
  defaultUserAvatar: string;
}) {
  return (
    <div className="flex flex-row items-center justify-end pr-3">
      <div className="hidden lg:flex items-center justify-end gap-3">
        <Image
          src="/bell2.png"
          alt="place_holder"
          width={48}
          height={48}
          className=" w-9 h-9 rounded-full cursor-pointer bg-pink-200"
        />
        <Image
          src="/group.png"
          alt="place_holder"
          width={48}
          height={48}
          className=" w-9 h-9 rounded-full cursor-pointer bg-pink-300"
        />
        <Image
          src="/chat.png"
          alt="place_holder"
          width={48}
          height={48}
          className=" w-9 h-9 rounded-full cursor-pointer object-cover bg-pink-300"
        />
        <Image
          src={user.avatar || defaultUserAvatar}
          alt="place_holder"
          width={48}
          height={48}
          className=" w-9 h-9 rounded-full cursor-pointer bg-pink-200"
        />
      </div>

      <MobileMenu />
    </div>
  );
}
