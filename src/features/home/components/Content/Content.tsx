import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";
import MiddleBar from "../MiddleBar/MiddleBar";

export default function Content({ user }: { user: any }) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <LeftBar />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <MiddleBar profileId={user.id} />
      </div>
      <div className="hidden lg:block w-[30%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <RightBar user={user} />
      </div>
    </div>
  );
}
