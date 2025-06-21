import { getFriends } from "@/lib/mongo/prismaFunctions/user/get/user";
import prisma from "@/lib/prisma/client";
import { convertUserIdToUserList } from "@/utility/utility";
import { User } from "@prisma/client";

export const getFriendsDetails = async (userId: string) => {
  const friendIds = await getFriends(userId);

  if (!friendIds || friendIds.length < 1) {
    return [];
  }

  const friendDetails = await convertUserIdToUserList(friendIds);

  const friends = friendDetails.map((friendDetail: User) => {
    return {
      id: friendDetail.id,
      name: `${friendDetail.firstName} ${friendDetail.lastName}`,
    };
  });
  return friends;
};

//need to upgrade the function to sort
export const getYourGroups = async (userId: string) => {
  try {
    const groups = await prisma.group.findMany();
    return groups;
  } catch (error) {
    console.log(error);
  }
  return [];
};
