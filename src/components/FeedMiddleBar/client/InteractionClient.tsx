"use client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";
import { switchReact } from "../actions/action";

export default function InteractionClient({
  reacts,
  comments,
  shares,
  userId,
  postId,
}: {
  reacts: string[];
  comments: number;
  shares: number;
  userId: string;
  postId: string;
}) {
  const [reacted, setReacted] = useState({
    reactedCount: reacts.length,
    isReacted: userId ? reacts.includes(userId) : false,
  });

  const [optimisticReact, switchOptimisticReact] = useOptimistic(
    reacted,
    (state, value) => {
      return {
        reactedCount: state.isReacted
          ? state.reactedCount - 1
          : state.reactedCount + 1,
        isReacted: !state.isReacted,
      };
    }
  );

  const reactAction = async () => {
    switchOptimisticReact("");
    try {
      switchReact(userId, postId);
      setReacted((state) => ({
        reactedCount: state.isReacted
          ? state.reactedCount - 1
          : state.reactedCount + 1,
        isReacted: !state.isReacted,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between text-sm my-4">
      <div className="flex gap-8">
        <div className="flex items-center gap-4 bg-pink-100 p-2 rounded-xl">
          <form action={() => reactAction()}>
            <button className=" align-middle">
              <Image
                src={
                  optimisticReact.isReacted ? "/heart2.png" : "/heartEmpty.png"
                }
                width={16}
                height={16}
                alt="like button"
                className="cursor-pointer"
              />
            </button>
          </form>
          <span className="text-pink-700"> | </span>
          <span className="text-pink-700">
            {optimisticReact.reactedCount}{" "}
            <span className="hidden md:inline">Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-pink-100 p-2 rounded-xl">
          <Image
            src={"/comment.png"}
            width={16}
            height={16}
            alt="comment button"
            className="cursor-pointer"
          />
          <span className="text-pink-700"> | </span>
          <span className="text-pink-700">
            {comments} <span className="hidden md:inline">Comments</span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-pink-100 p-2 rounded-xl">
        <Image
          src={"/share.png"}
          width={16}
          height={16}
          alt="share button"
          className="cursor-pointer"
        />
        <span className="text-pink-700"> | </span>
        <span className="text-pink-700">
          {shares} <span className="hidden md:inline">Shares</span>
        </span>
      </div>
    </div>
  );
}
