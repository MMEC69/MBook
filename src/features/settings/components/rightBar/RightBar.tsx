import RightBarSettingsForm from "@/components/RightBarSettings/RightBarSettingsForm";
import RightBarSettingsXList from "@/components/RightBarSettings/RightBarSettingsXList";
import RightBarSettingsYList from "@/components/RightBarSettings/RightBarSettingsYList";
import React from "react";
import { getBlockUsersDetails } from "./action/action";
import UserDetailsFormClient from "./client/UserDetailsFormClient";
import { User } from "@prisma/client";
export default async function RightBar({
  type,
  userId,
  user,
}: {
  type: string;
  userId: string;
  user: User;
}) {
  const blocks = await getBlockUsersDetails(user.blocks);
  //Need to change data form to add a single form with better UI - especially for settings user
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {(type === "settings" || type === "settingsProfile") && (
        <>
          <RightBarSettingsForm fType="name" userId={userId} />
          <RightBarSettingsForm
            fType="email"
            userId={userId}
            oldEmail={user.email}
          />
          <RightBarSettingsForm
            fType="password"
            userId={userId}
            oldPassword={user.password}
          />
        </>
      )}
      {/* Incomeplete part here, fix the forms */}
      {type === "settingsUserDetails" && (
        <>
          <UserDetailsFormClient userId={userId} />
          {/* <SimpleUserDetailForm
            userId={userId}
            labelName="Description"
            icon="sample"
            field="desc"
          />
          <SimpleUserDetailForm
            userId={userId}
            labelName="Phone"
            icon="sample"
            field="desc"
          />
          <SimpleUserDetailForm
            userId={userId}
            labelName="Birthday"
            icon="sample"
            field="birthday"
          />
          <SimpleUserDetailForm
            userId={userId}
            labelName="Gender"
            icon="sample"
            field="gender"
          />
          <SimpleUserDetailForm
            userId={userId}
            labelName="Lives in"
            icon="sample"
            field="lives"
          />
          <SimpleUserDetailForm
            userId={userId}
            labelName="Education"
            icon="sample"
            field="education"
          />
          <SimpleUserDetailForm
            userId={userId}
            labelName="Works in"
            icon="sample"
            field="works"
          />
          <SimpleUserDetailForm
            userId={userId}
            labelName="Loved with"
            icon="sample"
            field="love"
          />
          <SimpleUserDetailForm
            userId={userId}
            labelName="Links"
            icon="sample"
            field="links"
          /> */}
        </>
      )}
      {type === "settingsBlock" && (
        <>
          <RightBarSettingsXList
            topic="Block List"
            type={type}
            userId={userId}
            blocks={blocks}
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
