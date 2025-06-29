import Navbar from "@/components/Navbar/Navbar";
import { Group, Post, User } from "@prisma/client";
import React from "react";
import ContentMembers from "../components/content/ContentMembers";

export default async function GroupProfileMembers({
  groupProfile,
  requestUser,
}: {
  groupProfile: Group;
  requestUser: User;
}) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <ContentMembers groupProfile={groupProfile} requestUser={requestUser} />
    </div>
  );
}
