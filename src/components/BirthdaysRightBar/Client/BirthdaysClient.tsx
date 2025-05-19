import React from "react";
import Link from "next/link";
import BirthdayClient from "./BirthdayClient";
import Image from "next/image";
import { User } from "@prisma/client";

export default function BirthdaysClient({
  birthdays,
  userId,
}: {
  birthdays: any;
  userId: string;
}) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
        <Link
          href={`/friends/birthdays/${userId}`}
          className="text-pink-600 text-xs hover:underline"
        >
          See all
        </Link>
      </div>

      {/* Birthday */}
      {birthdays.map((birthday: User) => {
        const defaultUserAvatar =
          birthday.gender === "Male" ? "/man.png" : "woman.png";
        return (
          <BirthdayClient
            key={birthday.id}
            avatar={birthday.avatar || defaultUserAvatar}
          />
        );
      })}

      {/* Upcoming */}
      <div className=" p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src={"/cake2.png"} alt="Wish" width={24} height={24} />
        <Link href="/" className=" flex flex-col gap-1 text-xs">
          <span className=" text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className=" text-gray-700">See other upcoming birthdays</span>
        </Link>
      </div>
    </div>
  );
}
