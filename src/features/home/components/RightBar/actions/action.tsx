import { getFriends } from "@/lib/mongo/prismaFunctions/user/get/user";
import { convertUserIdToUserList, fullDateConverter } from "@/utility/utility";
import { User } from "@prisma/client";

export const getBirthdays = async (userId: string) => {
  const friends = await getFriends(userId);
  const friendDetails = await convertUserIdToUserList(friends);

  // add a birthday filter here
  const today = fullDateConverter(new Date());
  const birthdays = friendDetails.filter((friend: User) => {
    return today === fullDateConverter(friend.birthday);
  });
  return birthdays;
};

// modify this function provide dats in asceinding order
export const getUpcomingBirthdays = async (userId: string) => {
  const friends = await getFriends(userId);
  const friendDetails = await convertUserIdToUserList(friends);

  // add a birthday filter here
  const today = fullDateConverter(new Date());
  const birthdays = friendDetails.filter((friend: User) => {
    return today !== fullDateConverter(friend.birthday);
  });
  return birthdays;
};

export const getContacts = async (userId: string) => {
  const friends = await getFriends(userId);
  const friendDetails = await convertUserIdToUserList(friends);

  //add contact filter here
  return friendDetails;
};
