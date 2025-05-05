import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../rightBar/RightBar";
import { User } from "@prisma/client";
import { getDefaultAvatar } from "@/utility/utility";

export default function Content({
  type,
  userId,
  user,
}: {
  type: string;
  userId: string;
  user: User;
}) {
  let defaultUserAvatar: string = getDefaultAvatar(user?.gender);

  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftBar userId={userId} avatar={defaultUserAvatar} />
      </div>
      <div className="w-full lg:w-[80%]">
        <RightBar type={type} userId={userId} user={user} />
      </div>
    </div>
  );
}
