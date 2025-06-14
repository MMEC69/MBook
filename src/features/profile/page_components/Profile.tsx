import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";
import { Post, User } from "@prisma/client";
import { block, isBlocked } from "../components/Rightbar/action/action";

export default async function Profile({
  profile,
  posts,
  requestUser,
  user,
}: {
  profile: User;
  posts: any;
  requestUser: string;
  user: any;
}) {
  const blocked = await isBlocked(user.blocks, profile.id);
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <Content
        profile={profile}
        posts={posts}
        requestUser={requestUser}
        user={user}
        blocked={blocked}
      />
    </div>
  );
}
