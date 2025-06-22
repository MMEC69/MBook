import CoverProfileLayout from "@/features/profile/components/MiddleBar/client/CoverProfileLayout";
import { Post, User } from "@prisma/client";
import React from "react";

export default function GroupProfileIntro({
  groupProfile,
  numberOfPosts,
  requestUser,
}: {
  groupProfile: any;
  numberOfPosts: number;
  requestUser: User;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <CoverProfileLayout
        profileSrc={groupProfile.avatar}
        coverSrc={groupProfile.cover}
        defaultUserAvatar={"/halloween-1746354_1280.jpg"}
        isUsersProfile={false}
        userId={requestUser.id}
      />

      <div className=" flex items-center gap-12 w-full h-16 justify-between px-2">
        <h1 className="flex flex-row justify-center text-2xl font-medium ml-40">
          {groupProfile.groupname}
          {/* {requestUser !== profile.id ? (
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
          )} */}
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
            <span className="font-bold">{groupProfile.members?.length}</span>
            <span className="text-sm">Members</span>
          </div>
        </div>
      </div>
    </div>
  );
}
