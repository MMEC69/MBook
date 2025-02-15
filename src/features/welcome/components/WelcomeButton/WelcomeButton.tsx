"use client";
import { redirect } from "next/navigation";
import React from "react";

export default function WelcomeButton() {
  return (
    <button
      onClick={() => redirect("/login")}
      className="flex items-center justify-center font-medium text-4xl text-pink-100 border-transparent bg-pink-500 px-5 py-2 rounded-lg border cursor-pointer hover:bg-pink-400"
    >
      Enter
    </button>
  );
}
