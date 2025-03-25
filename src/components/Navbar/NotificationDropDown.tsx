import React from "react";
import DropDownOption from "./DropDownOption";
import DropDownRow from "./DropDownRow";
import DropDownSeeAllOption from "./DropDownSeeAllOption";

export default function NotificationDropDown() {
  return (
    <div className="min-w-48 h-15 flex flex-col bg-white absolute right-2 mt-2 p-1 gap-2 rounded-[10px]">
      <div className=" text-sm flex flex-row gap-2 p-1 rounded-[5px]">
        <DropDownOption option="All" />
        <DropDownOption option="Unread" />
      </div>
      <div>
        <DropDownRow
          image="/logout.png"
          alt="Logout"
          option="Logout"
          time="2min"
        />
      </div>
      <DropDownSeeAllOption />
    </div>
  );
}
