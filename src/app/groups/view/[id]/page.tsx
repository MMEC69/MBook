import { fetchGroupPosts } from "@/features/group_profile/actions/actions";
import GroupProfile from "@/features/group_profile/page_componenets/GroupProfile";
import { getGroup } from "@/lib/mongo/prismaFunctions/group/get/group";
import { getUser } from "@/lib/mongo/prismaFunctions/user/get/user";
import { fetchSession } from "@/utility/utility";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const requestUserId = (await fetchSession()) as string;
  const requestUser = await getUser(requestUserId);

  const resolvedParams = await Promise.resolve(params);
  const groupId = resolvedParams.id;
  const groupProfile = await getGroup(groupId);

  const groupPosts = await fetchGroupPosts(groupId);
  return (
    <div className="overflow-auto h-screen">
      <GroupProfile
        groupProfile={groupProfile}
        groupPosts={groupPosts}
        requestUser={requestUser}
      />
    </div>
  );
}
