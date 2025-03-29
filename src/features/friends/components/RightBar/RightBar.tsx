import RightBarFriendRequestsXList from "@/components/RightBarFriends/RightBarFriendRequestsXList";
import MiddleBar from "@/features/profile/components/MiddleBar/MiddleBar";
import { fetchSession } from "@/utility/utility";
import React from "react";

export default async function RightBar({ option }: { option: string }) {
  const userId = (await fetchSession()) as string;
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {option === "home" && (
        <>
          <RightBarFriendRequestsXList
            topic="Received Requests"
            type="accepting"
            seeAll={`/friends/requests/received/${userId}`}
          />
          <RightBarFriendRequestsXList
            topic="You may know these people"
            type="requesting"
            seeAll={`/friends/suggestions/${userId}`}
          />
          <RightBarFriendRequestsXList
            topic="Suggestions"
            type="requesting"
            seeAll={`/friends/suggestions/${userId}`}
          />
        </>
      )}
      {option === "friendLists" && (
        <>
          <RightBarFriendRequestsXList
            topic="Received Requests"
            type="accepting"
            seeAll={`/friends/requests/received/${userId}`}
          />
          <RightBarFriendRequestsXList
            topic="You may know these people"
            type="requesting"
            seeAll={`/friends/suggestions/${userId}`}
          />
          <RightBarFriendRequestsXList
            topic="Suggestions"
            type="requesting"
            seeAll={`/friends/suggestions/${userId}`}
          />
        </>
      )}
      {option === "firendRequestsReceived" && (
        <>
          <RightBarFriendRequestsXList
            topic="Received Requests"
            type="accepting"
          />
          <MiddleBar />
        </>
      )}
      {option === "firendRequestsSent" && (
        <>
          <RightBarFriendRequestsXList
            topic="Sent Requests"
            type="refreshing"
          />
          <MiddleBar />
        </>
      )}
      {option === "all" && (
        <>
          <RightBarFriendRequestsXList topic="All Friends" type="accepting" />
          <MiddleBar />
        </>
      )}
      {option === "friendBirthdays" && (
        <>
          <RightBarFriendRequestsXList topic="Birthdays" type="wish" />
          <MiddleBar />
        </>
      )}
      {option === "suggestions" && (
        <>
          <RightBarFriendRequestsXList topic="Suggestions" type="requesting" />
          <MiddleBar />
        </>
      )}
    </div>
  );
}
