"use client";
import Image from "next/image";
import React from "react";

export default function ConfirmBoxPopUp({ setOpen }: { setOpen: any }) {
  return (
    <div className=" absolute w-full h-screen left-0 top-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <form
        action=""
        className="h-32 p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative align-middle"
      >
        <div
          className=" hover:cursor-pointer absolute text-xl right-2 top-0 hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <span>x</span>
        </div>
        <div className="p-1 absolute top-6 left-0 w-full flex flex-row gap-3">
          <span className=" text-lg w-full text-center">
            Are you sure about this?
          </span>
        </div>
        <div className="p-1 absolute top-16 left-0 w-full flex flex-row gap-7 justify-center">
          <button className=" w-20 bg-green-600 text-white px-4 py-1 txt-sm rounded-lg hover:opacity-80">
            Yes
          </button>
          <button className="w-20 bg-red-600 text-white px-4 py-1 txt-sm rounded-lg hover:opacity-80">
            No
          </button>
        </div>
      </form>
    </div>
  );
}
