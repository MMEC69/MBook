import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarProfile from "./LeftBarProfile";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-6">
      <LeftBarProfile />
      <LeftBarOptions />
    </div>
  );
}
