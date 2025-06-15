"use client";
import React, { useActionState } from "react";
import { CiSearch } from "react-icons/ci";
import { search } from "../actions/action";

export default function SearchBar({ userId }: { userId: string }) {
  const [state, searchAction] = useActionState(search, undefined);
  return (
    <form
      className="flex flex-row justify-between items-center gap-1 bg-white h-8 rounded p-1"
      action={(formData) => searchAction({ formData, userId })}
    >
      <input
        type="text"
        placeholder="Search..."
        className="outline-none p-0.5 rounded cursor-pointer"
      />
      <button>
        <CiSearch size={32} color="pink" />
      </button>
    </form>
  );
}
