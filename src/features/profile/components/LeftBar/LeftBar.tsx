import React from "react";
import Option from "@/components/OptionsLeftBar/Option";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-6">
      <div className=" p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Option link="/" image="/posts2.png" alt="My posts" name="My posts" />
        <Option link="/" image="/chat.png" alt="Chat" name="Chat" />
        <Option link="/" image="/friends.png" alt="Friends" name="Friends" />
        <Option link="/" image="/group.png" alt="Groups" name="Groups" />
        <Option link="/" image="/store.png" alt="Store" name="Store" />
        <Option link="/" image="/events.png" alt="Events" name="Events" />
        <Option link="/" image="/activity.png" alt="Activity" name="Activity" />
        <Option link="/" image="/album.png" alt="Albums" name="Albums" />
        <Option link="/" image="/addVideo.png" alt="Videos" name="Videos" />
        <Option link="/" image="/reel.png" alt="Reels" name="Reels" />
        <Option link="/" image="/news.png" alt="News" name="News" />
        <Option link="/" image="/save.png" alt="Saved" name="Saved" />
        <Option link="/" image="/settings.png" alt="Settings" name="Settings" />
      </div>
    </div>
  );
}
