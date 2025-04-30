import Home from "@/features/home/page_compoents/Home";
import { fetchSession, fetchUser } from "@/utility/utility";
import React from "react";

export default async function page() {
  const userId = (await fetchSession()) as string;
  const user = await fetchUser(userId);
  return (
    <div>
      <Home user={user} />
    </div>
  );
}
