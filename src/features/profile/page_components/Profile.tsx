import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";
import { Post, User } from "@prisma/client";

export default function Profile({ user, posts, requestUser }: { user: User; posts: any; requestUser : string }) {
  return (
    <div>
      <Navbar />
      <Content user={user} posts={posts} requestUser = {requestUser}/>
    </div>
  );
}
