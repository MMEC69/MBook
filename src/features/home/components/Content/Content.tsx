import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";
import MiddleBar from "../MiddleBar/MiddleBar";

export default function Content({
  user,
  theme,
}: {
  user: any;
  theme: boolean;
}) {
  const stylesForLeftBar = theme
    ? "hidden xl:block w-[20%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide bg-black"
    : "hidden xl:block w-[20%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide";

  const stylesForMiddleBar = theme
    ? "w-full lg:w-[70%] xl:w-[50%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide bg-black"
    : "w-full lg:w-[70%] xl:w-[50%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide";

  const stylesForRightBar = theme
    ? "hidden lg:block w-[30%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide bg-black"
    : "hidden lg:block w-[30%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide";
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className={stylesForLeftBar}>
        <LeftBar />
      </div>
      <div className={stylesForMiddleBar}>
        <MiddleBar profileId={user.id} />
      </div>
      <div className={stylesForRightBar}>
        <RightBar user={user} />
      </div>
    </div>
  );
}
