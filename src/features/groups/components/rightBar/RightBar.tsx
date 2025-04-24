import RightBarGroupsCreateForm from "@/components/RightBarGroups/RightBarGroupsCreateForm";
import RightBarGroupsXYList from "@/components/RightBarGroups/RightBarGroupsXYList";
import React from "react";

export default async function RightBar({ type }: { type: string }) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {(type === "groups" || type === "groupsDiscover") && (
        <RightBarGroupsXYList topic="Discover New Groups" type={type} />
      )}
      {type === "groupsCreate" && <RightBarGroupsCreateForm type={type} />}
      {type === "groupsDiscoverSearch" && (
        <RightBarGroupsXYList topic="New Groups Search Result" type={type} />
      )}
      {type === "groupsSuggested" && (
        <RightBarGroupsXYList topic="Suggested" type={type} />
      )}
      {type === "groupsYour" && (
        <RightBarGroupsXYList topic="Your Groups" type={type} />
      )}
      {type === "groupsYourSearch" && (
        <RightBarGroupsXYList topic="Your Groups Search Result" type={type} />
      )}
    </div>
  );
}
