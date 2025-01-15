import React from "react";
import Image from "next/image";

export default function NavbarMiddle() {
  return (
    <div className="sm:hidden md:hidden lg:flex xl:flex flex-row gap-20 p-3 justify-center">
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
  );
}
