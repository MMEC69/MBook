import React from "react";
import FriendRequests from "@/components/FriendRequestsRightBar/FriendRequests";
import Birthdays from "@/components/BirthdaysRightBar/Birthdays";
import Advertisements from "@/components/AdvertisementRightBar/Advertisements";
import Contacts from "@/components/ContactRightBar/Contacts";

export default function RightBar() {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
      <Advertisements />
      <Contacts />
    </div>
  );
}
