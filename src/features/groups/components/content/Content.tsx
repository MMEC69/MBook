import React from "react";
import LeftBar from "../leftBar/LeftBar";
import RightBar from "../rightBar/RightBar";

export default function Content({ type }: { type: string }) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftBar />
      </div>
      {type === "groups" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "groupsCreate" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "groupsDiscover" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "groupsDiscoverSearch" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "groupsSuggested" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "groupsYour" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "groupsYourSearch" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
    </div>
  );
}
