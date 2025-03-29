import React from "react";
import AlbumWindow from "./AlbumWindow";
import Photo from "./Photo";
import Video from "./Video";
import Post from "../FeedMiddleBar/Post";

export default function RightBarAlbumsYList({
  type,
  topic,
}: {
  type: string;
  topic: string;
}) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <span>{topic}</span>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs overflow-y-hidden scrollbar-hide">
        <div className="flex flex-col gap-10 ">
          {type === "albumsYour" && (
            <>
              <AlbumWindow
                image=""
                alt="Album Image"
                name="Album 1"
                desc="Album sample description here."
                date="03/12/2024"
                photos={[]}
              />
              <AlbumWindow
                image=""
                alt="Album Image"
                name="Album 1"
                desc="Album sample description here."
                date="03/12/2024"
                photos={[]}
              />
            </>
          )}
          {type === "albumsYourPhotos" && (
            <>
              <Photo />
              <Photo />
              <Photo />
            </>
          )}
          {type === "albumsYourVideos" && (
            <>
              <Video />
              <Video />
              <Video />
            </>
          )}
          {type === "albumsYourPosts" && (
            <>
              <Post />
              <Post />
              <Post />
              <Post />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
