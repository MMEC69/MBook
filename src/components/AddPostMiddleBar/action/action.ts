"use server";

import prisma from "@/lib/prisma/client";
import { fetchSession } from "@/utility/utility";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const testAction = async (formData: FormData) => {
  const user = (await fetchSession()) as string;
  const desc = formData.get("desc") as string;

  if (!user) return;
  try {
    const res = await prisma.post.create({
      data: {
        user: user,
        desc: desc,
      },
    });
    console.log(res);
  } catch (error) {
    console.log("Error: Unable to Post");
    return;
  }
};

export const addPost = async (
  userId: string,
  formData: FormData,
  image: string,
  uploadedImages: any[]
) => {
  if (!userId) throw new Error("User is not Authorized");
  const desc = formData.get("desc") as string;
  const Desc = z.string().min(1).max(255);
  const validateDesc = Desc.safeParse(desc);

  if (!validateDesc.success && uploadedImages.length < 1) return;

  const imageLinks = uploadedImages.map((uploadedImage: any) => {
    return uploadedImage.secure_url;
  });

  try {
    await prisma.post.create({
      data: {
        desc: validateDesc.data,
        user: userId,
        img: imageLinks,
      },
    });
    revalidatePath("/home/");
  } catch (error) {
    console.log(error);
  }
};
