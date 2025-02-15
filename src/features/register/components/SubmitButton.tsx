import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <div className=" bg-pink-600 px-4 py-2 text-xl rounded-lg hover:bg-pink-500">
      <button disabled={pending}>Register</button>
    </div>
  );
}
