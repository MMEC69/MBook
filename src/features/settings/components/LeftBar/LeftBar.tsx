import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarSettings from "./LeftBarSettings";

export default function LeftBar({
  userId,
  avatar,
}: {
  userId: string;
  avatar: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <LeftBarSettings userId={userId} avatar={avatar} />
      <LeftBarOptions />
    </div>
  );
}
