import { fetchSession } from "@/utility/utility";
import Image from "next/image";
import React from "react";
import { fetchProfileIntroInfo } from "./action/action";

export default async function ProfileIntro() {
  //change userID depending on the profile
  const userId = (await fetchSession()) as string;

  const profileIntroInfo: any = await fetchProfileIntroInfo(userId);

  if (!profileIntroInfo) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-64 relative ">
        <Image
          src={"/willow-catkin-8608845_1280.jpg"}
          alt="Cover photo"
          fill
          className=" object-cover rounded-md"
        />
        <Image
          src={"/cat-4558651_1280.jpg"}
          alt="Profile photo"
          width={128}
          height={128}
          className=" object-cover w-32 h-32 rounded-full absolute left-6 right-0 -bottom-16 ring-4 ring-white"
        />
      </div>

      <div className=" flex items-center gap-12 w-full h-16 justify-between px-2">
        <h1 className=" text-2xl font-medium ml-40">
          {profileIntroInfo.firstName + " " + profileIntroInfo.lastName}
        </h1>
        <div className=" flex gap-4 justify-between">
          <div className=" flex items-center gap-1">
            <span className=" font-bold">{profileIntroInfo.posts}</span>
            <span className="text-sm">Posts</span>
          </div>
          <div className=" flex items-center gap-1">
            <span className="font-bold">{profileIntroInfo.friends}</span>
            <span className="text-sm">Friends</span>
          </div>
        </div>
      </div>
    </div>
  );
}
