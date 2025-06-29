import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarGroupViewOptions from "./LeftBarGroupViewOptions";

export default function LeftBarGroupView({
  groupProfile,
}: {
  groupProfile: any;
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* <LeftBarProfile user={user} /> */}
      <LeftBarGroupViewOptions groupId={groupProfile.id} />
      <LeftBarOptions />
    </div>
  );
}
