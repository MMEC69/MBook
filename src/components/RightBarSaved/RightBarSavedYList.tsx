import React from "react";
import Post from "../FeedMiddleBar/Post";
import Collection from "./Collection";
import RightBarCreateForm from "./RightBarCreateForm";

export default function RightBarSavedYList({
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
          {type === "saved" && (
            <div className="flex flex-wrap gap-7 justify-center">
              <Post />
              <Post />
              <Post />
            </div>
          )}
          {type === "savedAll" && (
            <div className="flex flex-wrap gap-7 justify-center">
              <Post />
              <Post />
              <Post />
            </div>
          )}
          {type === "savedAllSearch" && (
            <div className="flex flex-wrap gap-7 justify-center">
              <Post />
              <Post />
              <Post />
            </div>
          )}
          {type === "savedCollection" && (
            <div className="flex flex-wrap gap-7">
              <Collection
                image=""
                alt="Collection Image"
                name="Collection name"
                type={type}
                date="01/11/2025"
                desc="This is a sample description for collection"
              />
              <Collection
                image=""
                alt="Collection Image"
                name="Collection name"
                type={type}
                date="01/11/2025"
                desc="This is a sample description for collection"
              />
              <Collection
                image=""
                alt="Collection Image"
                name="Collection name"
                type={type}
                date="01/11/2025"
                desc="This is a sample description for collection"
              />
              <Collection
                image=""
                alt="Collection Image"
                name="Collection name"
                type={type}
                date="01/11/2025"
                desc="This is a sample description for collection"
              />
            </div>
          )}
          {type === "savedCollectionSearch" && (
            <div className="flex flex-wrap gap-7">
              <Collection
                image=""
                alt="Collection Image"
                name="Collection name"
                type={type}
                date="01/11/2025"
                desc="This is a sample description for collection"
              />
              <Collection
                image=""
                alt="Collection Image"
                name="Collection name"
                type={type}
                date="01/11/2025"
                desc="This is a sample description for collection"
              />
              <Collection
                image=""
                alt="Collection Image"
                name="Collection name"
                type={type}
                date="01/11/2025"
                desc="This is a sample description for collection"
              />
              <Collection
                image=""
                alt="Collection Image"
                name="Collection name"
                type={type}
                date="01/11/2025"
                desc="This is a sample description for collection"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
