"use client";
import React, { useActionState } from "react";
import { login } from "../action/action";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <div>
      <form action={loginAction}>
        <div>
          <input id="email" name="email" placeholder="Email" />
        </div>
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
          />
          {state?.errors?.password && <p>{state.errors.password}</p>}
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
