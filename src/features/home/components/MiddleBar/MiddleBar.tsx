import React from "react";
import Stories from "./Stories";
import Feed from "@/components/FeedMiddleBar/Feed";
import { fetchSession } from "@/utility/utility";
import { getUser } from "@/lib/mongo/prismaFunctions/user/get/user";
import AddPostClient from "@/components/AddPostMiddleBar/client/AddPostClient";
export default async function MiddleBar({ profileId }: { profileId: string }) {
  const userId = (await fetchSession()) as string;
  const user = await getUser(userId);
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <Stories />
      <AddPostClient user={user} />
      <Feed
        profileId={profileId}
        isProfile={false}
        friends={user.friends || []}
      />
    </div>
  );
}
