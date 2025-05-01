import React from "react";
import Option from "@/components/LeftBarOptions/Option";

export default async function LeftBarSettings({
  userId,
  avatar,
}: {
  userId: string;
  avatar: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className=" p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Option
          link={`/settings/profile/${userId}`}
          image={avatar}
          alt="Profile Settings"
          name="Profile Settings"
        />
        <Option
          link={`/settings/user/${userId}`}
          image="/user details.png"
          alt="User Details"
          name="User Details"
        />
        <Option
          link={`/settings/block/${userId}`}
          image="/group.png"
          alt="Block List"
          name="Block List"
        />
        <Option
          link={`/settings/posts/${userId}`}
          image="/posts2.png"
          alt="Post Privacy"
          name="Post Privacy"
        />
      </div>
    </div>
  );
}
