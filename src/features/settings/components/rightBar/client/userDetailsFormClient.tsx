"use client";
import React, { useActionState } from "react";
import { updateUserDetails } from "../action/action";

export default function UserDetailsFormClient({ userId }: { userId: string }) {
  const [state, formAction] = useActionState(updateUserDetails, {
    success: false,
    error: false,
    errors: {
      desc: undefined,
      phone: undefined,
      birthday: undefined,
      gender: undefined,
      lives: undefined,
      education: undefined,
      works: undefined,
      love: undefined,
      links: undefined,
    },
  });

  //need to add actions other stuff to work

  return (
    <div className="">
      <form
        action={(formData) => formAction({ formData, userId })}
        className="flex flex-col gap-2 w-[100%] "
      >
        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Description
          </label>
          <input
            name="desc"
            id="desc"
            type="text"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
        {state.errors.desc && (
          <span className="px-2 py-1 bg-yellow-100 text-sm text-red-500">
            Description is not correct.
          </span>
        )}

        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Phone
          </label>
          <input
            name="phone"
            id="phone"
            type="text"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
        {state.errors.phone && (
          <span className="px-2 py-1 bg-yellow-100 text-sm text-red-500">
            Phone no is not correct.
          </span>
        )}

        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Birthday
          </label>
          <input
            name="birthday"
            id="birthday"
            type="date"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
        {state.errors.birthday && (
          <span className="px-2 py-1 bg-yellow-100 text-sm text-red-500">
            Birthday is not correct.
          </span>
        )}

        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Gender
          </label>
          <div className="flex flex-row g-2">
            <div className="flex flex-row g-1 w-16 text-center">
              <input
                name="gender"
                id="gender"
                type="radio"
                className=""
                value="Male"
              />
              <label htmlFor="gender" className="p-2">
                Male
              </label>
            </div>

            <div className="flex flex-row g-1 w-16 text-center">
              <input
                name="gender"
                id="gender"
                type="radio"
                className=""
                value="Female"
              />
              <label htmlFor="gender" className="p-2">
                Female
              </label>
            </div>
          </div>
        </div>
        {state.errors.gender && (
          <span className="px-2 py-1 bg-yellow-100 text-sm text-red-500">
            Gender is not correct.
          </span>
        )}
        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Lives in
          </label>
          <input
            name="lives"
            id="lives"
            type="text"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
        {state.errors.lives && (
          <span className="px-2 py-1 bg-yellow-100 text-sm text-red-500">
            Lives is not correct.
          </span>
        )}
        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Education
          </label>
          <input
            name="education"
            id="education"
            type="text"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
        {state.errors.education && (
          <span className="px-2 py-1 bg-yellow-100 text-sm text-red-500">
            Education is not correct.
          </span>
        )}
        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Works in
          </label>
          <input
            name="works"
            id="works"
            type="text"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
        {state.errors.works && (
          <span className="px-2 py-1 bg-yellow-100 text-sm text-red-500">
            Works is not correct.
          </span>
        )}
        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="love" className="w-[20%] p-1 text-slate-600">
            Loved with
          </label>
          <input
            name="love"
            id="love"
            type="text"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
        {state.errors.love && (
          <span className="px-2 py-1 bg-yellow-100 text-sm text-red-500">
            Love is not correct.
          </span>
        )}
        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Links
          </label>
          <input
            name="links"
            id="links"
            type="text"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
        {state.errors.links && (
          <span className="px-2 py-1 bg-yellow-100 text-sm text-red-500">
            Links is not correct.
          </span>
        )}
        <div className="flex flex-row justify-end bg-white rounded-md">
          <div className="flex flex-row gap-2 w-fit bg-white rounded-md p-2">
            {state.success && (
              <span className=" leading-10 text-green-500 text-center text-sm">
                Successfully Updated
              </span>
            )}
            {state.error && (
              <span className=" leading-10 text-red-500 text-center text-sm">
                Something went wrong
              </span>
            )}
            <button
              className=" bg-red-400 px-4 py-2 text-sm text-white rounded-lg hover:bg-red-300 cursor-pointer"
              type="reset"
            >
              Cancel
            </button>
            <button
              className=" bg-pink-400 px-4 py-2 text-sm text-white rounded-lg hover:bg-pink-300 cursor-pointer"
              type="submit"
            >
              Modify
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
