import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";
import { Post, User } from "@prisma/client";

export default function Profile({ user, posts }: { user: User; posts: any }) {
  return (
    <div>
      <Navbar />
      <Content user={user} posts={posts} />
    </div>
  );
}
