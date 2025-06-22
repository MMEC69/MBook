import { Post, User } from "@prisma/client";
import React from "react";
import GroupProfileIntro from "./GroupProfileIntro";
import AddPostClient from "@/components/AddPostMiddleBar/client/AddPostClient";
import Feed from "@/components/FeedMiddleBar/Feed";

export default function MiddleBar({
  groupProfile,
  groupPosts,
  requestUser,
}: {
  groupProfile: any;
  groupPosts: Post[];
  requestUser: User;
}) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <GroupProfileIntro
        groupProfile={groupProfile}
        numberOfPosts={groupPosts?.length}
        requestUser={requestUser}
      />
      <AddPostClient user={requestUser} />
      <Feed profileId={requestUser.id} isProfile={true} />
    </div>
  );
}
