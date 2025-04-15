import React from "react";
import RightBarSettingsBlockWindow from "./RightBarSettingsBlockWindow";
import { RightBarEmptyBlockList } from "./RightBarEmpty";

export default function RightBarSettingsXList({
  topic,
  type,
}: {
  topic: string;
  type: string;
}) {
  let btn1 = "Unblock";

  return (
    <div>
      <div className="flex flex-row justify-between">
        <span>{topic}</span>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs overflow-y-hidden scrollbar-hide">
        <div className="flex flex-row gap-3 w-max ">
          <RightBarEmptyBlockList />
          {/* <RightBarSettingsBlockWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          />
          <RightBarSettingsBlockWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          />
          <RightBarSettingsBlockWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          />
          <RightBarSettingsBlockWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          /> */}
        </div>
      </div>
    </div>
  );
}
