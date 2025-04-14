import React from "react";
import Option from "@/components/LeftBarOptions/Option";
import { fetchSession } from "@/utility/utility";

export default async function LeftBarVideos() {
  const userId = (await fetchSession()) as string;
  return (
    <div className="flex flex-col gap-6">
      <div className=" p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Option
          link={`/videos/your/${userId}`}
          image="/addVideo.png"
          alt="Your Videos"
          name="Your Videos"
        />
      </div>
    </div>
  );
}
