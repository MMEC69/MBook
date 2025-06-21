import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";

export default function Videos({ type }: { type: string }) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      {type === "videos" && <Content type={type} />}
      {type === "videosYour" && <Content type={type} />}
    </div>
  );
}
