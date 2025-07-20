import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarMiddle from "./NavbarMiddle";
import { fetchSession, getDefaultAvatar } from "@/utility/utility";
import { fetchUserInfo } from "@/features/home/components/LeftBar/action/action";
import NavbarRightClient from "./client/NavbarRightClient";
import { getNotifications } from "@/lib/mongo/prismaFunctions/notifications/get/notifications";
import {
  getJoinedGroups,
  getNotificationsDetails,
  getTheme,
} from "./actions/action";

export default async function Navbar() {
  const userId = (await fetchSession()) as string;
  const user = await fetchUserInfo(userId);
  let defaultUserAvatar: string = getDefaultAvatar(user?.gender);
  const notifications = (await getNotifications(userId)) || [];
  const notificationsDetails =
    (await getNotificationsDetails(notifications)) || [];
  const groups = (await getJoinedGroups(userId)) || [];
  const theme = await getTheme(userId);

  const stylesForNavBar = theme
    ? "h-16 flex flex-row justify-between  bg-gray-600 w-full"
    : "h-16 flex flex-row justify-between  bg-pink-200 w-full";

  if (!user) return null;
  return (
    <div>
      <div className={stylesForNavBar}>
        <NavbarLeft />
        <NavbarMiddle userId={userId} theme={theme} />
        <NavbarRightClient
          user={user}
          defaultUserAvatar={defaultUserAvatar}
          notifications={notificationsDetails}
          groups={groups}
        />
      </div>
    </div>
  );
}
