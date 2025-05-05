import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../Rightbar/RightBar";
import MiddleBar from "../MiddleBar/MiddleBar";
import { Post, User } from "@prisma/client";

export default function Content({
  profile,
  posts,
  requestUser,
  user,
  blocked,
}: {
  profile: User;
  posts: any;
  requestUser: string;
  user: any;
  blocked: any;
}) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftBar profile={profile} />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <MiddleBar
          profile={profile}
          posts={posts}
          requestUser={requestUser}
          blocked={blocked}
        />
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightBar profile={profile} user={user} blocked={blocked} />
      </div>
    </div>
  );
}
