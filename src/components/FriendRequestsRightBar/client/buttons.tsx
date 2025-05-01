"use client";
import {
  acceptRequest,
  cancelRequest,
} from "@/components/RightBarFriends/client/action/action";
import React from "react";
import Image from "next/image";

export function AccetBtn({
  requestor,
  receiver,
  setRemove,
}: {
  requestor: string;
  receiver: string;
  setRemove: any;
}) {
  return (
    <Image
      src={"/accept.png"}
      alt="Accept"
      width={21}
      height={21}
      className="cursor-pointer"
      onClick={async () => {
        await acceptRequest(requestor, receiver);
        setRemove(true);
      }}
    />
  );
}

export function CancelBtn({
  reqId,
  setRemove,
}: {
  reqId: string;
  setRemove: any;
}) {
  return (
    <Image
      src={"/reject.png"}
      alt="Reject"
      width={21}
      height={21}
      className="cursor-pointer"
      onClick={async () => {
        await cancelRequest(reqId);
        setRemove(true);
      }}
    />
  );
}
