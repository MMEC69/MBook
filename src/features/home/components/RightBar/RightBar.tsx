import React from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Advertisement from "./Advertisement";

export default function RightBar() {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
      <Advertisement />
    </div>
  );
}
