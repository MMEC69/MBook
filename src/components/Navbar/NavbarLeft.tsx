import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { fetchSession } from "@/utility/utility";
import { search } from "./actions/action";
import SearchBar from "./client/SearchBar";

export default async function NavbarLeft() {
  const userId = (await fetchSession()) as string;

  return (
    <div className="flex flex-row justify-between pl-3 items-center gap-3">
      {/* <Image
        src="/temp_placeholder.png"
        alt="place_holder"
        width={16}
        height={16}
      /> */}
      <Link href={`/home/${userId}`}>
        <Image src="/logo.png" alt="place_holder" width={32} height={32} />
      </Link>

      <SearchBar userId={userId} />
    </div>
  );
}
