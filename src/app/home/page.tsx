"use client";
import { logout } from "@/features/login/action/action";
import React from "react";

export default function page() {
  return (
    <div>
      home
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
