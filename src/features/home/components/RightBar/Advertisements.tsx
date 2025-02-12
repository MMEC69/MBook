import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Advertisement from "./Advertisement";

export default function Advertisements() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* Top */}
      <div className=" flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <BsThreeDots size={16} color="#ed5fe1" />
      </div>

      {/* Bottom */}
      <Advertisement />
    </div>
  );
}
