import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/content/Content";

export default function Groups({ type }: { type: string }) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      {type === "groups" && <Content type={type} />}
      {type === "groupsCreate" && <Content type={type} />}
      {type === "groupsDiscover" && <Content type={type} />}
      {type === "groupsDiscoverSearch" && <Content type={type} />}
      {type === "groupsSuggested" && <Content type={type} />}
      {type === "groupsYour" && <Content type={type} />}
      {type === "groupsYourSearch" && <Content type={type} />}
    </div>
  );
}
