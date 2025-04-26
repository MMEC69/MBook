import React from "react";
import UserDetails from "./UserDetails";
import Gallery from "@/features/profile/components/Rightbar/Gallery";
import FriendRequests from "@/components/FriendRequestsRightBar/FriendRequests";
import Birthdays from "@/components/BirthdaysRightBar/Birthdays";
import Advertisements from "@/components/AdvertisementRightBar/Advertisements";
import Contacts from "@/components/ContactRightBar/Contacts";

export default function RightBar({ profile }: { profile: any }) {
  return (
    <div className="flex flex-col gap-6">
      {profile.id ? (
        <>
          <UserDetails userId={profile.id} />
          <Gallery userId={profile.id} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Advertisements />
      <Contacts />
    </div>
  );
}
