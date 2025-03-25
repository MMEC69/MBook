import React from "react";
import DropDownRow from "./DropDownRow";

export default function ProfileDropDownMenu() {
  return (
    <div className="min-w-48 h-15 flex flex-col bg-white absolute right-2 mt-2 p-2 rounded-[10px] gap-2 ">
      <DropDownRow image="/posts2.png" alt="Profile" option="Profile" />
      <DropDownRow image="/settings.png" alt="Settings" option="Settings" />
      <DropDownRow image="/logout.png" alt="Logout" option="Logout" />
    </div>
  );
}
