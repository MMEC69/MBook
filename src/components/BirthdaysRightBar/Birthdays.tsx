import Link from "next/link";
import React from "react";
import Birthday from "./Birthday";
import Image from "next/image";
import { fetchSession } from "@/utility/utility";
import { fetchBirthdays } from "./action/action";

export default async function Birthdays() {
  const userId = (await fetchSession()) as string;
  const posts: any = await fetchBirthdays(userId);
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
      <Birthday />
      <Birthday />
      <Birthday />
      <Birthday />

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
