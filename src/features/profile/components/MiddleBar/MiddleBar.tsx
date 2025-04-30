import React from "react";
import AddPost from "@/components/AddPostMiddleBar/AddPost";
import Feed from "@/components/FeedMiddleBar/Feed";
import ProfileIntro from "./ProfileIntro";
import { User } from "@prisma/client";

export default function MiddleBar({
  profile,
  posts,
  requestUser,
}: {
  profile: User;
  posts: any;
  requestUser: string;
}) {
  let numberOfPosts = posts.length;

  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <ProfileIntro
        profile={profile}
        numberOfPosts={numberOfPosts}
        requestUser={requestUser}
      />
      <AddPost />
      <Feed />
    </div>
  );
}
