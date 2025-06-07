"use client";
import React, { useState } from "react";
import Cover from "./Cover";
import ProfilePhoto from "./ProfilePhoto";
import EditCoverProfilePopUp from "./EditCoverProfilePopUp";
import EditProfilePopUp from "./EditProfilePopUp";

export default function CoverProfileLayout({
  profileSrc,
  coverSrc,
  defaultUserAvatar,
  isUsersProfile,
  userId,
}: {
  profileSrc: string;
  coverSrc: string;
  defaultUserAvatar: string;
  isUsersProfile: boolean;
  userId: string;
}) {
  const [openCover, setOpenCover] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <>
      <div className="w-full h-64 relative ">
        <Cover
          src={coverSrc}
          setOpen={setOpenCover}
          isUsersProfile={isUsersProfile}
        />
        <ProfilePhoto
          src={profileSrc}
          defaultUserAvatar={defaultUserAvatar}
          setOpen={setOpenProfile}
        />
      </div>
      {openCover && (
        <EditCoverProfilePopUp setOpen={setOpenCover} userId={userId} />
      )}
      {openProfile && (
        <EditProfilePopUp setOpen={setOpenProfile} userId={userId} />
      )}
    </>
  );
}
