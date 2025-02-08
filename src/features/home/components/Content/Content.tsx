import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";
import MiddleBar from "../MiddleBar/MiddleBar";

export default function Content() {
  return (
    <div className="flex flex-row gap-6 pt-6">
      <div className="hidden xl:flex w-[20%]">
        <LeftBar />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <MiddleBar />
      </div>
      <div className="hidden lg:flex w-[30%]">
        <RightBar />
      </div>
    </div>
  );
}
