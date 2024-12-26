"use client";
import React, { useActionState } from "react";
import SubmitButton from "./SubmitButton";
import { register } from "../action/action";

export default function RegisterForm() {
  const [state, registerAction] = useActionState(register, undefined);
  return (
    <div>
      <form action={registerAction}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" name="birthday" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input type="radio" id="gender" name="gender" value="Male" />
          <label htmlFor="gender">Male</label>
          <input type="radio" id="gender" name="gender" value="Female" />
          <label htmlFor="gender">Female</label>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
