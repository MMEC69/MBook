import Option from "@/components/LeftBarOptions/Option";
import { fetchSession } from "@/utility/utility";
import React from "react";

export default async function LeftBarGroups() {
  const userId = (await fetchSession()) as string;
  return (
    <div className="flex flex-col gap-6">
      <div className=" p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Option
          link={`/groups/discover/${userId}`}
          image="/posts2.png"
          alt="Discover Groups"
          name="Discover Groups"
        />
        <Option
          link={`/groups/your/${userId}`}
          image="/posts2.png"
          alt="Your Groups"
          name="Your Groups"
        />
        <Option
          link={`/groups/suggested/${userId}`}
          image="/posts2.png"
          alt="Suggested Groups"
          name="Suggested Groups"
        />
        <Option
          link={`/groups/create/${userId}`}
          image="/posts2.png"
          alt="Create New Group"
          name="Create New Group"
        />
      </div>
    </div>
  );
}
