import React from "react";
import Link from "next/link";
import FriendRequest from "./FriendRequest";
import { fetchSession } from "@/utility/utility";
import { fetchFriendRequests } from "./action/action";

export default async function FriendRequests({ user }: { user: any }) {
  const friendRequests: any = await fetchFriendRequests(user.id);
  return (
    <>
      {friendRequests.length > 0 && (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
          {/* Top */}
          <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Friend Requests</span>
            <Link
              href={`/friends/requests/received/${user.id}`}
              className="text-pink-600 text-xs hover:underline"
            >
              See all
            </Link>
          </div>

          {/* User */}
          {friendRequests.map((friendRequest: any) => {
            return (
              <FriendRequest
                key={friendRequest.id}
                friendRequest={friendRequest}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
