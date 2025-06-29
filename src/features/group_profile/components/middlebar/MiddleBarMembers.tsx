import { Post, User } from "@prisma/client";
import React from "react";
import GroupProfileIntro from "./GroupProfileIntro";
import GroupAddPostClient from "./Client/GroupAddPost";
import GroupFeed from "./GroupFeed";
import SingleMember from "./Client/SingleMember";

export default function MiddleBarMembers({ members }: { members?: any[] }) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
    </div>
  );
}
