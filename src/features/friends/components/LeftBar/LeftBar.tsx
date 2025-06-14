import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarFriends from "./LeftBarFriends";
import { FriendRequests } from "@prisma/client";

export default function LeftBar({
  receivedRequests,
}: {
  receivedRequests: FriendRequests[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <LeftBarFriends receivedRequests={receivedRequests} />
      <LeftBarOptions />
    </div>
  );
}
