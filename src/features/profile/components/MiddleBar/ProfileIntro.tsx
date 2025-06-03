import { getDefaultAvatar } from "@/utility/utility";
import Image from "next/image";
import React from "react";
import {
  checkFriend,
  checkProfileOwner,
  checkRecivedReq,
  checkSentReq,
} from "./action/action";
import FriendReqLayout from "./client/FriendReqLayout";
import Cover from "./client/Cover";
import ProfilePhoto from "./client/ProfilePhoto";
import CoverProfileLayout from "./client/CoverProfileLayout";

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
  if (!profile) return null;

  let userId = requestUser;
  let profileId = profile.id;
  let isUsersProfile: boolean = await checkProfileOwner(userId, profileId);

  //can use selections to optimize the code
  let isRecived: boolean = await checkRecivedReq(profile.id, requestUser);
  let isSent: boolean = await checkSentReq(profile.id, requestUser);
  let isFriend: boolean = await checkFriend(profile.id, requestUser);

  return (
    <div className="flex flex-col items-center justify-center">
      <CoverProfileLayout
        profileSrc={profile.avatar}
        coverSrc={profile.cover}
        defaultUserAvatar={defaultUserAvatar}
        isUsersProfile={isUsersProfile}
      />

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
