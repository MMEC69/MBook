import React from "react";
import UserDetails from "./UserDetails";
import Gallery from "@/features/profile/components/Rightbar/Gallery";
import FriendRequests from "@/components/FriendRequestsRightBar/FriendRequests";
import Birthdays from "@/components/BirthdaysRightBar/Birthdays";
import Advertisements from "@/components/AdvertisementRightBar/Advertisements";
import Contacts from "@/components/ContactRightBar/Contacts";
import {
  getBirthdays,
  getContacts,
} from "@/features/home/components/RightBar/actions/action";
import BirthdaysClient from "@/components/BirthdaysRightBar/Client/BirthdaysClient";
import ContactsClient from "@/components/ContactRightBar/Client/ContactsClient";

export default async function RightBar({
  profile,
  user,
  blocked,
}: {
  profile: any;
  user: any;
  blocked: any;
}) {
  const birthdays = await getBirthdays(user.id);
  const contacts = await getContacts(user.id);
  return (
    <div className="flex flex-col gap-6">
      {profile.id ? (
        <>
          <UserDetails profile={profile} user={user} blocked={blocked} />
          <Gallery profileId={profile.id} userId={user.id} />
        </>
      ) : null}
      <FriendRequests user={user} />
      <BirthdaysClient birthdays={birthdays} userId={user.id} />
      <Advertisements />
      <ContactsClient userId={user.id} contacts={contacts} />
    </div>
  );
}
