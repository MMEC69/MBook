"use client";
import React, { useActionState } from "react";
import SubmitButton from "./SubmitButton";
import { register } from "../action/action";

export default function RegisterForm() {
  const [state, registerAction] = useActionState(register, undefined);
  return (
    <div className="flex items-center justify-center h-screen bg-[url('/background.gif')] bg-cover">
      <form
        action={registerAction}
        className="flex flex-col border-pink-400 bg-pink-400 text-white gap-4 px-4 py-10 w-fit items-center rounded-lg"
      >
        <legend className="text-3xl font-medium">
          Let's begin a new life here
        </legend>
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className=" border-b-2 border-b-white bg-transparent text-white w-[300px] md:w-[500px] outline-none text-2xl"
          />
          {state?.errors?.firstName && <p>{state.errors.firstName}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className=" border-b-2 border-b-white bg-transparent text-white  w-[300px] md:w-[500px] outline-none text-2xl"
          />
          {state?.errors?.lastName && <p>{state.errors.lastName}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className=" border-b-2 border-b-white bg-transparent text-white  w-[300px] md:w-[500px] outline-none text-2xl"
          />
          {state?.errors?.email && <p>{state.errors.email}</p>}
        </div>
        <div className="flex gap-1 justify-between items-center w-[300px] md:w-[500px]">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            className="flex-1 rounded-md"
          />
          {state?.errors?.birthday && <p>{state.errors.birthday}</p>}
        </div>
        <div className="flex gap-1 items-center w-[300px] md:w-[500px]">
          <label htmlFor="gender">Gender</label>
          <div className="flex gap-2">
            <input type="radio" id="gender" name="gender" value="Male" />
            <label htmlFor="gender">Male</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="gender" name="gender" value="Female" />
            <label htmlFor="gender">Female</label>
          </div>
          {state?.errors?.gender && <p>{state.errors.gender}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className=" border-b-2 border-b-white bg-transparent text-white  w-[300px] md:w-[500px] outline-none text-2xl"
          />
          {state?.errors?.password && <p>{state.errors.password[0]}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className=" border-b-2 border-b-white bg-transparent text-white  w-[300px] md:w-[500px] outline-none text-2xl"
          />
        </div>
        <div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
