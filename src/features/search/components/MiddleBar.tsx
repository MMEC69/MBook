import React from "react";
import SearchResult from "./SearchResult";

export default function MiddleBar() {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2 p-1">
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </div>
  );
}
