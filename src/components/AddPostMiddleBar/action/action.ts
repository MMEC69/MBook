"use server";

import prisma from "@/lib/prisma/client";
import { fetchSession } from "@/utility/utility";

export const testAction = async (formData: FormData) => {
    const user = await fetchSession() as string;
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