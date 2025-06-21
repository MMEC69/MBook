import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";

export default function Content() {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <LeftBar />
      </div>
      <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <RightBar />
      </div>
    </div>
  );
}
