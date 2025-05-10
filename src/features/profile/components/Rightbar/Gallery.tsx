import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchPhotos } from "./action/action";
import { getUserPostsImgs } from "@/lib/mongo/prismaFunctions/posts/get/post";

export default async function Gallery({ userId }: { userId: string }) {
  const photos = await getUserPostsImgs(userId, 8);
  console.log(photos);
  // const photos: any = await fetchPhotos(userId);
  // if (!photos) return null;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Gallery</span>
        <Link
          href={`/albums/gallery/${userId}`}
          className="text-pink-600 text-xs hover:underline"
        >
          See all
        </Link>
      </div>

      {/* Bottom */}
      <div className="flex gap-4 justify-between flex-wrap">
        {photos.length > 0 &&
          photos.map((photo: any) => {
            return (
              <>
                <div className="relative w-1/5 h-24" key={Math.random()}>
                  <Image
                    src={photo}
                    alt="Gallery Photo"
                    fill
                    className=" object-cover rounded-md"
                  />
                </div>
              </>
            );
          })}

        {photos.length === 0 && (
          <>
            <div className=" text-pink-400 ">
              There are no images to see in this profile
            </div>
          </>
        )}

        {/* <div className="relative w-1/5 h-24">
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
        </div> */}
      </div>
    </div>
  );
}
