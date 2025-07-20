import Profile from "@/features/profile/page_components/Profile";
import {
  checkBlockedUser,
  fetchPosts,
  fetchSession,
  fetchUser,
} from "@/utility/utility";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export default async function page({ params }: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const requestUser = (await fetchSession()) as string;
  const requestedUser = resolvedParams.id;
  const isBlocked = await checkBlockedUser(requestUser, requestedUser);
  if (isBlocked) return notFound();

  const user = await fetchUser(requestUser);
  const profile = await fetchUser(requestedUser);
  if (!profile) return notFound();
  const posts = await fetchPosts(requestedUser);

  return (
    <div className="overflow-auto h-screen">
      <Suspense fallback="loading...">
        <Profile
          profile={profile}
          posts={posts}
          requestUser={requestUser}
          user={user}
        />
      </Suspense>
    </div>
  );
}
