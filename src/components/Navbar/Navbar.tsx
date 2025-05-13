import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarMiddle from "./NavbarMiddle";
import { fetchSession, getDefaultAvatar } from "@/utility/utility";
import { fetchUserInfo } from "@/features/home/components/LeftBar/action/action";
import NavbarRightClient from "./client/NavbarRightClient";

export default async function Navbar() {
  const userId = (await fetchSession()) as string;
  const user = await fetchUserInfo(userId);
  let defaultUserAvatar: string = getDefaultAvatar(user?.gender);
  if (!user) return null;
  return (
    <div>
      <div className="h-16 flex flex-row justify-between bg-pink-200 w-full">
        <NavbarLeft />
        <NavbarMiddle userId={userId} />
        <NavbarRightClient user={user} defaultUserAvatar={defaultUserAvatar} />
      </div>
    </div>
  );
}
