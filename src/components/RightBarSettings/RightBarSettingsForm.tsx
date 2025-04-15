"use client";
import React, { useActionState } from "react";
import { modify } from "./action/action";
import { SubmitButtons } from "./client/buttons";

export default function RightBarSettingForm({
  fType,
  userId,
}: {
  fType: string;
  userId?: string;
}) {
  const [state, modifyAction] = useActionState(modify, undefined);
  let topic, f1, f2, f3;

  fType === "name"
    ? ((topic = "Change Name"),
      (f1 = "New First Name"),
      (f2 = "New Last Name"),
      (f3 = "New User Name"))
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
        action={modifyAction}
        className="flex flex-col gap-4 px-4 py-10 w-full rounded-lg bg-white"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="f1">{f1}</label>
          <input
            type="text"
            id="f1"
            name="f1"
            className=" border-b-2 w-full outline-none text-2xl"
          />
          {state?.errors?.f1 && (
            <p className="text-red-500 bg-yellow-100 rounded-lg p-1 pl-3">
              {state.errors.f1}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="f2">{f2}</label>
          <input
            type="text"
            id="f2"
            name="f2"
            className=" border-b-2  w-full outline-none text-2xl"
          />
          {state?.errors?.f2 && (
            <p className="text-red-500 bg-yellow-100 rounded-lg p-1 pl-3">
              {state.errors.f2}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="f3">{f3}</label>
          <input
            type="text"
            id="f3"
            name="f3"
            className=" border-b-2  w-full outline-none text-2xl"
          />
          {state?.errors?.f3 && (
            <p className="text-red-500 bg-yellow-100 rounded-lg p-1 pl-3">
              {state.errors.f3}
            </p>
          )}
        </div>
        <div className=" hidden">
          <input type="text" id="type" name="type" defaultValue={fType} />
        </div>
        <div className=" hidden">
          <input type="text" id="userId" name="userId" defaultValue={userId} />
        </div>

        <div className="flex flex-row gap-3 justify-end">
          <button className="bg-red-400 p-2 pl-3 pr-3 rounded-lg hover:cursor-pointer hover:bg-red-300">
            Cancel
          </button>
          <SubmitButtons />
        </div>
      </form>
    </div>
  );
}
