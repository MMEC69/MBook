import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";
import { Post, User } from "@prisma/client";

export default function Profile({
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
  return (
    <div>
      <Navbar />
      <Content
        profile={profile}
        posts={posts}
        requestUser={requestUser}
        user={user}
      />
    </div>
  );
}
