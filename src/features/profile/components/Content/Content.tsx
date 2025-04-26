import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../Rightbar/RightBar";
import MiddleBar from "../MiddleBar/MiddleBar";
import { Post, User } from "@prisma/client";

export default function Content({ user, posts, requestUser }: { user: User; posts: any; requestUser: string }) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftBar user={user} />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
          <MiddleBar user={user} posts={posts} requestUser = {requestUser}/>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightBar userId="111" />
      </div>
    </div>
  );
}
