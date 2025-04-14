import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";

export default function Settings({ type }: { type: string }) {
  return (
    <div>
      <Navbar />
      <Content type={type} />
    </div>
  );
}
