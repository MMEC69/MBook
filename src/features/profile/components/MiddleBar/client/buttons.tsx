"use client";
import {
  acceptRequest,
  deleteRequest,
  sendRequest,
} from "@/components/RightBarFriends/client/action/action";
import React, { useState } from "react";
import { unFriend } from "../action/action";

export function FriendRequestAcceptButton({
  setSent,
  setReceived,
  setFriend,
  requestor,
  receiver,
}: {
  setSent: any;
  setReceived: any;
  setFriend: any;
  requestor: string;
  receiver: string;
}) {
  return (
    <>
      <button
        className="text-sm align-middle ml-4 py-1 px-3 bg-green-500 text-white rounded-md hover:bg-green-400"
        onClick={async () => {
          await acceptRequest(requestor, receiver);
          setReceived(false);
          setFriend(true);
        }}
      >
        Accept
      </button>
    </>
  );
}

export function FriendRequestCancelButton({
  setSent,
  setReceived,
  setFriend,
  requestor,
  receiver,
}: {
  setSent: any;
  setReceived: any;
  setFriend: any;
  requestor: string;
  receiver: string;
}) {
  return (
    <>
      {
        <button
          className="text-sm ml-4 py-1 px-3 bg-red-600 text-white rounded-md hover:bg-red-400"
          onClick={async () => {
            await deleteRequest(requestor, receiver);
            setSent(false);
            setReceived(false);
          }}
        >
          Cancel
        </button>
      }
    </>
  );
}

export function FriendRequestSendButton({
  setSent,
  setReceived,
  setFriend,
  requestor,
  receiver,
}: {
  setSent: any;
  setReceived: any;
  setFriend: any;
  requestor: string;
  receiver: string;
}) {
  return (
    <>
      {
        <button
          className="text-sm align-middle ml-4 py-1 px-3 bg-green-500 text-white rounded-md hover:bg-green-400"
          onClick={() => {
            sendRequest(requestor, receiver);
            setSent(true);
          }}
        >
          Add Friend
        </button>
      }
    </>
  );
}

export function FriendRequestUnFriendButton({
  setSent,
  setReceived,
  setFriend,
  requestor,
  receiver,
}: {
  setSent: any;
  setReceived: any;
  setFriend: any;
  requestor: string;
  receiver: string;
}) {
  return (
    <>
      {
        <button
          className="text-sm align-middle ml-4 py-1 px-3 bg-red-600 text-white rounded-md hover:bg-red-400"
          onClick={async () => {
            await unFriend(requestor, receiver);
            setFriend(false);
          }}
        >
          Unfriend
        </button>
      }
    </>
  );
}
