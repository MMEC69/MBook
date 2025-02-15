"use client";
import React, { useActionState } from "react";
import { login } from "../action/action";
import SubmitButton from "./SubmitButton";
import Link from "next/link";

export default function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <div className="flex items-center justify-center h-screen bg-[url('/background.gif')] bg-cover">
      <form
        action={loginAction}
        className="flex flex-col border-pink-400 bg-pink-400 text-white gap-4 px-4 py-10 w-fit items-center rounded-lg"
      >
        <legend className="text-3xl font-medium">Shall we login?</legend>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder=""
            className=" border-b-2 border-b-white bg-transparent text-white w-[300px] md:w-[500px] outline-none text-2xl"
          />
          <Link
            href={"/register"}
            className="text-xs flex justify-end hover:cursor-pointer"
          >
            No Account ?
          </Link>
        </div>
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder=""
            className=" border-b-2 border-b-white bg-transparent text-white  w-[300px] md:w-[500px] outline-none text-2xl"
          />
          <span className="text-xs flex justify-end hover:cursor-pointer">
            Forgot me ?{" "}
          </span>
          {state?.errors?.password && <p>{state.errors.password}</p>}
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
