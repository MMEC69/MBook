import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarVideos from "./LeftBarVideos";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-6">
      <LeftBarVideos />
      <LeftBarOptions />
    </div>
  );
}
