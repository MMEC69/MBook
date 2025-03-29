import Option from "@/components/LeftBarOptions/Option";
import { fetchSession } from "@/utility/utility";
import React from "react";

export default async function LeftBarFriends() {
  const userId = (await fetchSession()) as string;
  return (
    <div className="flex flex-col gap-6">
      <div className=" p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Option
          link={`/friends/lists/${userId}`}
          image="/friends.png"
          alt="Friend Lists"
          name="Friend Lists"
        />
        <Option
          link={`/friends/requests/received/${userId}`}
          image="/person.png"
          alt="Received Requests"
          name="Received Requests"
        />
        <Option
          link={`/friends/requests/sent/${userId}`}
          image="/impatient.png"
          alt="Sent Requests"
          name="Sent Requests"
        />
        <Option
          link={`/friends/suggestions/${userId}`}
          image="/social-interaction.png"
          alt="Suggestions"
          name="Suggestions"
        />
        <Option
          link={`/friends/all/${userId}`}
          image="/friends.png"
          alt="All Friends"
          name="All Friends"
        />
        <Option
          link={`/friends/birthdays/${userId}`}
          image="/cake2.png"
          alt="Birthdays"
          name="Birthdays"
        />
      </div>
    </div>
  );
}
