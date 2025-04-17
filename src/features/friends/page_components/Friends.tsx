import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";

export default function Friends({
  type,
  userId,
}: {
  type: string;
  userId: string;
}) {
  return (
    <div>
      <Navbar />
      {type === "home" && <Content type={type} userId={userId} />}
      {type === "friendLists" && <Content type={type} userId={userId} />}
      {type === "firendRequestsReceived" && (
        <Content type={type} userId={userId} />
      )}
      {type === "firendRequestsSent" && <Content type={type} userId={userId} />}
      {type === "friendBirthdays" && <Content type={type} userId={userId} />}
      {type === "suggestions" && <Content type={type} userId={userId} />}
      {type === "all" && <Content type={type} userId={userId} />}
    </div>
  );
}
