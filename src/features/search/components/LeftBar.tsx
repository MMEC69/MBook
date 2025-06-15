import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import ProfileCard from "@/features/home/components/LeftBar/ProfileCard";
import React from "react";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-6">
      <ProfileCard />
      <LeftBarOptions />
    </div>
  );
}
