import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchSession } from "@/utility/utility";
import { fetchPhotos } from "./action/action";

export default async function Gallery({ userId }: { userId: string }) {
  // const userId_ = (await fetchSession()) as string;
  const photos: any = await fetchPhotos(userId);
  if (!photos) return null;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Gallery</span>
        <Link href="/" className="text-pink-600 text-xs">
          See all
        </Link>
      </div>

      {/* Bottom */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src={"/automobile-5128760_1280.jpg"}
            alt="Gallery Photo"
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={"/automobile-5128760_1280.jpg"}
            alt="Gallery Photo"
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={"/automobile-5128760_1280.jpg"}
            alt="Gallery Photo"
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={"/automobile-5128760_1280.jpg"}
            alt="Gallery Photo"
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={"/automobile-5128760_1280.jpg"}
            alt="Gallery Photo"
            fill
            className=" object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
