import Navbar from "@/components/Navbar/Navbar";
import { Group, Post, User } from "@prisma/client";
import React from "react";
import ContentSettings from "../components/content/ContentSettings";

export default async function GroupProfileSettings({
  groupProfile,
  requestUser,
}: {
  groupProfile: Group;
  requestUser: User;
}) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <ContentSettings groupProfile={groupProfile} requestUser={requestUser} />
    </div>
  );
}
