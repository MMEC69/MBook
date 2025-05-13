import React from "react";
import Image from "next/image";

export default function GalleryView({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-1/5 h-24">
      <Image
        src={src}
        alt="Gallery Photo"
        fill
        className=" object-cover rounded-md"
      />
    </div>
  );
}
