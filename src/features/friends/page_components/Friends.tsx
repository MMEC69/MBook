import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";

export default function Friends({ type }: { type: string }) {
  return (
    <div>
      <Navbar />
      {type === "home" && <Content type={type} />}
      {type === "friendLists" && <Content type={type} />}
      {type === "firendRequestsReceived" && <Content type={type} />}
      {type === "firendRequestsSent" && <Content type={type} />}
      {type === "friendBirthdays" && <Content type={type} />}
      {type === "suggestions" && <Content type={type} />}
      {type === "all" && <Content type={type} />}
    </div>
  );
}
