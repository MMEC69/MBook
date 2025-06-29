import Navbar from "@/components/Navbar/Navbar";
import { Group, Post, User } from "@prisma/client";
import React from "react";
import ContentMembersOnly from "../components/content/ContentMembersOnly";

export default async function GroupProfileMembersOnly({
  groupProfile,
  requestUser,
}: {
  groupProfile: Group;
  requestUser: User;
}) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <ContentMembersOnly
        groupProfile={groupProfile}
        requestUser={requestUser}
      />
    </div>
  );
}
