"use client";
import React, { useActionState } from "react";
import { CiSearch } from "react-icons/ci";
import { search } from "../actions/action";

export default function SearchBar() {
  const [state, searchAction] = useActionState(search, undefined);
  return (
    <div className="flex flex-row justify-between items-center gap-1 bg-white h-8 rounded p-1">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none p-0.5 rounded cursor-pointer"
      />
      <CiSearch size={32} color="pink" onClick={searchAction} />
    </div>
  );
}
