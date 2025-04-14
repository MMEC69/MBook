import RightBarCreateForm from "@/components/RightBarSaved/RightBarCreateForm";
import RightBarSavedYList from "@/components/RightBarSaved/RightBarSavedYList";
import SearchBarSmall from "@/components/SearchBars/SearchBarSmall";
import React from "react";

export default function RightBar({ type }: { type: string }) {
  return (
    <div className="flex flex-col gap-1 pl-2 pr-2">
      {type === "saved" && (
        <>
          <SearchBarSmall />
          <RightBarSavedYList topic="Saved" type={type} />
        </>
      )}
      {type === "savedAll" && (
        <>
          <SearchBarSmall />
          <RightBarSavedYList topic="All" type={type} />
        </>
      )}
      {type === "savedAllSearch" && (
        <>
          <SearchBarSmall />
          <RightBarSavedYList topic="Search Result" type={type} />
        </>
      )}
      {type === "savedCollection" && (
        <>
          <SearchBarSmall />
          <RightBarSavedYList topic="Collections" type={type} />
        </>
      )}
      {type === "savedCollectionSearch" && (
        <>
          <SearchBarSmall />
          <RightBarSavedYList topic="Search Result" type={type} />
        </>
      )}
      {type === "savedCreate" && (
        <RightBarCreateForm topic="Create Collection" type={type} />
      )}
    </div>
  );
}
