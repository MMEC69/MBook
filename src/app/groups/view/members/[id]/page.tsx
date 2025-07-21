import GroupProfileMembersOnly from "@/features/group_profile/page_componenets/GroupProfileMembersOnly";
import { getGroup } from "@/lib/mongo/prismaFunctions/group/get/group";
import { getUser } from "@/lib/mongo/prismaFunctions/user/get/user";
import { fetchSession } from "@/utility/utility";
import { Group } from "@prisma/client";
import React from "react";

// 1. Define the type for the resolved parameters
interface GroupMembersOnlyPageParams {
  id: string; // The dynamic segment from [id]
}

// 2. Define the props for the page component, indicating that 'params' is a Promise
interface GroupMembersOnlyPageProps {
  params: Promise<GroupMembersOnlyPageParams>; // <--- Crucial change: params is now a Promise
  // If you were using searchParams, you'd also type it as a Promise here:
  // searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// 3. Update the function signature to use the new interface
export default async function Page({ params }: GroupMembersOnlyPageProps) {
  // 4. Await params directly (you can remove Promise.resolve() as it's redundant now)
  const resolvedParams = await params;
  const groupId = resolvedParams.id; // Access 'id' after awaiting 'params'

  const requestUserId = (await fetchSession()) as string;
  const requestUser = await getUser(requestUserId);

  const groupProfile = await getGroup(groupId);

  return (
    <div className="overflow-auto h-screen">
      <GroupProfileMembersOnly
        groupProfile={groupProfile as Group} // Ensure groupProfile is always a Group or handle null case
        requestUser={requestUser}
      />
    </div>
  );
}
