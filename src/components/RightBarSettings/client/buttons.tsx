import React from "react";
import { useFormStatus } from "react-dom";

export function SubmitButtons() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-green-400 p-1 pl-3 pr-3 rounded-lg hover:cursor-pointer hover:bg-green-300"
      disabled={pending}
    >
      Confirm
    </button>
  );
}
