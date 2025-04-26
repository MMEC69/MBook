"use client";
import React, { useEffect, useState } from "react";
import {
  FriendRequestAcceptButton,
  FriendRequestCancelButton,
  FriendRequestSendButton,
  FriendRequestUnFriendButton,
} from "./buttons";

export default function FriendReqLayout({
  isSent,
  isRecived,
  isFriend,
  profile,
  user,
}: {
  isSent: boolean;
  isRecived: boolean;
  isFriend: boolean;
  profile: any;
  user: string;
}) {
  const [sent, setSent] = useState(isSent);
  const [received, setReceived] = useState(isRecived);
  const [friend, setFriend] = useState(isFriend);

  return (
    <>
      {sent && (
        <>
          <FriendRequestCancelButton
            setSent={setSent}
            setReceived={setReceived}
            setFriend={setFriend}
            requestor={user}
            receiver={profile.id}
          />
        </>
      )}
      {received && (
        <>
          <FriendRequestAcceptButton
            setSent={setSent}
            setReceived={setReceived}
            setFriend={setFriend}
            requestor={profile.id}
            receiver={user}
          />
          <FriendRequestCancelButton
            setSent={setSent}
            setReceived={setReceived}
            setFriend={setFriend}
            requestor={profile.id}
            receiver={user}
          />
        </>
      )}
      {friend && (
        <>
          <FriendRequestUnFriendButton
            setSent={setSent}
            setReceived={setReceived}
            setFriend={setFriend}
            requestor={user}
            receiver={profile.id}
          />
        </>
      )}
      {!friend && !sent && !received && (
        <>
          <FriendRequestSendButton
            setSent={setSent}
            setReceived={setReceived}
            setFriend={setFriend}
            requestor={user}
            receiver={profile.id}
          />
        </>
      )}
    </>
  );
}
