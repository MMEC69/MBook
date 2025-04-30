import LeftBarOptions from "@/components/LeftBarOptions/LeftBarOptions";
import React from "react";
import LeftBarProfile from "./LeftBarProfile";
import { User } from "@prisma/client";

export default function LeftBar({ user }: { user: User }) {
  return (
    <div className="flex flex-col gap-6">
      {/* <LeftBarProfile user={user} /> */}
      <LeftBarOptions />
    </div>
  );
}
