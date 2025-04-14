import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";

export default function Content({ type }: { type: string }) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftBar />
      </div>
      {type === "saved" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "savedAll" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "savedAllSearch" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "savedCollection" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "savedCollectionSearch" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
      {type === "savedCreate" && (
        <div className="w-full lg:w-[80%]">
          <RightBar type={type} />
        </div>
      )}
    </div>
  );
}
