"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GroupWindow({
  image,
  alt,
  name,
  type,
  id,
}: {
  image: string;
  alt: string;
  name: string;
  type: string;
  id: string;
}) {
  const router = useRouter();
  let switchType: boolean = false;
  if (type === "groupsYour" || type === "groupsYourSearch") {
    switchType = true;
  }

  const handleViewClick = () => {
    router.push(`/groups/view/${id}`);
  };

  return (
    <div className="flex flex-col gap-1 bg-slate-100 rounded-lg p-3">
      <Image
        src={image}
        alt={alt}
        width={210}
        height={192}
        className=" rounded-lg"
      />
      <span
        className=" text-sm font-normal hover:cursor-pointer hover:underline"
        onClick={() => handleViewClick()}
      >
        {name}
      </span>
      {switchType && (
        <>
          <button
            className="bg-green-400 p-1 rounded-lg hover:cursor-pointer hover:bg-green-300"
            onClick={() => handleViewClick()}
          >
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
