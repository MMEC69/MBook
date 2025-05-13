import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchPhotos } from "./action/action";
import { getUserPostsImgs } from "@/lib/mongo/prismaFunctions/posts/get/post";
import GalleryView from "./GalleryView";
import GallerySeeALLBtn from "./client/GallerySeeALLBtn";

export default async function Gallery({
  profileId,
  userId,
}: {
  profileId: string;
  userId: string;
}) {
  const photos = await getUserPostsImgs(profileId, 8);
  // const photos: any = await fetchPhotos(profileId);
  // if (!photos) return null;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Gallery</span>
        {userId !== profileId ? (
          <GallerySeeALLBtn />
        ) : (
          <Link
            href={`/albums/gallery/${profileId}`}
            className="text-pink-600 text-xs hover:underline"
          >
            See all
          </Link>
        )}
      </div>

      {/* Bottom */}
      <div className="flex gap-4 justify-between flex-wrap">
        {photos.length > 0 &&
          photos.map((photo: any) => {
            return <GalleryView key={photo} src={photo} alt="Gallery Photo" />;
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
