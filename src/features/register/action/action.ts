"use server";

import { object, z } from "zod";
import {
  atLeastOneCapitalLetter,
  atLeastOneNumber,
  atLeastOneSimpleLetter,
  atLeastOneSpecialCharacter,
  passwordFullRegex,
} from "../meta/meta";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma/client";
import { encrypt } from "@/utility/utility";

const regSchema = z.object({
  firstName: z.string().min(3, { message: "Invalid name" }).trim(),
  lastName: z.string().min(3, { message: "Invalid name" }).trim(),
  email: z.string().email({ message: "Invalid email" }).trim(),
  birthday: z.string().date().trim(), //date validation message issue, refer it !!
  gender: z.string({ message: "Invalid Gender" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 Characters" })
    .max(16, { message: "Password must not exceed 16 characters" })
    .regex(atLeastOneCapitalLetter, {
      message: "Please provide atleast single capital letter",
    })
    .regex(atLeastOneSimpleLetter, {
      message: "Please provide atleast single simple letter",
    })
    .regex(atLeastOneNumber, {
      message: "Please provide atleast single number",
    })
    .regex(atLeastOneSpecialCharacter, {
      message: "Please provide atleast single special character",
    })
    .regex(passwordFullRegex, { message: "Invalid password" })
    .trim(),
});

export const register = async (prevState: any, formData: FormData) => {
  // console.log(formData);
  const result = regSchema.safeParse(Object.fromEntries(formData));

  //if validate failure
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return { errors: result.error.flatten().fieldErrors };
  }

  // otherwise
  // const {
  //     firstName,
  //     lastName,
  //     email,
  //     birthday,
  //     gender,
  //     password
  // } = result.data;

  //send data to API for DB - pure mongodb
  // let res : any = await postUser(result.data, result.data.email);
  // if (res.updated === false) {
  //     console.log(res.msg);
  // }else{
  //     console.log(res.msg);
  //     redirect("/login");
  // }

  // send data to DB via prisma
  try {
    const res = await prisma.user.create({
      data: result.data,
    });
    // console.log(res);
    const updatedPassword = await encrypt(result.data.password);
    await prisma.user.update({
      where: {
        id: res.id,
      },
      data: {
        encryptedPassword: updatedPassword,
      },
    });
  } catch (error) {
    console.log("Error: Unable to create a user");
    return;
  }
  redirect("/login");
};

//=============createGroup==================
const groupSchema = z.object({
  groupname: z.string().min(3, { message: "Invalid name" }).trim(),
  desc: z.string().min(3, { message: "Invalid description" }).trim(),
  phone: z.string().min(3, { message: "Invalid description" }).trim(),
  email: z.string().min(3, { message: "Invalid description" }).trim(),
  lives: z.string().min(3, { message: "Invalid description" }).trim(),
});

export const createGroup = async (
  prevState: { success: boolean; error: boolean },
  payload: {
    formData: FormData;
    userId: string;
    selectedGroupTypes: any;
    selectedGroupPrivacy: any;
    selectedInvites: any;
  }
) => {
  const {
    formData,
    userId,
    selectedGroupTypes,
    selectedGroupPrivacy,
    selectedInvites,
  } = payload;
  const result = groupSchema.safeParse(Object.fromEntries(formData));
  if (!userId) {
    return { success: false, error: true };
  }
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
      success: false,
      error: true,
    };
  }
  const privacy = selectedGroupPrivacy.value;

  let members = selectedInvites.map((selectedInvite: any) => {
    return selectedInvite.value;
  });
  members.push(userId);

  const types = selectedGroupTypes.map((selectedGroupType: any) => {
    return selectedGroupType.value;
  });
  try {
    const res = await prisma.group.create({
      data: {
        groupname: result.data.groupname,
        desc: result.data.desc,
        owner: userId,
        privacy: privacy,
        members: members,
        phone: result.data.phone,
        email: result.data.email,
        admin: [userId],
        lives: result.data.lives,
        types: types,
      },
    });
    if (res) {
      return { success: true, error: false };
    } else {
      return { success: false, error: true };
    }
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};

//=============sharePost======================
const shareSchema = z.object({
  desc: z.string().min(0, { message: "Invalid description" }).trim(),
});

export const sharePost = async (
  prevState: { success: boolean; error: boolean },
  payload: { formData: FormData; userId: string; postId: string }
) => {
  const { formData, userId, postId } = payload;
  const result = shareSchema.safeParse(Object.fromEntries(formData));
  if (!userId) {
    return { success: false, error: true };
  }
  if (!postId) {
    return { success: false, error: true };
  }
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
      success: false,
      error: true,
    };
  }
  try {
    const res = await prisma.shared.create({
      data: {
        user: userId,
        post: postId,
        desc: result.data.desc,
      },
    });
    if (res) {
      return { success: true, error: false };
    } else {
      return { success: false, error: true };
    }
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};
