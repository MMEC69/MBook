import React from "react";
import Post from "./Post";
import { fetchSession } from "@/utility/utility";
import { fetchHomePosts, fetchProfilePosts } from "./actions/action";

export default async function Feed({
  profileId,
  isProfile,
}: {
  profileId: string;
  isProfile: boolean;
}) {
  // const userId = (await fetchSession()) as string;
  const posts = isProfile
    ? await fetchProfilePosts(profileId)
    : await fetchHomePosts(profileId);
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
