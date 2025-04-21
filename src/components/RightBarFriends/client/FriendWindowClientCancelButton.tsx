"use client";
import React from "react";
import { cancelRequest } from "./action/action";

export default function FriendWindowClientCancelButton({
  reqId,
  setCancel,
}: {
  reqId: string;
  setCancel: any;
}) {
  return (
    <button
      className="bg-yellow-400 p-1 rounded-lg hover:cursor-pointer hover:bg-yellow-300"
      onClick={async () => {
        await cancelRequest(reqId);
        setCancel(false);
      }}
    >
      Cancel
    </button>
  );
}
