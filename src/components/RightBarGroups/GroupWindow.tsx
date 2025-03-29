import React from "react";
import Image from "next/image";

export default function GroupWindow({
  image,
  alt,
  name,
  type,
}: {
  image: string;
  alt: string;
  name: string;
  type: string;
}) {
  let switchType: boolean = false;
  if (type === "groupsYour" || type === "groupsYourSearch") {
    switchType = true;
  }
  return (
    <div className="flex flex-col gap-1 bg-slate-100 rounded-lg p-3">
      <Image src={"/cat-4558651_1280.jpg"} alt={alt} width={256} height={192} />
      <span className=" text-sm font-normal">{name}</span>
      {switchType && (
        <>
          <button className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300">
            View
          </button>
        </>
      )}
      {!switchType && (
        <>
          <button className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300">
            Join
          </button>
          <button className="bg-red-400 p-1 rounded-lg hover:cursor-pointer hover:bg-red-300">
            Remove
          </button>
        </>
      )}
    </div>
  );
}
