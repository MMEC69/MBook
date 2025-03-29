import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";

export default function Content({ type }: { type: string }) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftBar />
      </div>

      {type === "home" && (
        <div className="w-full lg:w-[80%]">
          <RightBar option={type} />
        </div>
      )}
      {type === "friendLists" && (
        <div className="w-full lg:w-[80%]">
          <RightBar option={type} />
        </div>
      )}
      {type === "firendRequestsReceived" && (
        <div className="w-full lg:w-[80%]">
          <RightBar option={type} />
        </div>
      )}
      {type === "firendRequestsSent" && (
        <div className="w-full lg:w-[80%]">
          <RightBar option={type} />
        </div>
      )}
      {type === "all" && (
        <div className="w-full lg:w-[80%]">
          <RightBar option={type} />
        </div>
      )}
      {type === "friendBirthdays" && (
        <div className="w-full lg:w-[80%]">
          <RightBar option={type} />
        </div>
      )}
      {type === "suggestions" && (
        <div className="w-full lg:w-[80%]">
          <RightBar option={type} />
        </div>
      )}
    </div>
  );
}
