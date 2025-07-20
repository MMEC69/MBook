"use client";
import React from "react";

export default function Message({
  sender,
  message,
}: {
  sender: string;
  message: string;
}) {
  return (
    <div className="w-[40%] bg-slate-200 p-1 flex flex-col gap-2 rounded-lg">
      <span className="text-sm">{sender}</span>
      <span className="text-xs">{message}</span>
    </div>
  );
}
