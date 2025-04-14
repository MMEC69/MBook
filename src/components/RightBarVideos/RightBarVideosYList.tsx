import React from "react";
import Video from "./Video";

export default function RightBarVideosYList({
  type,
  topic,
}: {
  type: string;
  topic: string;
}) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <span>{topic}</span>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs overflow-y-hidden scrollbar-hide">
        <div className="flex flex-col gap-10 ">
          {type === "videos" && (
            <div className="flex flex-wrap gap-7 justify-center">
              <Video />
              <Video />
              <Video />
            </div>
          )}
          {type === "videosYour" && (
            <div className="flex flex-wrap gap-7 justify-center">
              <Video />
              <Video />
              <Video />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
