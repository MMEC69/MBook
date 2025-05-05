import { getDefaultAvatar } from "@/utility/utility";
import Image from "next/image";
import React from "react";
import { checkFriend, checkRecivedReq, checkSentReq } from "./action/action";
import FriendReqLayout from "./client/FriendReqLayout";
import { getUser } from "@/lib/mongo/prismaFunctions/user/get/user";

export default async function ProfileIntro({
  profile,
  numberOfPosts,
  requestUser,
  blocked,
}: {
  profile: any;
  numberOfPosts: number;
  requestUser: string;
  blocked: any;
}) {
  let defaultUserAvatar: string = getDefaultAvatar(profile?.gender);
  const user: any = await getUser(requestUser);
  if (!profile) return null;

  //can use selections to optimize the code
  let isRecived: boolean = await checkRecivedReq(profile.id, requestUser);
  let isSent: boolean = await checkSentReq(profile.id, requestUser);
  let isFriend: boolean = await checkFriend(profile.id, requestUser);

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
          src={profile.avatar || defaultUserAvatar}
          alt="Profile photo"
          width={128}
          height={128}
          className=" object-cover w-32 h-32 rounded-full absolute left-6 right-0 -bottom-16 ring-4 ring-white"
        />
      </div>

      <div className=" flex items-center gap-12 w-full h-16 justify-between px-2">
        <h1 className="flex flex-row justify-center text-2xl font-medium ml-40">
          {profile.firstName + " " + profile.lastName}
          {requestUser !== profile.id ? (
            <FriendReqLayout
              isRecived={isRecived}
              isSent={isSent}
              isFriend={isFriend}
              profile={profile}
              user={requestUser}
              blocked={blocked}
            />
          ) : (
            <></>
          )}
        </h1>

        <div className=" flex gap-4 justify-between">
          <div className=" flex items-center gap-1">
            <span className=" font-bold">
              {numberOfPosts === 0 ? 0 : numberOfPosts}
            </span>
            <span className="text-sm">
              {numberOfPosts === 1 ? "Post" : "Posts"}
            </span>
          </div>
          <div className=" flex items-center gap-1">
            <span className="font-bold">{profile.friends.length}</span>
            <span className="text-sm">Friends</span>
          </div>
        </div>
      </div>
    </div>
  );
}
