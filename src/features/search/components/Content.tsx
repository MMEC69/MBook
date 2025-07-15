import React from "react";
import LeftBar from "./LeftBar";
import MiddleBar from "./MiddleBar";
import RightBar from "./RightBar";
import { getUser } from "@/lib/mongo/prismaFunctions/user/get/user";
import { fetchSession } from "@/utility/utility";
import MiddleBarClient from "./client/MiddleBarClient";

export default async function Content() {
  const userId = (await fetchSession()) as string;
  const user = await getUser(userId);
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <LeftBar />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <MiddleBarClient />
      </div>
      <div className="hidden lg:block w-[30%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <RightBar user={user} />
      </div>
    </div>
  );
}
