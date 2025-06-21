import React from "react";
import LeftBar from "../LeftBar/LeftBar";

export default function Content() {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <LeftBar />
      </div>
    </div>
  );
}
