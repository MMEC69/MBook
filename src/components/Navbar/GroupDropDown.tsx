import React from "react";
import DropDownRow from "./DropDownRow";
import DropDownSeeAllOption from "./DropDownSeeAllOption";

export default function GroupDropDown() {
  return (
    <div className="min-w-64 h-15 flex flex-col bg-white absolute right-2 mt-2 p-2 rounded-[10px] gap-2">
      <DropDownRow image="/group.png" alt="Group" option="Group Name" />
      <DropDownRow image="/group.png" alt="Group" option="Group Name" />
      <DropDownRow image="/group.png" alt="Group" option="Group Name" />
      <DropDownSeeAllOption />
    </div>
  );
}
