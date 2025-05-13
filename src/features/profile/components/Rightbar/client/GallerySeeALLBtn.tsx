"use client";

import React, { useState } from "react";
import GalleryPopUp from "./GalleryPopUp";

export default function GallerySeeALLBtn() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span
        className="text-pink-600 text-xs hover:underline hover:cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        See all
      </span>
      {open && <GalleryPopUp setOpen={setOpen} />}
    </>
  );
}
