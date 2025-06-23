import RightBarGroupsCreateForm from "@/components/RightBarGroups/RightBarGroupsCreateForm";
import RightBarGroupsXYList from "@/components/RightBarGroups/RightBarGroupsXYList";
import RightBarGroupsCreateFormClient from "@/features/register/components/client/RegisterBarGroupsCreateFormClient";
import { fetchSession } from "@/utility/utility";
import React from "react";
import {
  getDiscoverGroups,
  getFriendsDetails,
  getYourGroups,
} from "./action/action";
import { getGroups } from "@/lib/mongo/prismaFunctions/group/get/group";

export default async function RightBar({ type }: { type: string }) {
  const userId = (await fetchSession()) as string;
  const friends = await getFriendsDetails(userId);
  const groups = await getGroups();
  const discoverGroups = await getDiscoverGroups(groups, userId);
  const yourGroups = await getYourGroups(groups, userId);

  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {(type === "groups" || type === "groupsDiscover") && (
        <RightBarGroupsXYList
          topic="Discover New Groups"
          type={type}
          groups={discoverGroups}
        />
      )}
      {type === "groupsCreate" && (
        <RightBarGroupsCreateFormClient
          type={type}
          userId={userId}
          friends={friends}
        />
      )}
      {type === "groupsDiscoverSearch" && (
        <RightBarGroupsXYList
          topic="New Groups Search Result"
          type={type}
          groups={groups}
        />
      )}
      {type === "groupsSuggested" && (
        <RightBarGroupsXYList topic="Suggested" type={type} groups={groups} />
      )}
      {type === "groupsYour" && (
        <RightBarGroupsXYList
          topic="Your Groups"
          type={type}
          groups={yourGroups}
        />
      )}
      {type === "groupsYourSearch" && (
        <RightBarGroupsXYList
          topic="Your Groups Search Result"
          type={type}
          groups={groups}
        />
      )}
    </div>
  );
}
