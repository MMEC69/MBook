import React from "react";
import GroupWindow from "./GroupWindow";
import SearchBarSmall from "../SearchBars/SearchBarSmall";
import { Group } from "@prisma/client";
import RightBarEmpty from "../RightBar/RightBarEmpty";

export default function RightBarGroupsXYList({
  topic,
  type,
  groups,
}: {
  topic: string;
  type: string;
  groups: Group[];
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
          {groups?.length > 0 &&
            groups.map((group) => {
              return (
                <div key={group.id}>
                  <GroupWindow
                    image={group.avatar || "/halloween-1746354_1280.jpg"}
                    alt="Group Image"
                    name={group.groupname}
                    type={type}
                    id={group.id}
                  />
                </div>
              );
            })}
          {groups?.length === 0 && (
            <RightBarEmpty msg="No Groups here," link="" />
          )}
          {/* <GroupWindow
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
          /> */}
        </div>
      </div>
    </div>
  );
}
