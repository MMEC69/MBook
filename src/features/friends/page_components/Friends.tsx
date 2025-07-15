import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";
import { fetchRequests } from "@/utility/utility";

export default async function Friends({
  type,
  userId,
}: {
  type: string;
  userId: string;
}) {
  const receivedRequests = await fetchRequests(userId, false);

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      {(type === "home" || type === "friendLists") && (
        <Content type={type} userId={userId} />
      )}
      {/* {type === "friendLists" && <Content type={type} userId={userId} />} */}
      {type === "firendRequestsReceived" && (
        <Content
          type={type}
          userId={userId}
          receivedRequests={receivedRequests}
        />
      )}
      {type === "firendRequestsSent" && <Content type={type} userId={userId} />}
      {type === "friendBirthdays" && <Content type={type} userId={userId} />}
      {type === "suggestions" && <Content type={type} userId={userId} />}
      {type === "all" && <Content type={type} userId={userId} />}
    </div>
  );
}
