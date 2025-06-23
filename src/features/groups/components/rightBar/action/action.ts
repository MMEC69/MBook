import { getFriends } from "@/lib/mongo/prismaFunctions/user/get/user";
import prisma from "@/lib/prisma/client";
import { convertUserIdToUserList } from "@/utility/utility";
import { Group, User } from "@prisma/client";

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
export const getYourGroups = async (groups: Group[], userId: string) => {
  const yourGroups = groups.filter((group: any) => {
    const members = group.members ?? [];
    return members.includes(userId);
  });
  return yourGroups;
};

export const getDiscoverGroups = async (groups: Group[], userId: string) => {
  //conditions
  // 1 -> not blocked
  // 2 -> not already in
  // 3 ->
  const discoverGroups = groups.filter((group: any) => {
    const members = group.members ?? [];
    const blocks = group.blocks ?? [];
    return !(members.includes(userId) || blocks.includes(userId));
  });
  return discoverGroups;
};
