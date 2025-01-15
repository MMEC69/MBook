import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function NavbarRight() {
  return (
    <div className="flex flex-row items-center justify-end pr-3">
      <div className="sm:hidden md:hidden lg:flex xl:flex flex-row items-center justify-end gap-3">
        <Image
          src="/temp_placeholder.png"
          alt="place_holder"
          width={32}
          height={32}
        />
        <Image
          src="/temp_placeholder.png"
          alt="place_holder"
          width={32}
          height={32}
        />
        <Image
          src="/temp_placeholder.png"
          alt="place_holder"
          width={32}
          height={32}
        />
        <Image
          src="/temp_placeholder.png"
          alt="place_holder"
          width={32}
          height={32}
        />
      </div>

      <MobileMenu />
    </div>
  );
}
