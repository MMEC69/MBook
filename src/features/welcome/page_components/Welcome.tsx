import React from "react";
import WelcomeButton from "../components/WelcomeButton/WelcomeButton";

export default function Welcome() {
  return (
    <div className="flex items-center justify-center h-screen bg-[url('/background.gif')] bg-cover">
      <WelcomeButton />
    </div>
  );
}
