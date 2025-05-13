import React from "react";

export default function GroupsPopUp({ handleClose }: { handleClose: any }) {
  return (
    <div
      className=" absolute w-100px h-100px right-4 top-16 z-50"
      onMouseLeave={() => {
        setTimeout(handleClose, 50);
      }}
    >
      <form
        action=""
        className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
      >
        Groups
      </form>
    </div>
  );
}
