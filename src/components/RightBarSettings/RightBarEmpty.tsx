import { fetchSession } from "@/utility/utility";
import Link from "next/link";
import React from "react";

export async function RightBarEmptyBlockList() {
  const userId = (await fetchSession()) as string;
  return (
    <div className="h-[200px] flex items-center">
      <span className=" text-xl text-pink-500">
        No one is Blocked yet, want to discover new friends{" "}
        <Link
          href={`/friends/${userId}`}
          className=" underline hover:text-pink-300"
        >
          Click here
        </Link>
      </span>
    </div>
  );
}
