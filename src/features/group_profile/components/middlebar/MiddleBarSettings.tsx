import { Post, User } from "@prisma/client";
import React from "react";
import SingleMemberOnly from "./Client/SingleMemberOnly";
import TextInputField from "./Client/TextInputField";
import MultiSelectInputField from "./Client/MultiSelectInputField";
import SingleSelectInputField from "./Client/SingleSelectInputField";

export default function MiddleBarSettings({ members }: { members?: any[] }) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <TextInputField />
      <TextInputField />
      <TextInputField />
      <MultiSelectInputField
        options={[]}
        selectedOption={{ value: "fff", label: "ggg" }}
      />
      <SingleSelectInputField
        options={[]}
        selectedOption={{ value: "fff", label: "ggg" }}
      />
    </div>
  );
}
