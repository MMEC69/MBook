import React from "react";
import Image from "next/image";

export default function Options(props: {
  src: string;
  option: string;
  alt: string;
}) {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Image src={props.src} alt={props.alt} width={24} height={24} />
      {props.option}
    </div>
  );
}
