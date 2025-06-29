import { Post, User } from "@prisma/client";
import React from "react";
import SingleMemberOnly from "./Client/SingleMemberOnly";

export default function MiddleBarMembersOnly({ members }: { members?: any[] }) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <SingleMemberOnly />
      <SingleMemberOnly />
      <SingleMemberOnly />
      <SingleMemberOnly />
      <SingleMemberOnly />
      <SingleMemberOnly />
      <SingleMemberOnly />
      <SingleMemberOnly />
    </div>
  );
}
