import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Content from "../components/Content/Content";
import { getTheme } from "@/components/Navbar/actions/action";

export default async function Home({ user }: { user: any }) {
  const theme = await getTheme(user.id);
  const stylesForNavBar = theme
    ? "h-screen overflow-hidden bg-black"
    : "h-screen overflow-hidden";

  return (
    <div className={stylesForNavBar}>
      <Navbar />
      <Content user={user} theme={theme || false} />
    </div>
  );
}
