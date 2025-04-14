import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarSettings from "./LeftBarSettings";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-6">
      <LeftBarSettings />
      <LeftBarOptions />
    </div>
  );
}
