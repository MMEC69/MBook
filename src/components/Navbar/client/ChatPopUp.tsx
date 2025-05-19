import React from "react";
import DropDownRowClient from "./DropDownRowClient";
import DropDownSeeAllOptionClient from "./DropDownSeeAllOptionClient";

export default function ChatPopUp({ handleClose }: { handleClose: any }) {
  return (
    <div
      className=" absolute w-[100px] h-[100px] right-1 top-16 z-50"
      onMouseLeave={() => {
        setTimeout(handleClose, 50);
      }}
    >
      <div className="min-w-64 h-15 flex flex-col bg-white absolute right-2 mt-2 p-2 rounded-[10px] gap-2 shadow-2xl">
        <DropDownRowClient image="/group.png" alt="Group" option="Group Name" />
        <DropDownRowClient image="/group.png" alt="Group" option="Group Name" />
        <DropDownSeeAllOptionClient />
      </div>
    </div>
  );
}
