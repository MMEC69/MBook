"use client";
import React, { useState } from "react";
import Cover from "./Cover";
import ProfilePhoto from "./ProfilePhoto";
import EditCoverProfilePopUp from "./EditCoverProfilePopUp";

export default function CoverProfileLayout({
  profileSrc,
  coverSrc,
  defaultUserAvatar,
  isUsersProfile,
}: {
  profileSrc: string;
  coverSrc: string;
  defaultUserAvatar: string;
  isUsersProfile: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full h-64 relative ">
        <Cover
          src={coverSrc}
          setOpen={setOpen}
          isUsersProfile={isUsersProfile}
        />
        <ProfilePhoto
          src={profileSrc}
          defaultUserAvatar={defaultUserAvatar}
          setOpen={setOpen}
        />
      </div>
      {open && <EditCoverProfilePopUp setOpen={setOpen} />}
    </>
  );
}
