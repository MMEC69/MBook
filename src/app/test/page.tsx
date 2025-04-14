import ShareDropDownMenu from "@/components/FeedMiddleBar/ShareDropDownMenu";
import GroupDropDown from "@/components/Navbar/GroupDropDown";
import Navbar from "@/components/Navbar/Navbar";
import NotificationDropDown from "@/components/Navbar/NotificationDropDown";
import ProfileDropDownMenu from "@/components/Navbar/ProfileDropDownMenu";
import RightBarSettingsCustomPrivacyPopUp from "@/components/RightBarSettings/RightBarSettingsCustomPrivacyPopUp";
import LeftBar from "@/features/profile/components/LeftBar/LeftBar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      {/* <ProfileDropDownMenu /> */}
      {/* <NotificationDropDown /> */}
      {/* <GroupDropDown /> */}
      {/* <ShareDropDownMenu /> */}
      <RightBarSettingsCustomPrivacyPopUp />
    </div>
  );
}
