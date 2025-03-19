import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Option({
  link,
  image,
  alt,
  name,
}: {
  link: string;
  image: string;
  alt: string;
  name: string;
}) {
  return (
    <Link
      href={link}
      className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
    >
      <Image src={image} alt={alt} width={20} height={20} className="" />
      <span>{name}</span>
    </Link>
  );
}
