"use client";
import React, { useActionState } from "react";
import { changeGroupName, updateGroup } from "../action/action";
import TextInputSubmitButton from "./TextInputSubmitButton";

export default function TextInputField({
  label,
  name,
  groupId,
  userId,
}: {
  label: string;
  name: string;
  groupId: string;
  userId: string;
}) {
  const [state, formAction] = useActionState(updateGroup, {
    success: false,
    error: false,
  });
  return (
    <form
      action={(formData) => {
        formAction({ formData, userId, groupId, name });
      }}
    >
      <div className="flex flex-row gap-2 w-full bg-white p-2 rounded-lg justify-between">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="">{label}</label>
          <input
            type="text"
            className="w-full border-b-2 border-b-black bg-transparent text-black outline-none text-2xl"
            name={name}
            id={name}
          />
          {state?.errors && (
            <p className=" text-red-500 bg-yellow-100 pl-2 rounded-lg">
              {state.errors}
            </p>
          )}
          {!state.errors && state.success && (
            <span className="text-green-500 text-left">
              {label} has been successfully updated
            </span>
          )}
        </div>

        <div className="flex flex-col justify-between">
          <span></span>
          {/* <button className="bg-green-600 hover:opacity-80 text-white px-3 py-2 text-xs">
            Change
          </button> */}
          <TextInputSubmitButton />
        </div>
      </div>
    </form>
  );
}
