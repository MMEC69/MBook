import React from "react";
import Image from "next/image";
import { FriendRequests } from "@prisma/client";
import { fetchUser, getDefaultAvatar } from "@/utility/utility";

export default async function FriendRequest({
  friendRequest,
}: {
  friendRequest: FriendRequests;
}) {
  const requestor = await fetchUser(friendRequest.requestor);
  const defaultUserAvatar: string = getDefaultAvatar(requestor?.gender);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={requestor?.avatar || defaultUserAvatar}
          alt="User Photo"
          width={40}
          height={40}
          className=" w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold">{`${requestor?.firstName} ${requestor?.lastName}`}</span>
      </div>
      <div className="flex gap-3 justify-end">
        <Image
          src={"/accept.png"}
          alt="Accept"
          width={21}
          height={21}
          className="cursor-pointer"
        />
        <Image
          src={"/reject.png"}
          alt="Reject"
          width={21}
          height={21}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
