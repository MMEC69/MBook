"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useActionState, useState } from "react";
import { updateProfile } from "../action/action";
import { useRouter } from "next/navigation";
import { ProfileUpdateButton } from "./buttons";

export default function EditProfilePopUp({
  setOpen,
  userId,
}: {
  setOpen: any;
  userId: string;
}) {
  const [profile, setProfile] = useState<any>(false);

  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    state.success && router.refresh();
  };

  return (
    <div className=" absolute w-full h-screen left-0 top-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <div className="w-96 h-48 bg-white absolute  rounded-lg">
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
        <div className="p-1 absolute top-6 w-full flex flex-col gap-2">
          <CldUploadWidget
            uploadPreset="MBookSocial"
            onSuccess={(result) => {
              setProfile(result.info);
            }}
          >
            {({ open }) => {
              return (
                <button
                  className="bg-slate-500 w-full p-1 text-center hover:bg-slate-400 text-white rounded-md"
                  onClick={() => open()}
                >
                  Select Profile
                </button>
              );
            }}
          </CldUploadWidget>
          {!profile && !state.success && !state.error && (
            <span className=" text-center">Profile is not selected</span>
          )}
          {profile && !state.success && !state.error && (
            <span className=" text-center">Profile is selected</span>
          )}
          {state.success && (
            <span className="text-green-500 text-center">
              Profile has been updated
            </span>
          )}
          {state.error && (
            <span className="text-red-500 text-center">
              Something went wrong
            </span>
          )}
        </div>

        <div className="w-full absolute bottom-0 text-xs text-center flex flex-col justify-center">
          <form
            className=" p-1"
            action={(formData) =>
              formAction({
                formData,
                profile: profile?.secure_url || "",
                userId,
              })
            }
          >
            <ProfileUpdateButton />
          </form>
        </div>
      </div>
    </div>
  );
}
