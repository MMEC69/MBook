"use client";
import React, { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu";
import Image from "next/image";
import { User } from "@prisma/client";
import NotificationPopUp from "./NotificationPopUp";
import ChatPopUp from "./ChatPopUp";
import GroupsPopUp from "./GroupsPopUp";
import UserPopUp from "./UserPopUp";

export default function NavbarRightClient({
  user,
  defaultUserAvatar,
}: {
  user: User;
  defaultUserAvatar: string;
}) {
  const [openNotification, setOpenNotification] = useState(false);
  const [openGroups, setOpenGroups] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  const handleOpen = (item: string) => {
    handleClose();
    switch (item) {
      case "notification":
        setOpenNotification(true);
        break;
      case "groups":
        setOpenGroups(true);
        break;
      case "chat":
        setOpenChat(true);
        break;
      case "user":
        setOpenUser(true);
        break;

      default:
        break;
    }
  };
  const handleClose = () => {
    setOpenChat(false);
    setOpenGroups(false);
    setOpenNotification(false);
    setOpenUser(false);
  };

  return (
    <div className="flex flex-row items-center justify-end pr-3">
      <div className="hidden lg:flex items-center justify-end gap-3">
        <Image
          src="/bell2.png"
          alt="place_holder"
          width={48}
          height={48}
          className=" w-9 h-9 rounded-full cursor-pointer bg-pink-200"
          onClick={() => {
            handleOpen("notification");
          }}
        />
        <Image
          src="/group.png"
          alt="place_holder"
          width={48}
          height={48}
          className=" w-9 h-9 rounded-full cursor-pointer bg-pink-300"
          onClick={() => {
            handleOpen("groups");
          }}
        />
        <Image
          src="/chat.png"
          alt="place_holder"
          width={48}
          height={48}
          className=" w-9 h-9 rounded-full cursor-pointer object-cover bg-pink-300"
          onClick={() => {
            handleOpen("chat");
          }}
        />
        <Image
          src={user.avatar || defaultUserAvatar}
          alt="place_holder"
          width={48}
          height={48}
          className=" w-9 h-9 rounded-full cursor-pointer bg-pink-200"
          onClick={() => {
            handleOpen("user");
          }}
        />
      </div>
      {openNotification && <NotificationPopUp handleClose={handleClose} />}
      {openChat && <ChatPopUp handleClose={handleClose} />}
      {openGroups && <GroupsPopUp handleClose={handleClose} />}
      {openUser && <UserPopUp handleClose={handleClose} />}

      <MobileMenu />
    </div>
  );
}
