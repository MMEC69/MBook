import React from "react";
import Option from "./Option";
import { fetchSession } from "@/utility/utility";

export default async function LeftBarOptions() {
  const userId = (await fetchSession()) as string;
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
      <Option
        link={`/profile/${userId}`}
        image="/posts2.png"
        alt="My posts"
        name="My posts"
      />
      <Option
        link={`/chat/${userId}`}
        image="/chat.png"
        alt="Chat"
        name="Chat"
      />
      <Option
        link={`/friends/${userId}`}
        image="/friends.png"
        alt="Friends"
        name="Friends"
      />
      <Option
        link={`/groups/${userId}`}
        image="/group.png"
        alt="Groups"
        name="Groups"
      />
      {/* <Option
        link={`/store/${userId}`}
        image="/store.png"
        alt="Store"
        name="Store"
      /> */}
      {/* <Option
        link={`/events/${userId}`}
        image="/events.png"
        alt="Events"
        name="Events"
      /> */}
      {/* <Option
        link={`/activity/${userId}`}
        image="/activity.png"
        alt="Activity"
        name="Activity"
      /> */}
      <Option
        link={`/albums/${userId}`}
        image="/album.png"
        alt="Albums"
        name="Albums"
      />
      <Option
        link={`/videos/${userId}`}
        image="/addVideo.png"
        alt="Videos"
        name="Videos"
      />
      <Option
        link={`/reels/${userId}`}
        image="/reel.png"
        alt="Reels"
        name="Reels"
      />
      {/* <Option
        link={`/news/${userId}`}
        image="/news.png"
        alt="News"
        name="News"
      /> */}
      <Option
        link={`/saved/${userId}`}
        image="/save.png"
        alt="Saved"
        name="Saved"
      />
      <Option
        link={`/settings/${userId}`}
        image="/settings.png"
        alt="Settings"
        name="Settings"
      />
    </div>
  );
}
