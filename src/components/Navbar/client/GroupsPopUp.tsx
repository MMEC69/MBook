"use client";
import React from "react";
import DropDownRowClient from "./DropDownRowClient";
import DropDownSeeAllOptionClient from "./DropDownSeeAllOptionClient";

export default function GroupsPopUp({
  handleClose,
  userId,
  groups,
}: {
  handleClose: any;
  userId: string;
  groups: any[];
}) {
  return (
    <div
      className=" absolute right-0 top-16 z-50"
      onMouseLeave={() => {
        setTimeout(handleClose, 50);
      }}
    >
      <div className="min-w-64 h-15 flex flex-col bg-white absolute right-2 mt-2 p-2 rounded-[10px] gap-2  shadow-2xl">
        {groups.map((group: any) => {
          return (
            <DropDownRowClient
              key={group.id}
              image="/group.png"
              alt="Group"
              option={group.groupname}
            />
          );
        })}
        {groups.length < 1 && (
          <span className="text-sm text-pink-400">There are no groups</span>
        )}
        {/* <DropDownRowClient image="/group.png" alt="Group" option="Group Name" />
        <DropDownRowClient image="/group.png" alt="Group" option="Group Name" />
        <DropDownRowClient image="/group.png" alt="Group" option="Group Name" /> */}
        <DropDownSeeAllOptionClient />
      </div>
    </div>
  );
}
