import RightBarAlbumsCreateForm from "@/components/RightBarAlbums/RightBarAlbumsCreateForm";
import RightBarAlbumsXList from "@/components/RightBarAlbums/RightBarAlbumsXList";
import RightBarAlbumsYList from "@/components/RightBarAlbums/RightBarAlbumsYList";
import React from "react";

export default function RightBar({ type }: { type: string }) {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {type === "albums" && (
        <>
          <RightBarAlbumsXList topic="Albums" type={type} />
          <RightBarAlbumsXList topic="Your Photos" type={type} />
          <RightBarAlbumsXList topic="Your Videos" type={type} />
          <RightBarAlbumsXList topic="Your Posts" type={type} />
        </>
      )}
      {type === "albumsCreate" && <RightBarAlbumsCreateForm type={type} />}
      {type === "albumsYourVideos" && (
        <RightBarAlbumsYList topic="Your Videos" type={type} />
      )}
      {type === "albumsYourPosts" && (
        <RightBarAlbumsYList topic="Your Posts" type={type} />
      )}
      {type === "albumsYourPhotos" && (
        <RightBarAlbumsYList topic="Your Photos" type={type} />
      )}
      {type === "albumsYour" && (
        <RightBarAlbumsXList topic="Albums" type={type} />
      )}
      {type === "albumsSearch" && (
        <RightBarAlbumsYList topic="Your Groups Search Result" type={type} />
      )}
      {type === "albumsGallery" && (
        <>
          <RightBarAlbumsXList topic="Albums" type={type} />
          <RightBarAlbumsXList topic="Your Photos" type={type} />
          <RightBarAlbumsXList topic="Your Videos" type={type} />
          <RightBarAlbumsXList topic="Your Posts" type={type} />
        </>
      )}
    </div>
  );
}
