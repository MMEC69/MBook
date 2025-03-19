import React from "react";
import ProfileCard from "./ProfileCard";
import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";

export default async function LeftBar() {
  return (
    <div className="flex flex-col gap-6">
      <ProfileCard />
      <LeftBarOptions />
    </div>
  );
}
