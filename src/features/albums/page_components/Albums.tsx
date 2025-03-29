import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";

export default function Albums({ type }: { type: string }) {
  return (
    <div>
      <Navbar />
      {type === "albums" && <Content type={type} />}
      {type === "albumsCreate" && <Content type={type} />}
      {type === "albumsYourVideos" && <Content type={type} />}
      {type === "albumsYourPosts" && <Content type={type} />}
      {type === "albumsYourPhotos" && <Content type={type} />}
      {type === "albumsYour" && <Content type={type} />}
      {type === "albumsSearch" && <Content type={type} />}
      {type === "albumsGallery" && <Content type={type} />}
    </div>
  );
}
