import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarGroups from "./LeftBarGroups";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-6">
      <LeftBarGroups />
      <LeftBarOptions />
    </div>
  );
}
