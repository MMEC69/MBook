"use client";
import React, { useState } from "react";
import { joinGroup, leaveGroup } from "../actions/actions";

export default function GrpJoinReqBtn({
  isMember,
  groupId,
  userId,
}: {
  isMember: boolean;
  groupId: string;
  userId: string;
}) {
  const [member, setMember] = useState(isMember);
  const handleJoin = async () => {
    const res = await joinGroup(groupId, userId);
    console.log(res);
    setMember(true);
  };
  const handleLeave = async () => {
    const res = await leaveGroup(groupId, userId);
    setMember(false);
  };
  return (
    <>
      {!member ? (
        <button
          className="bg-pink-300 text-white text-sm rounded-md p-2 hover:opacity-85"
          onClick={() => handleJoin()}
        >
          Join Group
        </button>
      ) : (
        <button
          className="bg-red-300 text-white text-sm rounded-md p-2 hover:opacity-85"
          onClick={() => handleLeave()}
        >
          Leave Group
        </button>
      )}
    </>
  );
}
