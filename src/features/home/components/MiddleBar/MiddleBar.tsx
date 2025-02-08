import React from "react";
import Stories from "./Stories";
import AddPost from "./AddPost";
import Feed from "./Feed";

export default function MiddleBar() {
  return (
    <div className="flex flex-col gap-6">
      <Stories />
      <AddPost />
      <Feed />
    </div>
  );
}
