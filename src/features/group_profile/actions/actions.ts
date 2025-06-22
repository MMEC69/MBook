import prisma from "@/lib/prisma/client";

export const fetchGroupPosts = async (groupId: string) => {
  try {
    const groupPosts = await prisma.post.findMany({
      where: {
        group: groupId,
      },
    });
    if (groupPosts.length > 0) {
      return groupPosts;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
  return [];
};
