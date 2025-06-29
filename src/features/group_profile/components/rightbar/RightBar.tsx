import Advertisements from "@/components/AdvertisementRightBar/Advertisements";
import BirthdaysClient from "@/components/BirthdaysRightBar/Client/BirthdaysClient";
import ContactsClient from "@/components/ContactRightBar/Client/ContactsClient";
import FriendRequests from "@/components/FriendRequestsRightBar/FriendRequests";
import {
  getBirthdays,
  getContacts,
} from "@/features/home/components/RightBar/actions/action";
import Gallery from "@/features/profile/components/Rightbar/Gallery";
import { Group, User } from "@prisma/client";
import React from "react";
import GroupDetails from "./GroupDetails";
export default async function RightBar({
  groupProfile,
  requestUser,
}: {
  groupProfile: Group;
  requestUser: User;
}) {
  const birthdays = await getBirthdays(requestUser.id);
  const contacts = await getContacts(requestUser.id);
  return (
    <div className="flex flex-col gap-6">
      {groupProfile.id ? (
        <>
          <GroupDetails groupProfile={groupProfile} requestUser={requestUser} />
          <Gallery
            profileId={groupProfile.id}
            userId={requestUser.id}
            isGroup={true}
          />
        </>
      ) : null}
      <FriendRequests user={requestUser} />
      <BirthdaysClient birthdays={birthdays} userId={requestUser.id} />
      <Advertisements />
      <ContactsClient userId={requestUser.id} contacts={contacts} />
    </div>
  );
}
