import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function NavbarMiddle() {
  return (
    <div className="hidden lg:flex gap-20 p-3 justify-center items-center">
      <FaHome size={32} color="#fff" />
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
