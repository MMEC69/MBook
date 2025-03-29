import React from "react";
import Image from "next/image";

export default function AlbumWindow({
  image,
  alt,
  date,
  name,
  desc,
  photos,
}: {
  image: string;
  alt: string;
  date: string;
  name: string;
  desc: string;
  photos: Array<string>;
}) {
  return (
    <div className=" rounded-lg bg-slate-100 p-3 flex flex-col gap-3">
      <div className="flex flex-row gap-3 overflow-x-scroll">
        <Image
          src={"/cat-4558651_1280.jpg"}
          alt={alt}
          width={512}
          height={512}
        />
        <Image
          src={"/cat-4558651_1280.jpg"}
          alt={alt}
          width={512}
          height={512}
        />
        <Image
          src={"/cat-4558651_1280.jpg"}
          alt={alt}
          width={512}
          height={512}
        />
        <Image
          src={"/cat-4558651_1280.jpg"}
          alt={alt}
          width={512}
          height={512}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between">
          {name && <span className=" text-lg font-normal">{name}</span>}
          {date && <span className=" text-sm font-normal">{date}</span>}
        </div>
        {desc && <span className=" text-sm font-normal">{desc}</span>}
      </div>
    </div>
  );
}
