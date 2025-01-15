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
          {state?.errors?.firstName && <p>{state.errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
          {state?.errors?.lastName && <p>{state.errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          {state?.errors?.email && <p>{state.errors.email}</p>}
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" name="birthday" />
          {state?.errors?.birthday && <p>{state.errors.birthday}</p>}
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input type="radio" id="gender" name="gender" value="Male" />
          <label htmlFor="gender">Male</label>
          <input type="radio" id="gender" name="gender" value="Female" />
          <label htmlFor="gender">Female</label>
          {state?.errors?.gender && <p>{state.errors.gender}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          {state?.errors?.password && <p>{state.errors.password[0]}</p>}
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
