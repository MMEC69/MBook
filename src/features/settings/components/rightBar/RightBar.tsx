import RightBarSettingsForm from "@/components/RightBarSettings/RightBarSettingsForm";
import RightBarSettingsXList from "@/components/RightBarSettings/RightBarSettingsXList";
import RightBarSettingsYList from "@/components/RightBarSettings/RightBarSettingsYList";
import MiddleBar from "@/features/profile/components/MiddleBar/MiddleBar";
import React from "react";

export default function RightBar({ type }: { type: string }) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {type === "settings" && (
        <>
          <RightBarSettingsForm fType="name" />
          <RightBarSettingsForm fType="email" />
          <RightBarSettingsForm fType="password" />
        </>
      )}
      {type === "settingsProfile" && (
        <>
          <RightBarSettingsForm fType="name" />
          <RightBarSettingsForm fType="email" />
          <RightBarSettingsForm fType="password" />
        </>
      )}
      {type === "settingsBlock" && (
        <>
          <RightBarSettingsXList topic="Block List" type={type} />
          <MiddleBar />
        </>
      )}
      {type === "settingsPosts" && (
        <RightBarSettingsYList type={type} topic="Posts Privacy" />
      )}
    </div>
  );
}
