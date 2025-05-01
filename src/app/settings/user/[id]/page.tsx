import Settings from "@/features/settings/page_components/Settings";
import { fetchSession, fetchUser } from "@/utility/utility";
import { User } from "@prisma/client";
import React from "react";

export default async function page() {
  const userId = (await fetchSession()) as string;
  const user = (await fetchUser(userId)) as User;
  return (
    <div>
      <Settings type="settingsUserDetails" userId={userId} user={user} />
    </div>
  );
}
