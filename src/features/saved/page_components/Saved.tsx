import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";

export default function Saved({ type }: { type: string }) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      {type === "saved" && <Content type={type} />}
      {type === "savedAll" && <Content type={type} />}
      {type === "savedAllSearch" && <Content type={type} />}
      {type === "savedCollection" && <Content type={type} />}
      {type === "savedCollectionSearch" && <Content type={type} />}
      {type === "savedCreate" && <Content type={type} />}
    </div>
  );
}
