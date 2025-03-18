"use server";
// -> complete this
import prisma from "@/lib/prisma/client";

export const fetchStories = async (userId: string) => {
  console.log("> Stories fetch initiation");

  if (!userId) return;


  // fetching user stories
  try {
    const yourStoriesRes = await prisma.story.findMany({
      where: {
        user: userId,
      },
    });
    const yourStories : any = { userId : yourStoriesRes};

    // fetching the list of friends
    const friendListRes = await prisma.user.findFirst({
        where: {
            id : userId
        }
    });
    
    // fetching the friends stories
    const friendStories = friendListRes?.friends.map(async (friend) => {
        const friendStoriesRes : any = await prisma.story.findMany({
            where : {
                user:friend
            }
        })
        return (friendStoriesRes);
    });

    console.log(friendStories);

    // preparing the friends stories arr
    // const friendStories_ : any= friendStories?.map((friendStory) => {
    //     return {friendStory[0].user: friendStory}
    // });

    // combine your stories and friend stories
    // const stories : any = [...yourStories, ...friendStories];
    console.log("> User Stories fetched succesfully");
  } catch (error) {
    console.log("> Stories fetched failure");
  }
};
