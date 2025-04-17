import Friends from "@/features/friends/page_components/Friends";
import { fetchSession } from "@/utility/utility";
import React from "react";

export default async function page() {
  const userId = (await fetchSession()) as string;
  return (
    <div>
      <Friends type="home" userId={userId} />
    </div>
  );
}
