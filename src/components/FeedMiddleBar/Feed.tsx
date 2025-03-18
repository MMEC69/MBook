import React from "react";
import Post from "./Post";
import { fetchSession } from "@/utility/utility";
import { fetchPosts } from "./actions/action";

export default async function Feed() {
  const userId = (await fetchSession()) as string;
  const posts: any = await fetchPosts(userId);
  if (!posts) return null;
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {/* {posts.map((post: any) => {
        return <Post props />;
      })} */}
      <Post props />;
      <Post props />;
      <Post props />;
      <Post props />;
      <Post props />;
      <Post props />;
      <Post props />;
      <Post props />;
      <Post props />;
    </div>
  );
}
