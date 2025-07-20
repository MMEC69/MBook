import React from "react";
import ChatLayout from "./ChatLayout";
import { fetchFriends, fetchSession } from "@/utility/utility";

export default async function RightBar() {
  const userId = (await fetchSession()) as string;
  const allFriends = await fetchFriends(userId);
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white">
      <ChatLayout friends={allFriends} userId={userId} />
    </div>
  );
}
