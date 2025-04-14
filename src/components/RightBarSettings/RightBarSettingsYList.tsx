import React from "react";
import RightBarSettingsBlockWindow from "./RightBarSettingsBlockWindow";
import RightBarSettingsPostWindow from "./RightBarSettingsPostWindow";

export default function RightBarSettingsYList({
  type,
  topic,
}: {
  type: string;
  topic: string;
}) {
  let btn1 = "function";
  return (
    <div>
      <div className="flex flex-row justify-between">
        <span>{topic}</span>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs overflow-y-hidden scrollbar-hide">
        <div className="flex flex-col gap-10 ">
          <RightBarSettingsPostWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          />
          <RightBarSettingsPostWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          />
          <RightBarSettingsPostWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          />
          <RightBarSettingsPostWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          />
        </div>
      </div>
    </div>
  );
}
