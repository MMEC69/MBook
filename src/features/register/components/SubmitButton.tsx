import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button disabled={pending}>Register</button>
    </div>
  );
}
