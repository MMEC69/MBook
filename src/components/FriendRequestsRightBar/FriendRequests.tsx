import React from "react";
import Link from "next/link";
import { fetchFriendRequests } from "./action/action";
import { fetchUser, getDefaultAvatar } from "@/utility/utility";
import FriendRequestClient from "./client/FriendRequestClient";
import { User } from "@prisma/client";

export default async function FriendRequests({ user }: { user: User }) {
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
          {friendRequests.map(async (friendRequest: any) => {
            const requestor = (await fetchUser(
              friendRequest.requestor
            )) as User;
            const defaultUserAvatar: string = getDefaultAvatar(
              requestor?.gender
            );
            return (
              <FriendRequestClient
                key={friendRequest.id}
                friendRequest={friendRequest}
                requestor={requestor}
                defaultUserAvatar={defaultUserAvatar}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
