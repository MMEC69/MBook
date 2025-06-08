"use server";

import UserDetails from "@/features/profile/components/Rightbar/UserDetails";
import { getUser } from "@/lib/mongo/functions/user";
import prisma from "@/lib/prisma/client";
import { Comment, User } from "@prisma/client";

export const fetchProfilePosts = async (profileId: string) => {
  if (!profileId) return;

  try {
    const res = await prisma.post.findMany({
      where: {
        user: profileId,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchHomePosts = async (profileId: string) => {
  if (!profileId) return;

  try {
    //for now fetch all the posts, later modify untili it return
    //necessary posts
    const res = await prisma.post.findMany({});
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getReacts = async (postId: string) => {
  try {
    const res = await prisma.react.findMany({
      where: {
        post: postId,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const getComments = async (postId: string) => {
  try {
    const res = await prisma.comment.findMany({
      where: {
        post: postId,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const getShares = async (postId: string) => {
  try {
    const res = await prisma.shared.findMany({
      where: {
        post: postId,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const switchReact = async (userId: string, postId: string) => {
  if (!userId) throw new Error("User is not Authenticated");
  try {
    const existingReact = await prisma.react.findFirst({
      where: {
        post: postId,
        user: userId,
      },
    });

    if (existingReact) {
      await prisma.react.delete({
        where: {
          id: existingReact.id,
        },
      });
    } else {
      await prisma.react.create({
        data: {
          post: postId,
          user: userId,
        },
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

//============add comment part======================
export const addComment = async (
  userId: string,
  postId: string,
  desc: string
) => {
  if (!userId) throw new Error("User is not Authenticated");
  try {
    const createdComment: any = await prisma.comment.create({
      data: {
        desc: desc,
        user: userId,
        post: postId,
      },
    });
    const user = await getUser(userId);
    createdComment.userDetails = user;
    return createdComment;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const getCommentsWithUserDetails = async (commentList: Comment[]) => {
  for (let index = 0; index < commentList.length; index++) {
    const comment: any = commentList[index];
    let userDetails: User;
    try {
      userDetails = await getUser(comment.user);
      comment.userDetails = userDetails;
      return comment;
    } catch (error) {
      console.log(error);
    }
  }
};
