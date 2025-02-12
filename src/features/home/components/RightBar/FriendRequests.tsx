import React from "react";
import Link from "next/link";
import FriendRequest from "./FriendRequest";

export default function FriendRequests() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-pink-600 text-xs">
          See all
        </Link>
      </div>

      {/* User */}
      <FriendRequest />
      <FriendRequest />
      <FriendRequest />
    </div>
  );
}
