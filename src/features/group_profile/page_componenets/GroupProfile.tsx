import Navbar from "@/components/Navbar/Navbar";
import { Group, Post, User } from "@prisma/client";
import React from "react";
import Content from "../components/content/Content";

export default async function GroupProfile({
  groupProfile,
  groupPosts,
  requestUser,
}: {
  groupProfile: Group;
  groupPosts: Post[];
  requestUser: User;
}) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <Content
        groupProfile={groupProfile}
        groupPosts={groupPosts}
        requestUser={requestUser}
      />
    </div>
  );
}
