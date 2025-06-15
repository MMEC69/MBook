import React from "react";
import { useFormStatus } from "react-dom";

export function ShareButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-green-400 p-1 pl-5 pr-5 rounded-lg hover:cursor-pointer hover:bg-green-300"
      disabled={pending}
    >
      Share
    </button>
  );
}
