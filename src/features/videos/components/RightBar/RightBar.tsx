import RightBarVideosYList from "@/components/RightBarVideos/RightBarVideosYList";
import React from "react";

export default function RightBar({ type }: { type: string }) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {type === "videos" && (
        <RightBarVideosYList topic="Your Videos" type={type} />
      )}
      {type === "videosYour" && (
        <RightBarVideosYList topic="Your Videos" type={type} />
      )}
    </div>
  );
}
