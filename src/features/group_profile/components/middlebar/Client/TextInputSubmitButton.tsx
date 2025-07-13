import React from "react";
import { useFormStatus } from "react-dom";

export default function () {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-green-600 hover:opacity-80 text-white px-3 py-2 text-xs"
      disabled={pending}
    >
      Change
    </button>
  );
}
