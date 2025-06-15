"use client";
import { addComment } from "@/components/FeedMiddleBar/actions/action";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { getCommentReacts } from "../action/action";
type CommentWithUser = Comment & { userDetails: User };

export default function CommentsClientPopUp({
  setOpen,
  postId,
  comments,
  user,
  allComments,
}: {
  setOpen: any;
  postId: string;
  comments: any;
  user: User;
  allComments: any;
}) {
  // console.log(comments);
  const [commented, setCommented] = useState(comments);
  const [desc, setDesc] = useState("");

  const [commentReacts, setCommentReacts] = useState([]);

  const add = async () => {
    if (!user || !desc) return;

    addOptimisticComments({
      id: "",
      desc: "Please wait.....",
      createdAt: new Date(Date.now()),
      modifiedAt: new Date(Date.now()),
      tag: [],
      privacy: "",
      story: "",
      comment: "",
      user: user.id,
      post: postId,
      userDetails: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName || "",
        email: "",
        birthday: "",
        gender: "",
        password: "",
        avatar: user.avatar || "/man.png",
        cover: "",
        desc: "Please wait.....",
        lives: "",
        education: [],
        works: [],
        love: "",
        links: [],
        friends: [],
        blocks: [],
        groups: [],
        privacy: "",
        phone: "",
        createdAt: new Date(Date.now()),
      },
    });
    try {
      const createdComment = await addComment(user.id, postId, desc);
      setCommented((prev: any) => [createdComment, ...prev]);
    } catch (error) {
      console.log(error);
    }
  };

  const [optimisticComments, addOptimisticComments] = useOptimistic(
    commented,
    (state, value: CommentWithUser) => [value, ...state]
  );

  const handleClose = () => {
    setOpen(false);
    // state.success && router.refresh();
  };
  return (
    <div className=" absolute w-full h-screen left-0 top-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <div className="w-[500px] h-96 bg-white absolute rounded-lg">
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
        <div className="w-full hover:cursor-pointer absolute left-0 top-5 p-2">
          {/* Write */}
          {user && (
            <div className="flex items-center gap-1">
              <Image
                src={
                  user.avatar
                    ? user.avatar
                    : user.gender === "Male"
                    ? "/man.png"
                    : "/woman.png"
                }
                width={32}
                height={32}
                alt="Profile Image"
                className="w-8 h-8 rounded-full"
              />
              <form
                className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full gap-2"
                action={() => add()}
              >
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="bg-white p-2 rounded-lg outline-none flex-1"
                  onChange={(e) => setDesc(e.target.value)}
                />
                <Image
                  src={"/emojiSelector.png"}
                  alt="Emoji"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
              </form>
            </div>
          )}

          {/* Comments */}
          <div className="hover:cursor-pointer h-[290px] overflow-y-auto p-2">
            {/* Comment */}
            {optimisticComments.map((comment: any) => (
              <div
                className="flex gap-4 justify-between mt-6 bg-pink-100 p-2 rounded-lg"
                key={comment.id}
              >
                {/* Avatar */}
                <Image
                  src={
                    comment.userDetails.avatar
                      ? comment.userDetails.avatar
                      : comment.userDetails.gender === "Male"
                      ? "/man.png"
                      : "/woman.png"
                  }
                  width={40}
                  height={40}
                  alt="Profile Image"
                  className="w-10 h-10 rounded-full"
                />

                {/* Desc */}
                <div className="flex flex-col gap-2 flex-1 ">
                  <span className="font-medium">
                    {comment.userDetails.firstName &&
                    comment.userDetails.lastName
                      ? comment.userDetails.firstName +
                        " " +
                        comment.userDetails.lastName
                      : comment.userDetails.userName}
                  </span>
                  <p>{comment.desc}</p>
                  <div className="flex items-center gap-8 text-xs to-gray-500 mt-2">
                    <div className="flex items-center gap-4">
                      {/* <Image
                        src={"/heart2.png"}
                        alt="Like"
                        width={12}
                        height={12}
                        className="cursor-pointer w-3 h-3"
                      /> */}
                      {/* <span className="text-pink-700"> | </span>
                      <span className="text-pink-700">123 Likes</span> */}
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <BsThreeDots
                  size={16}
                  color="pink"
                  className="cursor-pointer w-4 h-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
