import { Post, User } from "@prisma/client";
import React from "react";
import SingleMemberOnly from "./Client/SingleMemberOnly";
import TextInputField from "./Client/TextInputField";
import MultiSelectInputField from "./Client/MultiSelectInputField";
import SingleSelectInputField from "./Client/SingleSelectInputField";
import {
  changeGroupDescription,
  changeGroupEmail,
  changeGroupLocation,
  changeGroupName,
  changeGroupPhone,
} from "./action/action";

export default function MiddleBarSettings({
  members,
  groupId,
  userId,
}: {
  members?: any[];
  groupId: string;
  userId: string;
}) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <TextInputField
        label="Group Name"
        name={"groupName"}
        groupId={groupId}
        userId={userId}
      />
      <TextInputField
        label="Description"
        name={"desc"}
        groupId={groupId}
        userId={userId}
      />
      <TextInputField
        label="Location"
        name={"location"}
        groupId={groupId}
        userId={userId}
      />
      <TextInputField
        label="Phone"
        name={"phone"}
        groupId={groupId}
        userId={userId}
      />
      <TextInputField
        label="Email"
        name={"email"}
        groupId={groupId}
        userId={userId}
      />
      {/* <MultiSelectInputField
        options={[]}
        selectedOption={{ value: "fff", label: "ggg" }}
      />
      <SingleSelectInputField
        options={[]}
        selectedOption={{ value: "fff", label: "ggg" }}
      /> */}
    </div>
  );
}
