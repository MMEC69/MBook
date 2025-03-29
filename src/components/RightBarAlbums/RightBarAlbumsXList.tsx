import React from "react";
import Window from "./Window";
import AlbumWindow from "./AlbumWindow";

export default function RightBarAlbumsXList({
  topic,
  type,
}: {
  topic: string;
  type: string;
}) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <span>{topic}</span>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs overflow-y-hidden scrollbar-hide">
        {type === "albums" && (
          <div className="flex flex-row gap-3 w-max ">
            <Window image="" alt="Album Image" name="Album 1" />
            <Window image="" alt="Album Image" name="Album 2" />
            <Window image="" alt="Album Image" name="Album 2" />
            <Window image="" alt="Album Image" name="Album 3" />
          </div>
        )}
        {type === "albumsGallery" && (
          <div className="flex flex-row gap-3 w-max ">
            <Window image="" alt="Album Image" name="Album 1" />
            <Window image="" alt="Album Image" name="Album 2" />
            <Window image="" alt="Album Image" name="Album 2" />
            <Window image="" alt="Album Image" name="Album 3" />
          </div>
        )}
        {type === "albumsYour" && (
          <div className="flex flex-col gap-10 ">
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
          </div>
        )}
      </div>
    </div>
  );
}
