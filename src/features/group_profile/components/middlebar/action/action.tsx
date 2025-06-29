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
