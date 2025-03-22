import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarFriends from "./LeftBarFriends";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-6">
      <LeftBarFriends />
      <LeftBarOptions />
    </div>
  );
}
