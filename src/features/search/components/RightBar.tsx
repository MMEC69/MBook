import Advertisements from "@/components/AdvertisementRightBar/Advertisements";
import BirthdaysClient from "@/components/BirthdaysRightBar/Client/BirthdaysClient";
import ContactsClient from "@/components/ContactRightBar/Client/ContactsClient";
import FriendRequests from "@/components/FriendRequestsRightBar/FriendRequests";
import {
  getBirthdays,
  getContacts,
} from "@/features/home/components/RightBar/actions/action";
import React from "react";

export default async function RightBar({ user }: { user: any }) {
  const birthdays = await getBirthdays(user.id);
  const contacts = await getContacts(user.id);
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests user={user} />
      <BirthdaysClient birthdays={birthdays} userId={user.id} />
      <Advertisements />
      <ContactsClient userId={user.id} contacts={contacts} />
    </div>
  );
}
