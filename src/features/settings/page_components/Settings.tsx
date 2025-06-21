import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";
import { User } from "@prisma/client";

export default function Settings({
  type,
  userId,
  user,
}: {
  type: string;
  userId: string;
  user: User;
}) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <Content type={type} userId={userId} user={user} />
    </div>
  );
}
