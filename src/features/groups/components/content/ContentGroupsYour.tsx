import React from "react";
import LeftBar from "../leftBar/LeftBar";

export default function ContentGroupsYour() {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftBar />
      </div>
    </div>
  );
}
