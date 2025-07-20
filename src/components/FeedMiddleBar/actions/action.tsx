"use server";

import { getUser } from "@/lib/mongo/prismaFunctions/user/get/user";
import prisma from "@/lib/prisma/client";
import { Comment, User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const fetchProfilePosts = async (profileId: string) => {
  if (!profileId) return;

  try {
    const res = await prisma.post.findMany({
      where: {
        user: profileId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

//===========================================

export const fetchHomePosts = async (profileId: string, friends: any[]) => {
  if (!profileId) return;

  //posts = friendshares + scrore based reccom + ML recommend
  let homePosts: any[] = [];
  let allPosts: any[] = [];
  let filteredHomePosts: any = [];
  let filteredMLPosts: any[] = [];
  try {
    allPosts = await prisma.post.findMany();
  } catch (error) {
    console.log(error);
  }

  //friend shares
  try {
    const posts = await prisma.post.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });
    allPosts = posts;
    posts.map((post: any) => {
      if (friends.includes(post.user)) {
        homePosts.push(post);
      }
    });
  } catch (error) {
    console.log(error);
  }
  // now posts -> friend shares

  //score based
  let scorePosts: any[] = [];
  try {
    const postsScores = await prisma.postScores.findMany({
      orderBy: {
        score: "desc",
      },
    });
    let limitScore: number = 0;
    if (postsScores) {
      const maxScore: number = postsScores[0]?.score;
      limitScore = (maxScore / 3) * 2;
    }

    //filter to match limit and not already homeposts

    for (let i = 0; i < postsScores.length; i++) {
      for (let j = 0; j < homePosts.length; j++) {
        if (postsScores[i].post === homePosts[j].id) {
          filteredHomePosts = homePosts.filter((homePost: any) => {
            return homePost.id !== postsScores[i].post;
          });
        }
      }
    }
    postsScores.filter((postScore: any) => {
      return postScore.score >= limitScore;
    });

    // limit to 5posts
    let postsLimit = 0;
    if (postsScores.length < 5) {
      postsLimit = postsScores.length;
    } else {
      postsLimit = 5;
    }
    try {
      for (let i = 0; i < postsLimit; i++) {
        for (let j = 0; j < allPosts.length; j++) {
          const post = allPosts[j];
          if (post.id === postsScores[i].post) {
            scorePosts.push(post);
            break;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
    homePosts.push(...scorePosts);
  } catch (error) {
    console.log(error);
  }

  //ML rec
  try {
    const res = await prisma.mlPostReccomendations.findFirst({
      where: {
        user: profileId,
      },
    });
    const mlPosts = res?.posts || [];

    for (let i = 0; i < filteredHomePosts.length; i++) {
      const homePost = filteredHomePosts[i];
      filteredMLPosts = mlPosts.filter((mlPost: any) => {
        return mlPost !== homePost.id;
      });
    }

    for (let i = 0; i < allPosts.length; i++) {
      for (let j = 0; j < mlPosts.length; j++) {
        if (allPosts[i].id === mlPosts[j]) {
          homePosts.push(allPosts[i]);
          break;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  // try {
  //for now fetch all the posts, later modify untili it return
  //necessary posts
  //   const res = await prisma.post.findMany({
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //   });
  //   return res;
  // } catch (error) {
  //   console.log(error);
  // }
  if (homePosts.length < 1) {
    return allPosts;
  }
  // console.log(homePosts);
  return homePosts;
};

//===========================================

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
      orderBy: {
        createdAt: "desc",
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
//==========================================
export const switchReact = async (
  userId: string,
  postId: string,
  postOwner: string
) => {
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
  try {
    const res = await prisma.userScores.findFirst({
      where: {
        whome: userId,
      },
    });
    if (!res) {
      const res = await prisma.userScores.create({
        data: {
          user: postOwner,
          score: 10,
          whome: userId,
        },
      });
    }
    if (res) {
      const updateScore = await prisma.userScores.update({
        where: {
          id: res.id,
        },
        data: {
          score: res.score + 10,
        },
      });
    }
  } catch (error) {
    console.log(error);
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
    try {
      const post = await prisma.post.findFirst({
        where: {
          id: postId,
        },
      });
      if (!post) return createdComment;
      const res = await prisma.userScores.findFirst({
        where: {
          whome: userId,
        },
      });
      if (!res) {
        const res = await prisma.userScores.create({
          data: {
            user: post.user,
            score: 20,
            whome: userId,
          },
        });
      }
      if (res) {
        const updateScore = await prisma.userScores.update({
          where: {
            id: res.id,
          },
          data: {
            score: res.score + 20,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
    return createdComment;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const getCommentsWithUserDetails = async (commentList: Comment[]) => {
  let commentWithUserDetails: any[] = [];
  for (let index = 0; index < commentList.length; index++) {
    const comment: any = commentList[index];
    let userDetails: User;
    try {
      userDetails = await getUser(comment.user);
      comment.userDetails = userDetails;
      commentWithUserDetails.push(comment);
    } catch (error) {
      console.log(error);
    }
  }
  return commentWithUserDetails;
};

//============add post=====================================================
export const addPost = async () => {};
//===============================================
export const deletePost = async (
  page: string,
  postId: string,
  userId: string,
  postOwner: string
) => {
  // console.log("%%%%%%%%%%%%%");
  if (postOwner !== userId) return;
  try {
    //delete related comments
    const resDelComments = await prisma.comment.deleteMany({
      where: {
        post: postId,
      },
    });
    //delete related shares
    const resDelShared = await prisma.shared.deleteMany({
      where: {
        post: postId,
      },
    });
    //delete related interactions
    const resDelInteractions = await prisma.react.deleteMany({
      where: {
        post: postId,
      },
    });
    //delete the post
    const resDelPost = await prisma.post.deleteMany({
      where: {
        id: postId,
      },
    });
    page === "home"
      ? revalidatePath("/home/")
      : page === "profile"
      ? revalidatePath("/profile/")
      : revalidatePath("/home/");
    return resDelPost;
  } catch (error) {
    console.log(error);
  }
};
