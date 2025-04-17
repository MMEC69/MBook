import React from "react";
import AddPost from "@/components/AddPostMiddleBar/AddPost";
import Feed from "@/components/FeedMiddleBar/Feed";
import ProfileIntro from "./ProfileIntro";
import { User } from "@prisma/client";

export default function MiddleBar({ user, posts }: { user: User; posts: any }) {
  let numberOfPosts = posts.length;

  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <ProfileIntro user={user} numberOfPosts={numberOfPosts} />
      <AddPost />
      <Feed />
    </div>
  );
}
