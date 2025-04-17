import React from "react";
import Image from "next/image";

export default function LeftBarSingleUserDetail({
  detail,
  type,
}: {
  detail: string;
  type: string;
}) {
  return (
    <div className="flex items-center gap-4 p-2 rounded-lg ">
      {type === "desc" && (
        <div className="flex justify-start  w-full">
          <span className=" text-sm ">{detail}</span>
        </div>
      )}
      {type === "email" && (
        <>
          <Image
            src={`/email.png`}
            alt="email"
            width={20}
            height={20}
            className=""
          />
          <span>{detail}</span>
        </>
      )}
      {type === "phone" && (
        <>
          <Image
            src={`/phone-call.png`}
            alt="sample"
            width={20}
            height={20}
            className=""
          />
          <span>{detail}</span>
        </>
      )}
      {type === "lives" && (
        <>
          <Image
            src={`/gps.png`}
            alt="sample"
            width={20}
            height={20}
            className=""
          />
          <span>{detail}</span>
        </>
      )}
      {type === "birthday" && (
        <>
          <Image
            src={`/cake2.png`}
            alt="sample"
            width={20}
            height={20}
            className=""
          />
          <span>{detail}</span>
        </>
      )}
      {type === "education" && (
        // add a map to run the array
        <>
          <Image
            src={`/education.png`}
            alt="sample"
            width={20}
            height={20}
            className=""
          />
          <span>{detail}</span>
        </>
      )}
      {type === "gender" && (
        <>
          <Image
            src={`/femenine (1).png`}
            alt="sample"
            width={20}
            height={20}
            className=""
          />
          <span>{detail}</span>
        </>
      )}
      {type === "love" && (
        <>
          <Image
            src={`/heart2.png`}
            alt="sample"
            width={20}
            height={20}
            className=""
          />
          <span>in love with {detail}</span>
        </>
      )}

      {type === "links" && (
        // add an array here
        <>
          <Image
            src={`/chain.png`}
            alt="sample"
            width={20}
            height={20}
            className=""
          />
          <span>{detail}</span>
        </>
      )}
      {type === "createdAt" && (
        // add an array here
        <>
          <Image
            src={`/joined.png`}
            alt="sample"
            width={20}
            height={20}
            className=""
          />
          <span className="">Joined {detail}</span>
        </>
      )}
    </div>
  );
}
