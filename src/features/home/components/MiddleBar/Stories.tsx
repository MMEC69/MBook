import React from "react";
import StoryWindow from "./StoryWindow";
import { fetchSession } from "@/utility/utility";
import { fetchStories } from "./action/action";

export default async function Stories() {
  const userId = (await fetchSession()) as string;
  const stories: any = await fetchStories(userId);
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs overflow-y-hidden scrollbar-hide">
      <div className="flex gap-8 w-max">
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
      </div>
    </div>
  );
}
