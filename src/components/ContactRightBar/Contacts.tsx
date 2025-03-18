import React from "react";
import Link from "next/link";
import Contact from "./Contact";
import { fetchSession } from "@/utility/utility";
import { fetchContacts } from "./action/action";

export default async function Contacts() {
  const userId = (await fetchSession()) as string;
  const contacts: any = await fetchContacts(userId);
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Contacts</span>
        <Link href="/" className="text-pink-600 text-xs">
          See all
        </Link>
      </div>
      {/* Bottom */}
      <Contact />
    </div>
  );
}
