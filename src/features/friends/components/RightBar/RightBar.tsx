import RightBarFriendRequestsXList from "@/components/RightBarFriends/RightBarFriendRequestsXList";
import MiddleBar from "@/features/profile/components/MiddleBar/MiddleBar";
import {
  fetchFriends,
  fetchPeopleYouMayKnow,
  fetchReceivedRequests,
  fetchSentRequests,
  fetchSuggestedUsers,
} from "@/utility/utility";
import React from "react";

export default async function RightBar({
  option,
  userId,
}: {
  option: string;
  userId: string;
}) {
  const suggestedUsers = await fetchSuggestedUsers(userId);
  const peopleYouMayKnow = await fetchPeopleYouMayKnow(userId);
  const allFriends = await fetchFriends(userId);
  const sentRequests = await fetchSentRequests(userId);
  const receivedRequests = await fetchReceivedRequests(userId);

  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {option === "home" && (
        <>
          <RightBarFriendRequestsXList
            topic="Received Requests"
            type="accepting"
            seeAll={`/friends/requests/received/${userId}`}
            userId={userId}
            list={receivedRequests}
          />
          <RightBarFriendRequestsXList
            topic="You may know these people"
            type="requesting"
            seeAll={`/friends/suggestions/${userId}`}
            userId={userId}
            list={peopleYouMayKnow}
          />
          <RightBarFriendRequestsXList
            topic="Suggestions"
            type="requesting"
            seeAll={`/friends/suggestions/${userId}`}
            list={suggestedUsers}
            userId={userId}
          />
        </>
      )}
      {option === "friendLists" && (
        <>
          <RightBarFriendRequestsXList
            topic="Received Requests"
            type="accepting"
            seeAll={`/friends/requests/received/${userId}`}
            userId={userId}
            list={receivedRequests}
          />
          <RightBarFriendRequestsXList
            topic="You may know these people"
            type="requesting"
            seeAll={`/friends/suggestions/${userId}`}
            list={peopleYouMayKnow}
            userId={userId}
          />
          <RightBarFriendRequestsXList
            topic="Suggestions"
            type="requesting"
            seeAll={`/friends/suggestions/${userId}`}
            list={suggestedUsers}
            userId={userId}
          />
        </>
      )}
      {option === "firendRequestsReceived" && (
        <>
          <RightBarFriendRequestsXList
            topic="Received Requests"
            type="accepting"
            userId={userId}
            list={receivedRequests}
          />
          {/* <MiddleBar /> */}
        </>
      )}
      {option === "firendRequestsSent" && (
        <>
          <RightBarFriendRequestsXList
            topic="Sent Requests"
            type="refreshing"
            userId={userId}
            list={sentRequests}
          />
          {/* <MiddleBar /> */}
        </>
      )}
      {option === "all" && (
        <>
          <RightBarFriendRequestsXList
            topic="All Friends"
            type="accepting"
            userId={userId}
            list={allFriends}
          />
          {/* <MiddleBar /> */}
        </>
      )}
      {option === "friendBirthdays" && (
        <>
          <RightBarFriendRequestsXList
            topic="Birthdays"
            type="wish"
            userId={userId}
          />
          {/* <MiddleBar /> */}
        </>
      )}
      {option === "suggestions" && (
        <>
          <RightBarFriendRequestsXList
            topic="Suggestions"
            type="requesting"
            userId={userId}
            list={suggestedUsers}
          />
          {/* <MiddleBar /> */}
        </>
      )}
    </div>
  );
}
