"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Group, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import SendButtonClient from "@/components/AddPostMiddleBar/client/SendButtonClient";
import OptionsClient from "@/components/AddPostMiddleBar/client/OptionsClient";
import { addPost } from "../action/action";

export default function GroupAddPostClient({
  user,
  groupProfile,
}: {
  user: User;
  groupProfile: Group;
}) {
  if (!user) return null;
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState<any>();
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm shadow-md">
      {/* Avatar */}
      <Link href={`/profile/${user.id}`}>
        <Image
          src={
            user.avatar
              ? user.avatar
              : user.gender === "Male"
              ? "/man.png"
              : "/woman.png"
          }
          alt="Profile Image Placeholder"
          className="size-12 object-cover rounded-full hover:opacity-90"
          width={48}
          height={48}
        />
      </Link>

      {/* Post */}
      <div className="flex-1">
        {/* Text input */}
        <form
          action={(formData) =>
            addPost(
              groupProfile.id,
              user.id,
              formData,
              image?.secure_url || "",
              groupProfile.members || []
            )
          }
          className="flex gap-4"
        >
          <textarea
            placeholder="What's on your mind ?"
            className="bg-slate-100 rounded-lg flex-1 p-2 outline-[0.5px] outline-pink-400"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          {/* holybible.png */}
          <div className=" flex flex-col justify-center gap-3">
            <Image
              src={"/holybible.png"}
              alt="Profile Image Placeholder"
              className="size-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            <Image
              src={"/emojiSelector.png"}
              alt="Profile Image Placeholder"
              className="size-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
          </div>

          <SendButtonClient />
        </form>

        {/* Post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="MBookSocial"
            onSuccess={(result, { widget }) => {
              setImage(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <OptionsClient
                  src="/addPhoto.png"
                  alt="Add Photo"
                  option="Add Photo"
                  open={open}
                />
              );
            }}
          </CldUploadWidget>

          <OptionsClient
            src="/addVideo.png"
            alt="Add Video"
            option="Add Video"
            open={() => {}}
          />
          <OptionsClient
            src="/addPoll.png"
            alt="Add Poll"
            option="Add Poll"
            open={() => {}}
          />
          <OptionsClient
            src="/addEvent.png"
            alt="Add Event"
            option="Add Event"
            open={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
