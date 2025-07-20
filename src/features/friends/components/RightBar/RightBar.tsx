import React from "react";
import RightBarFriendRequestsXList from "@/components/RightBarFriends/RightBarFriendRequestsXList";
import RightBarFriendXYList from "@/components/RightBarFriends/RightBarFriendXYList";
import {
  fetchFriends,
  fetchPeopleYouMayKnow,
  fetchRequests,
  fetchSuggestedUsers,
} from "@/utility/utility";
import {
  getBirthdays,
  getUpcomingBirthdays,
} from "@/features/home/components/RightBar/actions/action";

export default async function RightBar({
  option,
  userId,
}: {
  option: string;
  userId: string;
}) {
  const suggestedUsers = await fetchSuggestedUsers(userId);
  // const peopleYouMayKnow = await fetchPeopleYouMayKnow(userId);
  const allFriends = await fetchFriends(userId);
  const sentRequests = await fetchRequests(userId, true);
  const receivedRequests = await fetchRequests(userId, false);
  const birthdays = await getBirthdays(userId);
  const upcomingBirthdays = await getUpcomingBirthdays(userId);

  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      {(option === "home" || option === "friendLists") && (
        <>
          <RightBarFriendRequestsXList
            topic="Received Requests"
            type="accepting"
            seeAll={`/friends/requests/received/${userId}`}
            userId={userId}
            list={receivedRequests}
          />
          {/* <RightBarFriendRequestsXList
            topic="You may know these people"
            type="requesting"
            seeAll={`/friends/suggestions/${userId}`}
            userId={userId}
            list={peopleYouMayKnow}
          /> */}
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
          <RightBarFriendXYList
            topic="Received Requests"
            type="accepting"
            userId={userId}
            list={receivedRequests}
          />
        </>
      )}
      {option === "firendRequestsSent" && (
        <>
          <RightBarFriendXYList
            topic="Sent Requests"
            type="refreshing"
            userId={userId}
            list={sentRequests}
          />
        </>
      )}
      {option === "all" && (
        <>
          <RightBarFriendXYList
            topic="All Friends"
            type="accepting"
            userId={userId}
            list={allFriends}
            isAllFriends={true}
          />
        </>
      )}
      {option === "friendBirthdays" && (
        <>
          <RightBarFriendXYList
            topic="Birthdays"
            type="wish"
            userId={userId}
            list={birthdays}
          />
          <RightBarFriendXYList
            topic="Upcoming Birthdays"
            type="wish"
            userId={userId}
            list={upcomingBirthdays}
          />
        </>
      )}
      {option === "suggestions" && (
        <>
          <RightBarFriendXYList
            topic="Suggestions"
            type="requesting"
            userId={userId}
            list={suggestedUsers}
          />
        </>
      )}
    </div>
  );
}
