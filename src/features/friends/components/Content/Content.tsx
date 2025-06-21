import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";
import { FriendRequests } from "@prisma/client";

export default function Content({
  type,
  userId,
  receivedRequests,
}: {
  type: string;
  userId: string;
  receivedRequests?: FriendRequests[];
}) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <LeftBar receivedRequests={receivedRequests || []} />
      </div>

      {type === "home" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar option={type} userId={userId} />
        </div>
      )}
      {type === "friendLists" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar option={type} userId={userId} />
        </div>
      )}
      {type === "firendRequestsReceived" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar option={type} userId={userId} />
        </div>
      )}
      {type === "firendRequestsSent" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar option={type} userId={userId} />
        </div>
      )}
      {type === "all" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar option={type} userId={userId} />
        </div>
      )}
      {type === "friendBirthdays" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar option={type} userId={userId} />
        </div>
      )}
      {type === "suggestions" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar option={type} userId={userId} />
        </div>
      )}
    </div>
  );
}
