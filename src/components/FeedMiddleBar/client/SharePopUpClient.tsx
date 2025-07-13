"use client";
import React, { useActionState } from "react";
import Image from "next/image";
import { sharePost } from "@/features/register/action/action";
import { ShareButton } from "./Buttons";

export default function SharePopUpClient({
  setOpen,
  userId,
  postId,
}: {
  setOpen: any;
  userId: string;
  postId: string;
}) {
  const handleClose = () => {
    setOpen(false);
    // state.success && router.refresh();
  };
  const [state, formAction] = useActionState(sharePost, {
    success: false,
    error: false,
  });
  return (
    <div className=" absolute w-full h-screen left-0 top-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <div className="w-96 h-32 bg-white absolute rounded-lg">
        <div
          className=" hover:cursor-pointer absolute right-0 top-0"
          onClick={() => handleClose()}
        >
          <Image
            src={"/close.png"}
            alt={"X"}
            width={28}
            height={28}
            className="hover:opacity-70"
          />
        </div>
        <div className="w-full p-2 absolute top-4 flex flex-col gap-2">
          <form action={(formData) => formAction({ formData, userId, postId })}>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Description</label>
              <textarea
                // type="text"
                className=" border-b-2 w-full outline-none text-sm"
                id="desc"
                name="desc"
              />
              {state?.errors?.desc && (
                <p className=" text-red-500 bg-yellow-100 pl-2 rounded-lg">
                  {state.errors.desc}
                </p>
              )}
              {!state.errors && state.success && (
                <span className="text-green-500 text-left">
                  Post has been shared
                </span>
              )}
              {!state.errors && state.error && (
                <span className="text-red-500 text-left">
                  Something went wrong
                </span>
              )}
              <div className="flex flex-row gap-3 justify-end">
                <ShareButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
