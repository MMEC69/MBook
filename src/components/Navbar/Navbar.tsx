import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import NavbarMiddle from "./NavbarMiddle";
import { fetchSession } from "@/utility/utility";

export default async function Navbar() {
  const userId = (await fetchSession()) as string;
  return (
    <div>
      <div className="h-16 flex flex-row justify-between bg-pink-200 w-full">
        <NavbarLeft />
        <NavbarMiddle userId={userId} />
        <NavbarRight />
      </div>
    </div>
  );
}
