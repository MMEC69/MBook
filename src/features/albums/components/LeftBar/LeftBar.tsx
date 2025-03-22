import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarAlbums from "./LeftBarAlbums";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-6">
      <LeftBarAlbums />
      <LeftBarOptions />
    </div>
  );
}
