import React from "react";
import FriendWindow from "./FriendWindow";
import Link from "next/link";

export default function RightBarFriendRequestsXList({
  topic,
  type,
  seeAll,
}: {
  topic: string;
  type: string;
  seeAll?: string;
}) {
  let btn1 = "Yes";
  let btn2 = "No";

  if (type !== "accepting") {
    btn1 = "Add";
    btn2 = "Remove";
  }
  if (type === "refreshing") {
    btn1 = "Resend";
    btn2 = "Cancel";
  }
  if (type === "wish") {
    btn1 = "Wish";
    btn2 = "Remove";
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <span>{topic}</span>
        {seeAll !== undefined && (
          <>
            <Link href={seeAll} className="text-pink-600 text-xs">
              See all
            </Link>
          </>
        )}
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs overflow-y-hidden scrollbar-hide">
        <div className="flex flex-row gap-3 w-max ">
          <FriendWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
            button2={btn2}
          />
          <FriendWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
            button2={btn2}
          />
          <FriendWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
            button2={btn2}
          />
          <FriendWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
            button2={btn2}
          />
        </div>
      </div>
    </div>
  );
}
