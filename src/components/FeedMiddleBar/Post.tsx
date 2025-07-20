import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import { fetchSession } from "@/utility/utility";
import { Post as SinglePost } from "@prisma/client";
import {
  getFirstName,
  getLastName,
  getUser,
} from "@/lib/mongo/prismaFunctions/user/get/user";
import {
  getComments,
  getCommentsWithUserDetails,
  getReacts,
  getShares,
} from "./actions/action";
import InteractionClient from "./client/InteractionClient";
import CommentsClient from "./client/CommentsClient";
import PostImageContainer from "./client/PostImageContainer";
import { CiTrash } from "react-icons/ci";

export default async function Post({ post }: { post: SinglePost }) {
  const userId = (await fetchSession()) as string;
  const user = await getUser(userId);
  const fullName = `${await getFirstName(post.user)} ${await getLastName(
    post.user
  )}`;

  const reactList = await getReacts(post.id);
  const reactedUserIds = reactList.map((react) => {
    return react.user;
  });

  const commentList = await getComments(post.id);
  const comments = await getCommentsWithUserDetails(commentList);
  // console.log(comments);
  const numberOfComments = commentList.length;

  const shareList = await getShares(post.id);
  const numberOfShares = shareList.length;
  // change the user id to the ownsers user id
  return (
    <div className="flex flex-col gap-4 bg-slate-100 p-5 rounded-lg">
      {/* User */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href={`/profile/${post.user}`}>
            <Image
              src={
                user.avatar
                  ? user.avatar
                  : user.gender === "Male"
                  ? "/man.png"
                  : "/woman.Png"
              }
              alt="User Account"
              width={40}
              height={40}
              className="size-10 rounded-full hover:opacity-90"
            />
          </Link>

          <Link href={`/profile/${post.user}`}>
            <span className="font-medium hover:underline ">{fullName}</span>
          </Link>
        </div>

        <BsThreeDots size={16} color="#ed5fe1" />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-4 ">
        {post.img.length > 0 && (
          //need to add the img container component here
          <PostImageContainer images={post.img} />
          // <div className="w-full min-h-96 relative">
          //   <Image
          //     src={post.img[0]}
          //     fill
          //     className=" object-cover rounded-md"
          //     alt="Post Image"
          //   />
          // </div>
        )}

        <p>{post.desc}</p>
      </div>
      {/* Interaction */}
      {/* <Interactions
        reacts={reactList.length}
        comments={numberOfComments}
        shares={numberOfShares}
      /> */}
      <InteractionClient
        reacts={reactedUserIds}
        comments={numberOfComments}
        shares={numberOfShares}
        userId={userId}
        postId={post.id}
        postOwner={post.user}
      />
      {/* change to client one , once error is fixed */}
      {/* <Comments /> */}
      <CommentsClient
        postId={post.id}
        comments={[commentList[0]]}
        user={user}
        allComments={commentList}
      />
    </div>
  );
}
