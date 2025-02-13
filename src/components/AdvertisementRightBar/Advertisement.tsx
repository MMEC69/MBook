import React from "react";
import Image from "next/image";

export default function Advertisement() {
  return (
    <div className="flex flex-col mt-4 gap-4">
      <div className=" relative w-full h-48">
        <Image
          src={"/ad.jpg"}
          alt="Advertisement photo"
          className=" rounded-lg object-cover"
          fill
        />
      </div>
      <div className=" flex items-center gap-4">
        <Image
          src={"/ad.jpg"}
          alt="Advertisement Owner"
          className=" rounded-full object-cover h-6 w-6"
          width={24}
          height={24}
        />
        <span className="text-pink-700 font-medium">GPU Warehouse</span>
      </div>
      <p className=" text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        dolores esse sint fugiat quis pariatur. Asperiores nam eum expedita
        laborum laudantium culpa repellat officia harum, quam repellendus.
        Aliquid, odit exercitationem.
      </p>
      <button className="bg-pink-100 text-pink-800 text-xs rounded-lg p-2">
        Learn more
      </button>
    </div>
  );
}
