"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SendButtonClient() {
  const { pending } = useFormStatus();
  return (
    <button
      className=" p-2 bg-slate-300 rounded-lg text-slate-500 hover:text-slate-100 disabled:bg-slate-200 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? "..." : "Send"}
    </button>
  );
}
