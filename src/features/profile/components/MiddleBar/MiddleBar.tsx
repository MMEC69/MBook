import React from "react";
import AddPost from "@/components/AddPostMiddleBar/AddPost";
import Feed from "@/components/FeedMiddleBar/Feed";
import ProfileIntro from "./ProfileIntro";

export default function MiddleBar() {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <ProfileIntro />
      <AddPost />
      <Feed />
    </div>
  );
}
