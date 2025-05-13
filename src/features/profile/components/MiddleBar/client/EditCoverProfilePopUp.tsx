import React from "react";

export default function EditCoverProfilePopUp({ setOpen }: { setOpen: any }) {
  return (
    <div className=" absolute w-full h-screen left-0 top-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <form
        action=""
        className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
      >
        <div
          className=" hover:cursor-pointer absolute text-xl right-2 top-0"
          onClick={() => setOpen(false)}
        >
          X
        </div>
      </form>
    </div>
  );
}
