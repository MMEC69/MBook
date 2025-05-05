import React from "react";
import AddPost from "@/components/AddPostMiddleBar/AddPost";
import Feed from "@/components/FeedMiddleBar/Feed";
import ProfileIntro from "./ProfileIntro";
import { User } from "@prisma/client";

export default function MiddleBar({
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

  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <ProfileIntro
        profile={profile}
        numberOfPosts={numberOfPosts}
        requestUser={requestUser}
        blocked={blocked}
      />
      <AddPost />
      <Feed />
    </div>
  );
}
