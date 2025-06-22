import { Post, User } from "@prisma/client";
import React from "react";
import LeftBar from "../leftbar/LeftBar";
import MiddleBar from "../middlebar/MiddleBar";
import RightBar from "@/features/profile/components/Rightbar/RightBar";

export default function Content({
  groupProfile,
  groupPosts,
  requestUser,
}: {
  groupProfile: any;
  groupPosts: Post[];
  requestUser: User;
}) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <LeftBar groupProfile={groupProfile} />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <MiddleBar
          groupProfile={groupProfile}
          groupPosts={groupPosts}
          requestUser={requestUser}
        />
      </div>
      <div className="hidden lg:block w-[30%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <RightBar profile={groupProfile} user={requestUser} blocked={[]} />
      </div>
    </div>
  );
}
