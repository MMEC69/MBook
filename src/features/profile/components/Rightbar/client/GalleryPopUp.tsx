"use client";
import Image from "next/image";
import React from "react";

export default function GalleryPopUp({ setOpen }: { setOpen: any }) {
  return (
    <div className=" absolute w-full h-screen left-0 top-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <form
        action=""
        className="h-96 p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
      >
        <div
          className=" hover:cursor-pointer absolute text-xl right-2 top-0 hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <span>x</span>
        </div>
        <div className="p-1 absolute top-6 left-0 w-full flex flex-row gap-3">
          <button className="bg-pink-400 text-white px-2 py-1 rounded-lg hover:opacity-70">
            Albums
          </button>
          <button className="bg-pink-400 text-white px-2 py-1 rounded-lg hover:opacity-70">
            Photos
          </button>
        </div>
        <div className="p-1 absolute top-16 left-0 w-full flex flex-wrap gap-7 h-80 overflow-y-auto">
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
          <Image
            src={"/cat-4558651_1280.jpg"}
            alt="GalleryPic"
            width={100}
            height={100}
            className=" rounded-lg"
          />
        </div>
      </form>
    </div>
  );
}
