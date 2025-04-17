import React from "react";
import LeftBarSingleUserDetail from "./LeftBarSingleUserDetail";
import Link from "next/link";
import { fullDateConverter } from "@/utility/utility";

export default async function LeftBarProfile({ user }: { user: any }) {
  user.desc = "This is a sample description";
  user.email = "sample@gmail.com";
  user.phone = "71 456 2000";
  user.lives = "No 09, sample road, Ratmalana";
  user.birthday = "This is a sample description";
  user.education = "This is a sample description";
  user.links = "This is a sample description";

  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="text-xl">{user.firstName}'s Info</span>
        <Link href="/" className="text-pink-600 text-xs">
          See all
        </Link>
      </div>

      {user?.desc && <LeftBarSingleUserDetail detail={user.desc} type="desc" />}
      {user?.email && (
        <LeftBarSingleUserDetail detail={user.email} type="email" />
      )}
      {user?.phone && (
        <LeftBarSingleUserDetail detail={user.phone} type="phone" />
      )}
      {user?.lives && (
        <LeftBarSingleUserDetail detail={user.lives} type="lives" />
      )}
      {user?.birthday && (
        <LeftBarSingleUserDetail detail={user.birthday} type="birthday" />
      )}
      {user?.education && (
        <LeftBarSingleUserDetail detail={user.education} type="education" />
      )}
      {user?.gender && (
        <LeftBarSingleUserDetail detail={user.gender} type="gender" />
      )}
      {user?.love && <LeftBarSingleUserDetail detail={user.love} type="love" />}
      {user?.links && (
        <LeftBarSingleUserDetail detail={user.links} type="links" />
      )}
      {user?.createdAt && (
        <LeftBarSingleUserDetail
          detail={fullDateConverter(user.createdAt)}
          type="createdAt"
        />
      )}
    </div>
  );
}
