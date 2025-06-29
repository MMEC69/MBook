import { Group, Post, User } from "@prisma/client";
import React from "react";
import RightBar from "../rightbar/RightBar";
import LeftBarGroupView from "../leftbar/LeftBarGroupView";
import MiddleBarMembersOnly from "../middlebar/MiddleBarMembersOnly";
import MiddleBarSettings from "../middlebar/MiddleBarSettings";

export default function ContentSettings({
  groupProfile,
  requestUser,
}: {
  groupProfile: Group;
  requestUser: User;
}) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <LeftBarGroupView groupProfile={groupProfile} />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <MiddleBarSettings />
      </div>
      <div className="hidden lg:block w-[30%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <RightBar groupProfile={groupProfile} requestUser={requestUser} />
      </div>
    </div>
  );
}
