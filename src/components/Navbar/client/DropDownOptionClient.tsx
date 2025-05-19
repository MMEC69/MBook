"use client";
import React from "react";

export default function DropDownOptionClient({ option }: { option: string }) {
  return (
    <div className=" min-w-10 flex flex-row gap-5 bg-slate-100 items-center justify-center p-1 rounded-[10px] hover:bg-slate-200 hover:cursor-pointer text-sm">
      <p>{option}</p>
    </div>
  );
}
