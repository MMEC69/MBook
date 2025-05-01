"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FriendRequests, User } from "@prisma/client";
import { AccetBtn, CancelBtn } from "./buttons";

export default function FriendRequestClient({
  friendRequest,
  requestor,
  defaultUserAvatar,
}: {
  friendRequest: FriendRequests;
  requestor: User;
  defaultUserAvatar: string;
}) {
  const [remove, setRemove] = useState(false);
  return (
    <>
      {!remove && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={requestor?.avatar || defaultUserAvatar}
              alt="User Photo"
              width={40}
              height={40}
              className=" w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">{`${requestor?.firstName} ${requestor?.lastName}`}</span>
          </div>
          <div className="flex gap-3 justify-end">
            <AccetBtn
              requestor={friendRequest.requestor}
              receiver={friendRequest.receiver}
              setRemove={setRemove}
            />
            <CancelBtn reqId={friendRequest.id} setRemove={setRemove} />
          </div>
        </div>
      )}
    </>
  );
}
