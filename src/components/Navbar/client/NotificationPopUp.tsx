"use client";
import React from "react";
import DropDownSeeAllOptionClient from "./DropDownSeeAllOptionClient";
import DropDownOptionClient from "./DropDownOptionClient";
import DropDownRowClient from "./DropDownRowClient";

export default function NotificationPopUp({
  handleClose,
}: {
  handleClose: any;
}) {
  return (
    <div
      className=" absolute right-0 top-16 z-50"
      onMouseLeave={() => {
        setTimeout(handleClose, 50);
      }}
    >
      <div className="min-w-48 h-15 flex flex-col bg-white absolute right-2 mt-2 p-1 gap-2 rounded-[10px] shadow-2xl">
        <div className=" text-sm flex flex-row gap-2 p-1 rounded-[5px]">
          <DropDownOptionClient option="All" />
          <DropDownOptionClient option="Unread" />
        </div>
        <div>
          <DropDownRowClient
            image="/logout.png"
            alt="Logout"
            option="Logout"
            time="2min"
          />
        </div>
        <DropDownSeeAllOptionClient />
      </div>
    </div>
  );
}
