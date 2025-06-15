import { redirect } from "next/navigation";

export const search = (
  prevState: any,
  payload: { formData: FormData; userId: string }
) => {
  const { userId } = payload;
  redirect(`/search/${userId}`);
};
