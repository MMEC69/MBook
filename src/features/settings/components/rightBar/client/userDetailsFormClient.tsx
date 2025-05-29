import React from "react";

export default function UserDetailsFormClient() {
  return (
    <div className="">
      <form action="" className="flex flex-col gap-2 w-[100%] ">
        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Description
          </label>
          <input
            name="description"
            id="description"
            type="text"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
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
        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Birthday
          </label>
          <input
            name="birthday"
            id="birthday"
            type="text"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
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
        <div className="flex flex-row gap-2 w-full  bg-white rounded-md p-2">
          <label htmlFor="description" className="w-[20%] p-1 text-slate-600">
            Loved with
          </label>
          <input
            name="love"
            id="love"
            type="text"
            className="w-[80%] outline-none border-2 border-pink-300 p-1"
          />
        </div>
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
        <div className="flex flex-row justify-end bg-white rounded-md">
          <div className="flex flex-row gap-2 w-fit bg-white rounded-md p-2">
            <div className=" bg-red-400 px-4 py-2 text-sm text-white rounded-lg hover:bg-red-300 cursor-pointer">
              <button>Cancel</button>
            </div>
            <div className=" bg-pink-400 px-4 py-2 text-sm text-white rounded-lg hover:bg-pink-300 cursor-pointer">
              <button>Modify</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
