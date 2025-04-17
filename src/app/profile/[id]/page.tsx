import Profile from "@/features/profile/page_components/Profile";
import {
  checkBlockedUser,
  fetchPosts,
  fetchSession,
  fetchUser,
} from "@/utility/utility";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const requestUser = (await fetchSession()) as string;
  const requestedUser = params.id;
  const isBlocked = await checkBlockedUser(requestUser, requestedUser);
  if (isBlocked) return notFound();

  const user = await fetchUser(requestedUser);
  if (!user) return notFound();
  const posts = await fetchPosts(requestedUser);

  return (
    <div>
      <Profile user={user} posts={posts} />
    </div>
  );
}
