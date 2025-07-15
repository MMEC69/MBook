"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SearchResult from "../SearchResult";
import { getSearchResults } from "../action/action";

export default function MiddleBarClient() {
  const params = useParams();
  const searchItem = params.id as string;
  const [searchResult, setSearchResult] = useState<any>([]);

  //need to fix the code to get async values
  useEffect(() => {
    const result = getSearchResults(searchItem);
    console.log(result);
    setSearchResult(searchResult);
  }, []);
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2 p-1">
      {searchResult.map((singleSearchResult: any) => {
        return <SearchResult key={singleSearchResult.id} />;
      })}
      {/* <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult /> */}
    </div>
  );
}
