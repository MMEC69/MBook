import React from "react";
import Link from "next/link";
import { User } from "@prisma/client";
import RightBarEmpty from "../RightBar/RightBarEmpty";
import { getDefaultAvatar } from "@/utility/utility";
import FriendWindowClient from "./client/FriendWindowClient";

export default function RightBarFriendXYList({
  topic,
  type,
  seeAll,
  list,
  userId,
  isAllFriends,
}: {
  topic: string;
  type: string;
  seeAll?: string;
  list?: any;
  userId: string;
  isAllFriends?: boolean;
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

  if (!list) list = [];

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
        <div className="flex flex-wrap gap-20 w-full ">
          {list?.length > 0 && (
            <>
              {list.map((singleRow: User) => {
                let defaultUserAvatar: string = getDefaultAvatar(
                  singleRow?.gender
                );
                return (
                  <FriendWindowClient
                    key={singleRow.id}
                    image={singleRow.avatar || defaultUserAvatar}
                    alt="Profile Image"
                    name={`${singleRow.firstName} ${singleRow.lastName}`}
                    button1={btn1}
                    button2={btn2}
                    userId={userId}
                    otherUser={singleRow.id}
                    type={type}
                    isAllFriends={isAllFriends}
                  />
                );
              })}
            </>
          )}
          {list?.length === 0 && type === "accepting" && (
            <RightBarEmpty msg="No Requests for you today," link="" />
          )}
          {list?.length === 0 && type === "requesting" && (
            <RightBarEmpty msg="There is nothing to see here," link="" />
          )}
          {list?.length === 0 && type === "refreshing" && (
            <RightBarEmpty msg="You haven't send any requests" link="" />
          )}
          {list?.length === 0 && type === "wish" && (
            <RightBarEmpty msg="There is no one to wish" link="" />
          )}
          {list?.length === 0 && !type && (
            <RightBarEmpty msg="Emplty List" link="" />
          )}
        </div>
      </div>
    </div>
  );
}
