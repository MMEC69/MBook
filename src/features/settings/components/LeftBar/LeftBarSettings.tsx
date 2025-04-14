import React from "react";
import Option from "@/components/LeftBarOptions/Option";
import { fetchSession } from "@/utility/utility";

export default async function LeftBarSettings() {
  const userId = (await fetchSession()) as string;
  return (
    <div className="flex flex-col gap-6">
      <div className=" p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Option
          link={`/settings/profile/${userId}`}
          image="/cat-4558651_1280.jpg"
          alt="Profile Settings"
          name="Profile Settings"
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
