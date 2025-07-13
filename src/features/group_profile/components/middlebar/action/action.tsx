"use server";
import prisma from "@/lib/prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const addPost = async (
  groupId: string,
  userId: string,
  formData: FormData,
  image: string,
  members: string[]
) => {
  if (!userId) throw new Error("User is not Authorized");
  if (!members.includes(userId)) throw new Error("User is not a member");

  const desc = formData.get("desc") as string;
  const Desc = z.string().min(1).max(255);
  const validateDesc = Desc.safeParse(desc);
  if (!validateDesc.success) return;

  try {
    await prisma.post.create({
      data: {
        desc: validateDesc.data,
        user: userId,
        img: [image],
        group: groupId,
      },
    });
    revalidatePath("/groups/view/");
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async (groupId: string) => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        group: groupId,
      },
    });
    if (posts) return posts;
  } catch (error) {
    console.log(error);
  }
  return [];
};
//==============================================
const groupNameSchema = z.object({
  groupName: z.string().min(3, { message: "Invalid name" }).trim(),
});
const groupDescSchema = z.object({
  desc: z.string().min(3, { message: "Invalid name" }).trim(),
});
const groupLocationSchema = z.object({
  location: z.string().min(3, { message: "Invalid name" }).trim(),
});
const groupPhoneSchema = z.object({
  phone: z.string().min(3, { message: "Invalid name" }).trim(),
});
const groupEmailSchema = z.object({
  email: z.string().min(3, { message: "Invalid name" }).trim(),
});
//------------------------------------------------
export const updateGroup = async (
  prevState: {
    success: boolean;
    error: boolean;
  },
  payload: {
    formData: FormData;
    userId: string;
    groupId: string;
    name: string;
  }
) => {
  const { name } = payload;
  if (name === "groupName") {
    return changeGroupName(prevState, payload);
  } else if (name === "desc") {
    return changeGroupDescription(prevState, payload);
  } else if (name === "phone") {
    return changeGroupPhone(prevState, payload);
  } else if (name === "email") {
    return changeGroupEmail(prevState, payload);
  } else if (name === "location") {
    return changeGroupLocation(prevState, payload);
  } else {
    return { success: false, error: true };
  }
};
//--------------------------------------------------
export const changeGroupName = async (
  prevState: {
    success: boolean;
    error: boolean;
  },
  payload: {
    formData: FormData;
    userId: string;
    groupId: string;
    name: string;
  }
) => {
  const { formData, userId, groupId } = payload;
  const result = groupNameSchema.safeParse(Object.fromEntries(formData));
  if (!userId) {
    return { success: false, error: true };
  }
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: "Group Name is invalid",
      success: false,
      error: true,
    };
  }
  try {
    const res = await prisma.group.update({
      where: {
        id: groupId,
      },
      data: {
        groupname: result.data.groupName,
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
//------------------------------------------------
export const changeGroupDescription = async (
  prevState: {
    success: boolean;
    error: boolean;
  },
  payload: {
    formData: FormData;
    userId: string;
    groupId: string;
    name: string;
  }
) => {
  const { formData, userId, groupId } = payload;
  const result = groupDescSchema.safeParse(Object.fromEntries(formData));
  if (!userId) {
    return { success: false, error: true };
  }
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: "Group description is invalid",
      success: false,
      error: true,
    };
  }
  try {
    const res = await prisma.group.update({
      where: {
        id: groupId,
      },
      data: {
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
//--------------------------------------------------
export const changeGroupLocation = async (
  prevState: {
    success: boolean;
    error: boolean;
  },
  payload: {
    formData: FormData;
    userId: string;
    groupId: string;
    name: string;
  }
) => {
  const { formData, userId, groupId } = payload;
  const result = groupLocationSchema.safeParse(Object.fromEntries(formData));
  if (!userId) {
    return { success: false, error: true };
  }
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: "Group email is invalid",
      success: false,
      error: true,
    };
  }
  try {
    const res = await prisma.group.update({
      where: {
        id: groupId,
      },
      data: {
        groupname: result.data.location,
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
//-------------------------------------------
export const changeGroupPhone = async (
  prevState: {
    success: boolean;
    error: boolean;
  },
  payload: {
    formData: FormData;
    userId: string;
    groupId: string;
    name: string;
  }
) => {
  const { formData, userId, groupId } = payload;
  const result = groupPhoneSchema.safeParse(Object.fromEntries(formData));
  if (!userId) {
    return { success: false, error: true };
  }
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: "Group phone is invalid",
      success: false,
      error: true,
    };
  }
  try {
    const res = await prisma.group.update({
      where: {
        id: groupId,
      },
      data: {
        groupname: result.data.phone,
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
//----------------------------------------------------------
export const changeGroupEmail = async (
  prevState: {
    success: boolean;
    error: boolean;
  },
  payload: {
    formData: FormData;
    userId: string;
    groupId: string;
    name: string;
  }
) => {
  const { formData, userId, groupId } = payload;
  const result = groupEmailSchema.safeParse(Object.fromEntries(formData));
  if (!userId) {
    return { success: false, error: true };
  }
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: "Group email is invalid",
      success: false,
      error: true,
    };
  }
  try {
    const res = await prisma.group.update({
      where: {
        id: groupId,
      },
      data: {
        groupname: result.data.email,
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
