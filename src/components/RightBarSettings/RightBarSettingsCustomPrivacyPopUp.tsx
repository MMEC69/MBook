import React from "react";

export default function RightBarSettingsCustomPrivacyPopUp() {
  return (
    <div className="min-w-128 h-15 flex flex-col bg-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  p-2 rounded-[10px] gap-2">
      <form action="" className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <label htmlFor="friends">Friends</label>
          <div className="flex flex-row gap-3">
            <div className="flex gap-2">
              <input type="radio" id="friends" name="friends" value="Yes" />
              <label htmlFor="friends">Yes</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" id="friends" name="friends" value="No" />
              <label htmlFor="friends">No</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Selected Friends</label>
          <input
            type="text"
            className=" border-b-2 border-b-black bg-transparent text-white  w-[300px] md:w-[500px] outline-none text-2xl"
          />
        </div>
        <div className="flex flex-row gap-3 justify-end">
          <button className="bg-red-400 p-1 pl-3 pr-3 rounded-lg hover:cursor-pointer hover:bg-red-300">
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
