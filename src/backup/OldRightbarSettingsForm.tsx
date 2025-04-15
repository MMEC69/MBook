"use client";
import React from "react";

export default function RightBarSettingForm({ fType }: { fType: string }) {
  let topic, f1, f2, f3;

  fType === "name"
    ? ((topic = "Change Name"),
      (f1 = "Old Name"),
      (f2 = "New Name"),
      (f3 = "Confirm Name"))
    : fType === "password"
    ? ((topic = "Change Password"),
      (f1 = "Old Password"),
      (f2 = "New Password"),
      (f3 = "Confirm Password"))
    : fType === "email"
    ? ((topic = "Change Email"),
      (f1 = "Old Email"),
      (f2 = "New Email"),
      (f3 = "Confirm Email"))
    : (topic = "Sample Form");

  return (
    <div className="flex flex-col justify-start gap-2">
      <span className=" text-lg">{topic}</span>
      <form
        action=""
        className="flex flex-col gap-4 px-4 py-10 w-full rounded-lg bg-white"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">{f1}</label>
          <input
            type="text"
            className=" border-b-2 w-full outline-none text-2xl"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">{f2}</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">{f3}</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
          />
        </div>

        <div className="flex flex-row gap-3 justify-end">
          <button className="bg-red-400 p-2 pl-3 pr-3 rounded-lg hover:cursor-pointer hover:bg-red-300">
            Cancel
          </button>
          <button className="bg-green-400 p-1 pl-3 pr-3 rounded-lg hover:cursor-pointer hover:bg-green-300">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
