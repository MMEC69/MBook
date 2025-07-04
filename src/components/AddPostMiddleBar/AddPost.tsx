import Image from "next/image";
import React from "react";
import Options from "./Options";
import { testAction } from "./action/action";
import Link from "next/link";
import { fetchSession, getDefaultAvatar } from "@/utility/utility";
import { fetchUserInfo } from "@/features/home/components/LeftBar/action/action";
import { User } from "@prisma/client";

export default async function AddPost({ user }: { user: User }) {
  const userId = (await fetchSession()) as string;
  let defaultUserAvatar: string = getDefaultAvatar(user?.gender);
  if (!user) return null;
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm shadow-md">
      {/* Avatar */}
      <Link href={`/profile/${userId}`}>
        <Image
          src={user.avatar || defaultUserAvatar}
          alt="Profile Image Placeholder"
          className="size-12 object-cover rounded-full hover:opacity-90"
          width={48}
          height={48}
        />
      </Link>

      {/* Post */}
      <div className="flex-1">
        {/* Text input */}
        <form action={testAction} className="flex gap-4">
          <textarea
            placeholder="What's on your mind ?"
            className="bg-slate-100 rounded-lg flex-1 p-2 outline-[0.5px] outline-pink-400"
            name="desc"
          ></textarea>

          <Image
            src={"/emojiSelector.png"}
            alt="Profile Image Placeholder"
            className="size-5 cursor-pointer self-end"
            width={20}
            height={20}
          />
          <button className=" p-2 bg-slate-300 rounded-lg text-slate-500 hover:text-slate-100">
            Send
          </button>
        </form>

        {/* Post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <Options src="/addPhoto.png" alt="Add Photo" option="Add Photo" />
          <Options src="/addVideo.png" alt="Add Video" option="Add Video" />
          <Options src="/addPoll.png" alt="Add Poll" option="Add Poll" />
          <Options src="/addEvent.png" alt="Add Event" option="Add Event" />
        </div>
      </div>
    </div>
  );
}
