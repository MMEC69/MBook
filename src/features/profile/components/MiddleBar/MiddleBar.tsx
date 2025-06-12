import React from "react";
import AddPost from "@/components/AddPostMiddleBar/AddPost";
import Feed from "@/components/FeedMiddleBar/Feed";
import ProfileIntro from "./ProfileIntro";
import { User } from "@prisma/client";
import { getUser } from "@/lib/mongo/prismaFunctions/user/get/user";
import AddPostClient from "@/components/AddPostMiddleBar/client/AddPostClient";

export default async function MiddleBar({
  profile,
  posts,
  requestUser,
  blocked,
}: {
  profile: User;
  posts: any;
  requestUser: string;
  blocked: any;
}) {
  let numberOfPosts = posts.length;
  const user = await getUser(requestUser);

  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <ProfileIntro
        profile={profile}
        numberOfPosts={numberOfPosts}
        requestUser={requestUser}
        blocked={blocked}
      />
      <AddPostClient user={user} />
      <Feed profileId={profile.id} isProfile={true} />
    </div>
  );
}
