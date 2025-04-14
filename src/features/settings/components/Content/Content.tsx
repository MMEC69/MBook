import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../rightBar/RightBar";

export default function Content({ type }: { type: string }) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftBar />
      </div>
      <div className="w-full lg:w-[80%]">
        <RightBar type={type} />
      </div>
    </div>
  );
}
