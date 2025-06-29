import React from "react";
import { fetchSession } from "@/utility/utility";
import Post from "@/components/FeedMiddleBar/Post";
import { getPosts } from "./action/action";

export default async function Feed({ groupId }: { groupId: string }) {
  // const userId = (await fetchSession()) as string;
  const posts = await getPosts(groupId);
  if (!posts) return null;
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {posts.map((post: any) => {
        return <Post post={post} key={post.id} />;
      })}
      {/* <Post props />
      <Post props />
      <Post props />
      <Post props />
      <Post props />
      <Post props />
      <Post props />
      <Post props />
      <Post props /> */}
    </div>
  );
}
