"use client";
import React, { useState } from "react";
import Cover from "./Cover";
import ProfilePhoto from "./ProfilePhoto";
import EditCoverProfilePopUp from "./EditCoverProfilePopUp";

export default function CoverProfileLayout({
  profileSrc,
  coverSrc,
  defaultUserAvatar,
}: {
  profileSrc: string;
  coverSrc: string;
  defaultUserAvatar: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full h-64 relative ">
        <Cover src={coverSrc} setOpen={setOpen} />
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
