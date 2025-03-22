import Option from "@/components/LeftBarOptions/Option";
import { fetchSession } from "@/utility/utility";
import React from "react";

export default async function LeftBarAlbums() {
  const userId = (await fetchSession()) as string;
  return (
    <div className="flex flex-col gap-6">
      <div className=" p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Option
          link={`/albums/gallery/${userId}`}
          image="/posts2.png"
          alt="Gallery"
          name="Gallery"
        />
        <Option
          link={`/albums/your/${userId}`}
          image="/posts2.png"
          alt="Your Albums"
          name="Your Albums"
        />
        <Option
          link={`/albums/your/photos/${userId}`}
          image="/posts2.png"
          alt="Your Photos"
          name="Your Photos"
        />
        <Option
          link={`/albums/your/videos/${userId}`}
          image="/posts2.png"
          alt="Your Videos"
          name="Your Videos"
        />
        <Option
          link={`/albums/your/posts/${userId}`}
          image="/posts2.png"
          alt="Your Posts"
          name="Your Posts"
        />
        <Option
          link={`/albums/create/${userId}`}
          image="/posts2.png"
          alt="Create Album"
          name="Create Album"
        />
      </div>
    </div>
  );
}
