import { FriendRequests } from "@prisma/client";
import React from "react";

export default function NotificationNumberClient({
  receivedRequests,
}: {
  receivedRequests?: FriendRequests[];
}) {
  return (
    <div className="flex justify-center align-middle w-6 p-1 absolute text-centers -right-2 -top-2 bg-red-400 text-white  text-xs rounded-full ">
      <span className="text-xs">{receivedRequests?.length}</span>
    </div>
  );
}
