import RightBarGroupsCreateForm from "@/components/RightBarGroups/RightBarGroupsCreateForm";
import RightBarGroupsYList from "@/components/RightBarGroups/RightBarGroupsYList";
import React from "react";

export default async function RightBar({ type }: { type: string }) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {type === "groups" && (
        <RightBarGroupsYList topic="Discover New Groups" type={type} />
      )}
      {type === "groupsCreate" && <RightBarGroupsCreateForm type={type} />}
      {type === "groupsDiscover" && (
        <RightBarGroupsYList topic="Discover New Groups" type={type} />
      )}
      {type === "groupsDiscoverSearch" && (
        <RightBarGroupsYList topic="New Groups Search Result" type={type} />
      )}
      {type === "groupsSuggested" && (
        <RightBarGroupsYList topic="Suggested" type={type} />
      )}
      {type === "groupsYour" && (
        <RightBarGroupsYList topic="Your Groups" type={type} />
      )}
      {type === "groupsYourSearch" && (
        <RightBarGroupsYList topic="Your Groups Search Result" type={type} />
      )}
    </div>
  );
}
