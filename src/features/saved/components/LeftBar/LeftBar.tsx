import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarSaved from "./LeftBarSaved";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-6">
      <LeftBarSaved />
      <LeftBarOptions />
    </div>
  );
}
