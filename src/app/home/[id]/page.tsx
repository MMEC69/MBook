import Home from "@/features/home/page_compoents/Home";
import { fetchSession, fetchUser } from "@/utility/utility";
import React, { Suspense } from "react";

export default async function page() {
  const userId = (await fetchSession()) as string;
  const user = await fetchUser(userId);
  return (
    <div>
      <Suspense fallback="loading...">
        <Home user={user} />
      </Suspense>
    </div>
  );
}
