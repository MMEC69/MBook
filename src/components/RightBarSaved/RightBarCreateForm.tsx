import React from "react";

export default function RightBarCreateForm({
  topic,
  type,
}: {
  topic: string;
  type: string;
}) {
  return (
    <div className="flex flex-col justify-start ">
      <span className=" text-xl">Let's Create A Collection</span>
      <form
        action=""
        className="flex flex-col gap-4 px-4 py-10 w-full rounded-lg bg-white"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">Collection Name</label>
          <input
            type="text"
            className=" border-b-2 w-full outline-none text-2xl"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Collection Description</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Collection Privacy</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Tag Friends (Optional)</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
          />
        </div>

        <div className="flex flex-row gap-3 justify-end">
          <button className="bg-red-400 p-3 pl-5 pr-5 rounded-lg hover:cursor-pointer hover:bg-red-300">
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
