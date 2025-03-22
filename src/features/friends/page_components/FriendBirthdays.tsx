import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import ContentFriendRequestsReceived from "../components/Content/ContentFriendRequestsReceived";
import ContentFriendBirthdays from "../components/Content/ContentFriendBirthdays";

export default function FriendBirthdays() {
  return (
    <div>
      <Navbar />
      <ContentFriendBirthdays />
    </div>
  );
}
