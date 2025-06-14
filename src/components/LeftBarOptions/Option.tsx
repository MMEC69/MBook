import Link from "next/link";
import React from "react";
import Image from "next/image";
import NotificationNumber from "./NotificationNumber";
import NotificationNumberClient from "./client/NotificationNumberClient";
import { FriendRequests } from "@prisma/client";

export default function Option({
  link,
  image,
  alt,
  name,
  areNotifications,
  receivedRequests,
}: {
  link: string;
  image: string;
  alt: string;
  name: string;
  areNotifications?: boolean;
  receivedRequests?: FriendRequests[];
}) {
  return (
    <>
      <Link
        href={link}
        className="flex items-center gap-4 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 relative"
      >
        <Image src={image} alt={alt} width={20} height={20} className="" />
        <span>{name}</span>
        {areNotifications && (
          <NotificationNumberClient receivedRequests={receivedRequests} />
        )}
      </Link>
    </>
  );
}
