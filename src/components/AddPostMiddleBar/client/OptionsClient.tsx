import React from "react";
import Image from "next/image";

export default function OptionsClient({
  src,
  option,
  alt,
  open,
}: {
  src: string;
  option: string;
  alt: string;
  open: any;
}) {
  return (
    <button
      className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 p-2 rounded-lg"
      onClick={() => open()}
    >
      <Image src={src} alt={alt} width={24} height={24} className="" />
      <span className="">{option}</span>
    </button>
  );
}
