import Profile from "@/features/profile/page_components/Profile";
import {
  checkBlockedUser,
  fetchPosts,
  fetchSession,
  fetchUser,
} from "@/utility/utility";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

// 1. Define the type for the resolved parameters
interface ProfilePageParams {
  id: string; // The dynamic segment from [id]
}

// 2. Define the props for the page component, indicating that 'params' is a Promise
interface ProfilePageProps {
  params: Promise<ProfilePageParams>; // <--- Crucial change: params is now a Promise
  // If you were using searchParams, you'd also type it as a Promise here:
  // searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// 3. Update the function signature to use the new interface
export default async function Page({ params }: ProfilePageProps) {
  // 4. Await params directly (you can remove Promise.resolve() as it's redundant now)
  const resolvedParams = await params;
  const requestedUser = resolvedParams.id; // Correctly access 'id' after awaiting 'params'

  const requestUser = (await fetchSession()) as string;

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
