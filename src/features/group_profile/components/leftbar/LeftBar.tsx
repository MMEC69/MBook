import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";

export default function LeftBar({ groupProfile }: { groupProfile: any }) {
  return (
    <div className="flex flex-col gap-6">
      {/* <LeftBarProfile user={user} /> */}
      <LeftBarOptions />
    </div>
  );
}
