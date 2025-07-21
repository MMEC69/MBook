import { fetchGroupPosts } from "@/features/group_profile/actions/actions";
import GroupProfile from "@/features/group_profile/page_componenets/GroupProfile";
import { getGroup } from "@/lib/mongo/prismaFunctions/group/get/group";
import { getUser } from "@/lib/mongo/prismaFunctions/user/get/user";
import { fetchSession } from "@/utility/utility";
import { Group } from "@prisma/client";
import React from "react";

// 1. Define the type for the resolved parameters
interface GroupPageParams {
  id: string; // The dynamic segment from [id]
}

// 2. Define the props for the page component, indicating that 'params' is a Promise
interface GroupPageProps {
  params: Promise<GroupPageParams>; // <--- This is the key change
  // If you were using searchParams, you'd also type it as a Promise:
  // searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// 3. Update the function signature to use the new interface
export default async function Page({ params }: GroupPageProps) {
  // 4. Await params directly (you can remove Promise.resolve() as it's redundant now)
  const resolvedParams = await params;
  const groupId = resolvedParams.id; // Access 'id' after awaiting 'params'

  const requestUserId = (await fetchSession()) as string;
  const requestUser = await getUser(requestUserId);

  const groupProfile = await getGroup(groupId);

  const groupPosts = await fetchGroupPosts(groupId);

  return (
    <div className="overflow-auto h-screen">
      <GroupProfile
        groupProfile={groupProfile as Group} // Ensure groupProfile is always a Group or handle null case
        groupPosts={groupPosts}
        requestUser={requestUser}
      />
    </div>
  );
}
