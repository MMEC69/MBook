import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";

export default function Content({ type }: { type: string }) {
  return (
    <div className="flex flex-row gap-6 p-6">
      <div className="hidden xl:block w-[20%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
        <LeftBar />
      </div>
      {type === "albums" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar type={type} />
        </div>
      )}
      {type === "albumsCreate" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar type={type} />
        </div>
      )}
      {type === "albumsYourVideos" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar type={type} />
        </div>
      )}
      {type === "albumsYourPosts" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar type={type} />
        </div>
      )}
      {type === "albumsYourPhotos" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar type={type} />
        </div>
      )}
      {type === "albumsYour" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar type={type} />
        </div>
      )}
      {type === "albumsSearch" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar type={type} />
        </div>
      )}
      {type === "albumsGallery" && (
        <div className="w-full lg:w-[80%] h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hide">
          <RightBar type={type} />
        </div>
      )}
    </div>
  );
}
