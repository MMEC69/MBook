"use server";

import prisma from "@/lib/prisma/client";
import { convertUserIdToUserList } from "@/utility/utility";
import { z } from "zod";

// use this for testing
const fieldSchema = z.object({
  fieldValue: z.string().min(3, { message: "Invalid Value" }).trim(),
  field: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

const DescFieldSchema = z.object({
  fieldValue: z.string().min(3, { message: "Invalid Value" }).trim(),
  field: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

const PhoneFieldSchema = z.object({
  fieldValue: z.string().min(3, { message: "Invalid Value" }).trim(),
  field: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

const LivingFieldSchema = z.object({
  fieldValue: z.string().min(3, { message: "Invalid Value" }).trim(),
  field: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

const loveFieldSchema = z.object({
  fieldValue: z.string().min(3, { message: "Invalid Value" }).trim(),
  field: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

const genderFieldSchema = z.object({
  fieldValue: z.string().min(3, { message: "Invalid Value" }).trim(),
  field: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

const birthdayFieldSchema = z.object({
  fieldValue: z.string().min(3, { message: "Invalid Value" }).trim(),
  field: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

const worksFieldSchema = z.object({
  fieldValue: z.string().min(3, { message: "Invalid Value" }).trim(),
  field: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

const linksFieldSchema = z.object({
  fieldValue: z.string().min(3, { message: "Invalid Value" }).trim(),
  field: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

const educationFieldSchema = z.object({
  fieldValue: z.string().min(3, { message: "Invalid Value" }).trim(),
  field: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

// array field are not working properly, they can only push
export const updateDetail = async (prevState: any, formData: FormData) => {
  // console.log("> updateDetail Initiated");

  const result = fieldSchema.safeParse(Object.fromEntries(formData));
  // Validation Failure
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return { errors: result.error.flatten().fieldErrors };
  }

  const { fieldValue, field, userId } = result.data;

  switch (field) {
    case "desc":
      try {
        const res = await prisma.user.update({
          where: { id: userId },
          data: {
            desc: fieldValue,
          },
        });
      } catch (error) {
        console.log("Error: Unable to update desc");
        return;
      }
      break;
    case "birthday":
      //write the code here later
      break;
    case "gender":
      try {
        const res = await prisma.user.update({
          where: { id: userId },
          data: {
            gender: fieldValue,
          },
        });
      } catch (error) {
        console.log(error);
        // console.log("Error: Unable to update desc");
        return;
      }
      break;
    case "lives":
      try {
        const res = await prisma.user.update({
          where: { id: userId },
          data: {
            lives: fieldValue,
          },
        });
      } catch (error) {
        console.log(error);
        // console.log("Error: Unable to update desc");
        return;
      }
      break;
    case "education":
      try {
        const res = await prisma.user.update({
          where: { id: userId },
          data: {
            education: { push: fieldValue },
          },
        });
      } catch (error) {
        console.log(error);
        // console.log("Error: Unable to update desc");
        return;
      }
      break;
    case "works":
      try {
        const res = await prisma.user.update({
          where: { id: userId },
          data: {
            works: { push: fieldValue },
          },
        });
      } catch (error) {
        console.log(error);
        // console.log("Error: Unable to update desc");
        return;
      }
      break;
    case "love":
      try {
        const res = await prisma.user.update({
          where: { id: userId },
          data: {
            love: fieldValue,
          },
        });
      } catch (error) {
        console.log(error);
        // console.log("Error: Unable to update desc");
        return;
      }
      break;
    case "links":
      break;
    case "phone":
      try {
        const res = await prisma.user.update({
          where: { id: userId },
          data: {
            phone: fieldValue,
          },
        });
      } catch (error) {
        console.log(error);
        // console.log("Error: Unable to update desc");
        return;
      }
      break;

    default:
      break;
  }
  // console.log("> updateDetail ended");
};

export const getBlockUsersDetails = async (blocks: any) => {
  const blockUserDetails = convertUserIdToUserList(blocks);
  return blockUserDetails;
};

//=================update user details=============
//need to add zod stuff here
export const updateUserDetails = async (
  prevState: { success: boolean; error: boolean },
  payload: { formData: FormData; userId: string }
) => {
  //need to add necessary functions
  let res: boolean = true;
  if (res) {
    return { success: true, error: false };
  } else {
    return { success: false, error: true };
  }
};
