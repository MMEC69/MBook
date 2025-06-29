"use client";
import React from "react";

export default function TextInputField() {
  return (
    <form action="">
      <div className="flex flex-row gap-2 w-full bg-white p-2 rounded-lg justify-between">
        <div className="flex flex-col w-full">
          <label htmlFor="">Group Name</label>
          <input
            type="text"
            className="w-full border-b-2 border-b-black bg-transparent text-black outline-none text-2xl"
          />
        </div>
        <div className="flex flex-col justify-between">
          <span></span>
          <button className="bg-green-600 hover:opacity-80 text-white px-3 py-2 text-xs">
            Change
          </button>
        </div>
      </div>
    </form>
  );
}
