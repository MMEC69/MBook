import RightBarSettingsForm from "@/components/RightBarSettings/RightBarSettingsForm";
import RightBarSettingsXList from "@/components/RightBarSettings/RightBarSettingsXList";
import RightBarSettingsYList from "@/components/RightBarSettings/RightBarSettingsYList";
import MiddleBar from "@/features/profile/components/MiddleBar/MiddleBar";
import { fetchSession } from "@/utility/utility";
import React from "react";

export default async function RightBar({
  type,
  userId,
}: {
  type: string;
  userId: string;
}) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {type === "settings" && (
        <>
          <RightBarSettingsForm fType="name" userId={userId} />
          <RightBarSettingsForm fType="email" userId={userId} />
          <RightBarSettingsForm fType="password" userId={userId} />
        </>
      )}
      {type === "settingsProfile" && (
        <>
          <RightBarSettingsForm fType="name" userId={userId} />
          <RightBarSettingsForm fType="email" userId={userId} />
          <RightBarSettingsForm fType="password" userId={userId} />
        </>
      )}
      {type === "settingsUserDetails" && (
        <>
          <RightBarSettingsForm fType="name" userId={userId} />
          <RightBarSettingsForm fType="email" userId={userId} />
          <RightBarSettingsForm fType="password" userId={userId} />
        </>
      )}
      {type === "settingsBlock" && (
        <>
          <RightBarSettingsXList
            topic="Block List"
            type={type}
            userId={userId}
          />
          {/* <MiddleBar /> */}
        </>
      )}
      {type === "settingsPosts" && (
        <RightBarSettingsYList
          type={type}
          topic="Posts Privacy"
          userId={userId}
        />
      )}
    </div>
  );
}
