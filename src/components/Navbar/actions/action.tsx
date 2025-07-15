import { redirect } from "next/navigation";
import { z } from "zod";

const searchSchema = z.object({
  search: z.string().trim().min(3, { message: "Invalid name" }),
});

export const search = (
  prevState: any,
  payload: { formData: FormData; userId: string }
) => {
  const { userId, formData } = payload;
  const result = searchSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return false;
  }

  redirect(`/search/${result.data.search}`);
};
