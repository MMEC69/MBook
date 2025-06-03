import Image from "next/image";
import React from "react";

export default function EditCoverProfilePopUp({ setOpen }: { setOpen: any }) {
  return (
    <div className=" absolute w-full h-screen left-0 top-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <div className="w-56 h-48 bg-white absolute  rounded-lg">
        <div
          className=" hover:cursor-pointer absolute right-0 top-0"
          onClick={() => setOpen(false)}
        >
          <Image src={"/close.png"} alt={"X"} width={28} height={28} />
        </div>
        <div className="p-1 absolute top-6 w-full flex flex-col gap-2">
          <button className="bg-slate-500 w-full p-1 pl-3 text-left hover:bg-slate-400 text-white rounded-md">
            Change Cover
          </button>
          <button className="bg-slate-500 w-full p-1 pl-3 text-left hover:bg-slate-400 text-white rounded-md">
            Change Profile
          </button>
        </div>
        <div className=" absolute bottom-0">
          <span>MBook</span>
        </div>
      </div>
    </div>
  );
}
