import React from "react";
import Image from "next/image";

export default function Window({
  image,
  alt,
  name,
}: {
  image: string;
  alt: string;
  name?: string;
}) {
  return (
    <div className=" rounded-lg">
      <Image src={"/cat-4558651_1280.jpg"} alt={alt} width={192} height={192} />
      {name && <span className=" text-sm font-normal">{name}</span>}
    </div>
  );
}
