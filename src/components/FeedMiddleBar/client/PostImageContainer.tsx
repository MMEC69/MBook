"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function PostImageContainer({ images }: { images: string[] }) {
  if (!images || images.length < 1) return null;
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const goToNextImage = (indexOfImage: number) => {
    if (indexOfImage + 1 < images.length) {
      setSelectedImage(images[indexOfImage + 1]);
    }
  };
  const goToPreviousImage = (indexOfImage: number) => {
    if (indexOfImage > 0) {
      setSelectedImage(images[indexOfImage - 1]);
    }
  };
  return (
    <div className="w-full min-h-96 relative">
      <Image
        src={selectedImage}
        fill
        className="rounded-md absolute object-cover"
        alt="Post Image"
      />
      <div className=" absolute flex flex-row justify-between w-full text-center top-[50%] px-1">
        {selectedImage !== images[0] ? (
          <Image
            src="/left-arrow.png"
            alt="right-arrow"
            width={40}
            height={40}
            className=" rounded-full bg-white opacity-30 hover:opacity-80 hover:cursor-pointer"
            onClick={() => goToPreviousImage(images.indexOf(selectedImage))}
          />
        ) : (
          <div className="bg-transparent"></div>
        )}

        {images.length > 1 &&
          images.indexOf(selectedImage) + 1 < images.length && (
            <Image
              src="/right-arrow.png"
              alt="right-arrow"
              width={40}
              height={40}
              className=" rounded-full bg-white opacity-30 hover:opacity-80 hover:cursor-pointer"
              onClick={() => goToNextImage(images.indexOf(selectedImage))}
            />
          )}
      </div>
    </div>
  );
}
