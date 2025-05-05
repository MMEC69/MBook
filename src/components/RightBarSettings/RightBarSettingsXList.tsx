import React from "react";
import RightBarSettingsBlockWindow from "./RightBarSettingsBlockWindow";
import RightBarEmpty from "../RightBar/RightBarEmpty";
import { getDefaultAvatar } from "@/utility/utility";

export default function RightBarSettingsXList({
  topic,
  type,
  userId,
  blocks,
}: {
  topic: string;
  type: string;
  userId: string;
  blocks: any;
}) {
  let btn1 = "Unblock";

  return (
    <div>
      <div className="flex flex-row justify-between">
        <span>{topic}</span>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs overflow-y-hidden scrollbar-hide">
        <div className="flex flex-row gap-3 w-max ">
          {blocks.length > 0 ? (
            <>
              {blocks.map((block: any) => {
                let defaultUserAvatar: string = getDefaultAvatar(block?.gender);
                return (
                  <RightBarSettingsBlockWindow
                    key={block.id}
                    image={block.avatar || defaultUserAvatar}
                    alt="Profile Image"
                    name={`${block.firstName} ${block.lastName}`}
                    button1={btn1}
                    userId={userId}
                    profileId={block.id}
                  />
                );
              })}
            </>
          ) : (
            <>
              <RightBarEmpty
                msg="No one is Blocked yet, want to discover new friends"
                link={`/friends/${userId}`}
              />
            </>
          )}

          {/* <RightBarSettingsBlockWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          />
          <RightBarSettingsBlockWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          />
          <RightBarSettingsBlockWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          />
          <RightBarSettingsBlockWindow
            image=""
            alt="Profile Image"
            name="Eronne Cooray"
            button1={btn1}
          /> */}
        </div>
      </div>
    </div>
  );
}
