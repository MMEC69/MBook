import React from "react";
import DropDownRow from "../Navbar/DropDownRow";

export default function ShareDropDownMenu() {
  return (
    <div className="min-w-48 h-15 flex flex-col bg-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-[10px] gap-2 ">
      <DropDownRow image="/share.png" alt="Share Now" option="Share Now" />
      <DropDownRow
        image="/posts2.png"
        alt="Write a Post"
        option="Write a Post"
      />
      <DropDownRow image="/chat.png" alt="Send in Chat" option="Send in Chat" />
      <DropDownRow image="/chain.png" alt="Copy Link" option="Copy Link" />
    </div>
  );
}
