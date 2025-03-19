"use client";
import { redirect } from "next/navigation";
import React from "react";

export default function MyProfileButton({ userId }: any) {
  return (
    <button
      className="bg-pink-300 text-white text-xs rounded-md p-2"
      onClick={() => redirect(`/profile/${userId}`)}
    >
      My Profile
    </button>
  );
}
