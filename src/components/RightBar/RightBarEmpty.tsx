import Link from "next/link";
import React from "react";

export default function RightBarEmpty({
  msg,
  link,
}: {
  msg: string;
  link: string;
}) {
  return (
    <div className="h-[100px] flex items-center">
      <span className=" text-xl text-pink-500">
        {msg && <>{`${msg} `}</>}
        {!msg && <>{`An emplty List `}</>}
        {link && (
          <Link href={link} className=" underline hover:text-pink-300">
            Click here
          </Link>
        )}
      </span>
    </div>
  );
}
