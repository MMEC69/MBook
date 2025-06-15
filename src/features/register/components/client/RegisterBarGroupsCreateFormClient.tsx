"use client";
import React, { useActionState } from "react";
import { createGroup } from "../../action/action";

export default function RightBarGroupsCreateFormClient({
  type,
  userId,
}: {
  type: string;
  userId: string;
}) {
  const [state, formAction] = useActionState(createGroup, {
    success: false,
    error: false,
  });
  return (
    <div className="flex flex-col justify-start ">
      <span className=" text-xl">Let's Create A Group</span>
      <form
        action={(formData) => formAction({ formData, userId })}
        className="flex flex-col gap-4 px-4 py-10 w-full rounded-lg bg-white"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">Group Name</label>
          <input
            type="text"
            className=" border-b-2 w-full outline-none text-2xl"
            id="groupname"
            name="groupname"
          />
          {state?.errors?.groupname && (
            <p className=" text-red-500 bg-yellow-100 pl-2 rounded-lg">
              {state.errors.groupname}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Group Description</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
            id="desc"
            name="desc"
          />
          {state?.errors?.desc && (
            <p className=" text-red-500 bg-yellow-100 pl-2 rounded-lg">
              {state.errors.desc}
            </p>
          )}
        </div>

        {/* <div className="flex flex-col gap-1">
          <label htmlFor="">Group Type</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
            id="type"
            name="type"
          />
        </div> */}
        {/* <div className="flex flex-col gap-1">
          <label htmlFor="">Group Privacy</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
            id="privacy"
            name="privacy"
          />
        </div> */}
        {/* <div className="flex flex-col gap-1">
          <label htmlFor="">Invite Friends (Optional)</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
          />
        </div> */}
        {!state.errors && state.success && (
          <span className="text-green-500 text-left">
            Group has been created
          </span>
        )}
        {!state.errors && state.error && (
          <span className="text-red-500 text-left">Something went wrong</span>
        )}

        <div className="flex flex-row gap-3 justify-end">
          <button
            className="bg-red-400 p-3 pl-5 pr-5 rounded-lg hover:cursor-pointer hover:bg-red-300"
            type="reset"
          >
            Cancel
          </button>
          <button className="bg-green-400 p-3 pl-5 pr-5 rounded-lg hover:cursor-pointer hover:bg-green-300">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
