import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";

export default function Chat() {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <Content />
    </div>
  );
}
