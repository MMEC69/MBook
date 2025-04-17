import Settings from "@/features/settings/page_components/Settings";
import { fetchSession } from "@/utility/utility";
import { User } from "@prisma/client";
import React from "react";
import { fetchUser } from "@/utility/utility";

export default async function page() {
  const userId = (await fetchSession()) as string;
  const user = (await fetchUser(userId)) as User;
  return (
    <div>
      <Settings type="settingsPosts" userId={userId} user={user} />
    </div>
  );
}
