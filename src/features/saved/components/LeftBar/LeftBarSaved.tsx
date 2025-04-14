import Option from "@/components/LeftBarOptions/Option";
import { fetchSession } from "@/utility/utility";
import React from "react";

export default async function LeftBarSaved() {
  const userId = (await fetchSession()) as string;
  return (
    <div className="flex flex-col gap-6">
      <div className=" p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Option
          link={`/saved/all/${userId}`}
          image="/save.png"
          alt="All"
          name="All"
        />
        <Option
          link={`/saved/collection/${userId}`}
          image="/list.png"
          alt="Collection List"
          name="Collection List"
        />
        <Option
          link={`/saved/create/${userId}`}
          image="/save (1).png"
          alt="Create Collection"
          name="Create Collection"
        />
      </div>
    </div>
  );
}
