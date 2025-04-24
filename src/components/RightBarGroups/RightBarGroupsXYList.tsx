import React from 'react'
import GroupWindow from "./GroupWindow";
import SearchBarSmall from "../SearchBars/SearchBarSmall";

export default function RightBarGroupsXYList({
  topic,
  type,
}: {
  topic: string;
  type: string;
}) {
  return (
    <div>
      {(type === "groupsDiscover" || type === "groups") && <SearchBarSmall />}
      {type === "groupsYour" && <SearchBarSmall />}
      {type === "groupsDiscoverSearch" && <SearchBarSmall />}
      {type === "groupsYourSearch" && <SearchBarSmall />}

      <span>{topic}</span>

      <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs overflow-y-hidden scrollbar-hide">
        <div className="flex flex-wrap gap-14 w-full ">
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
          <GroupWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            type={type}
          />
        </div>
      </div>
    </div>
  );
}

