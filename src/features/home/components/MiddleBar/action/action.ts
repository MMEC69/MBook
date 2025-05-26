"use server";
// -> complete this
import prisma from "@/lib/prisma/client";

export const fetchStories = async (userId: string) => {
  if (!userId) return;
  // fetching user stories
  try {
    const yourStoriesRes = await prisma.story.findMany({
      where: {
        user: userId,
      },
    });
    const yourStories: any = { userId: yourStoriesRes };

    // fetching the list of friends
    const friendListRes = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    // fetching the friends stories
    const friendStories = friendListRes?.friends.map(async (friend) => {
      const friendStoriesRes: any = await prisma.story.findMany({
        where: {
          user: friend,
        },
      });
      return friendStoriesRes;
    });

    // preparing the friends stories arr
    // const friendStories_ : any= friendStories?.map((friendStory) => {
    //     return {friendStory[0].user: friendStory}
    // });

    // combine your stories and friend stories
    // const stories : any = [...yourStories, ...friendStories];
  } catch (error) {
    console.log(error);
  }
};
