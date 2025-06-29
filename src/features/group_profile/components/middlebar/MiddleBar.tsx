import { Post, User } from "@prisma/client";
import React from "react";
import GroupProfileIntro from "./GroupProfileIntro";
import GroupAddPostClient from "./Client/GroupAddPost";
import GroupFeed from "./GroupFeed";

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
      <GroupAddPostClient user={requestUser} groupProfile={groupProfile} />
      <GroupFeed groupId={groupProfile.id} />
    </div>
  );
}
