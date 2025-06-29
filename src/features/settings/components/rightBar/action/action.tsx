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
// export const updateDetail = async (prevState: any, formData: FormData) => {
// console.log("> updateDetail Initiated");

// const result = fieldSchema.safeParse(Object.fromEntries(formData));
// Validation Failure
//   if (!result.success) {
//     console.log(result.error.flatten().fieldErrors);
//     return { errors: result.error.flatten().fieldErrors };
//   }

//   const { fieldValue, field, userId } = result.data;

//   switch (field) {
//     case "desc":
//       try {
//         const res = await prisma.user.update({
//           where: { id: userId },
//           data: {
//             desc: fieldValue,
//           },
//         });
//       } catch (error) {
//         console.log("Error: Unable to update desc");
//         return;
//       }
//       break;
//     case "birthday":
//       //write the code here later
//       break;
//     case "gender":
//       try {
//         const res = await prisma.user.update({
//           where: { id: userId },
//           data: {
//             gender: fieldValue,
//           },
//         });
//       } catch (error) {
//         console.log(error);
//         // console.log("Error: Unable to update desc");
//         return;
//       }
//       break;
//     case "lives":
//       try {
//         const res = await prisma.user.update({
//           where: { id: userId },
//           data: {
//             lives: fieldValue,
//           },
//         });
//       } catch (error) {
//         console.log(error);
//         // console.log("Error: Unable to update desc");
//         return;
//       }
//       break;
//     case "education":
//       try {
//         const res = await prisma.user.update({
//           where: { id: userId },
//           data: {
//             education: { push: fieldValue },
//           },
//         });
//       } catch (error) {
//         console.log(error);
//         // console.log("Error: Unable to update desc");
//         return;
//       }
//       break;
//     case "works":
//       try {
//         const res = await prisma.user.update({
//           where: { id: userId },
//           data: {
//             works: { push: fieldValue },
//           },
//         });
//       } catch (error) {
//         console.log(error);
//         // console.log("Error: Unable to update desc");
//         return;
//       }
//       break;
//     case "love":
//       try {
//         const res = await prisma.user.update({
//           where: { id: userId },
//           data: {
//             love: fieldValue,
//           },
//         });
//       } catch (error) {
//         console.log(error);
//         // console.log("Error: Unable to update desc");
//         return;
//       }
//       break;
//     case "links":
//       break;
//     case "phone":
//       try {
//         const res = await prisma.user.update({
//           where: { id: userId },
//           data: {
//             phone: fieldValue,
//           },
//         });
//       } catch (error) {
//         console.log(error);
//         // console.log("Error: Unable to update desc");
//         return;
//       }
//       break;

//     default:
//       break;
//   }
//   // console.log("> updateDetail ended");
// };

export const getBlockUsersDetails = async (blocks: any) => {
  const blockUserDetails = convertUserIdToUserList(blocks);
  return blockUserDetails;
};

//=================update user details=============
//need to add zod stuff here
const userDetailsSchema = z.object({
  desc: z
    .string()
    .trim()
    .transform((e) => (e === "" ? undefined : e)) // Now transform an empty *trimmed* string to undefined
    .refine((val) => val === undefined || val.length >= 3, {
      message: "Description must be at least 3 characters if provided.",
    })
    .optional(), // Make optional (allows undefined)

  phone: z
    .string()
    .trim()
    .transform((e) => (e === "" ? undefined : e))
    .refine((val) => val === undefined || val.length >= 3, {
      message: "Phone number must be at least 3 characters if provided.",
    })

    .optional(),

  birthday: z
    .string()
    .trim()
    .transform((e) => (e === "" ? undefined : e))
    .refine((val) => val === undefined || val.length >= 3, {
      message: "Birthday must be at least 3 characters if provided.",
    })
    .optional(),

  gender: z
    .string()
    .trim()
    .transform((e) => (e === "" ? undefined : e))
    .refine((val) => val === undefined || val.length >= 3, {
      message: "Gender must be at least 3 characters if provided.",
    })
    .optional(),

  lives: z
    .string()
    .trim()
    .transform((e) => (e === "" ? undefined : e))
    .refine((val) => val === undefined || val.length >= 3, {
      message: "Location must be at least 3 characters if provided.",
    })
    .optional(),

  education: z
    .string()
    .trim()
    .transform((e) => (e === "" ? undefined : e))
    .refine((val) => val === undefined || val.length >= 3, {
      message: "Education details must be at least 3 characters if provided.",
    })
    .optional(),

  works: z
    .string()
    .trim()
    .transform((e) => (e === "" ? undefined : e))
    .refine((val) => val === undefined || val.length >= 3, {
      message: "Work details must be at least 3 characters if provided.",
    })
    .optional(),

  love: z
    .string()
    .trim()
    .transform((e) => (e === "" ? undefined : e))
    .refine((val) => val === undefined || val.length >= 3, {
      message: "Relationship status must be at least 3 characters if provided.",
    })
    .optional(),

  links: z
    .string()
    .trim()
    .transform((e) => (e === "" ? undefined : e))
    .refine((val) => val === undefined || val.length >= 3, {
      message: "Links must be at least 3 characters if provided.",
    })
    .optional(),
});
export const updateUserDetails = async (
  prevState: { success: boolean; error: boolean; errors: any },
  payload: { formData: FormData; userId: string }
) => {
  const { formData, userId } = payload;
  //need to add necessary functions
  const result = userDetailsSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    // console.log(result.error.flatten().fieldErrors);
    return {
      success: false,
      error: true,
      errors: {
        desc: result.error.flatten().fieldErrors.desc,
        phone: result.error.flatten().fieldErrors.phone,
        birthday: result.error.flatten().fieldErrors.birthday,
        gender: result.error.flatten().fieldErrors.gender,
        lives: result.error.flatten().fieldErrors.links,
        education: result.error.flatten().fieldErrors.education,
        works: result.error.flatten().fieldErrors.works,
        love: result.error.flatten().fieldErrors.love,
        links: result.error.flatten().fieldErrors.links,
      },
    };
  }
  let res: any = false;
  try {
    res = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        desc: result.data.desc,
        phone: result.data.phone,
        birthday: result.data.birthday,
        gender: result.data.gender,
        lives: result.data.lives,
        education: result.data.education,
        works: result.data.works,
        love: result.data.love,
        links: result.data.links,
      },
    });
  } catch (error) {
    console.log(error);
  }
  if (res) {
    return {
      success: true,
      error: false,
      errors: {
        desc: undefined,
        phone: undefined,
        birthday: undefined,
        gender: undefined,
        lives: undefined,
        education: undefined,
        works: undefined,
        love: undefined,
        links: undefined,
      },
    };
  } else {
    return {
      success: false,
      error: true,
      errors: {
        desc: undefined,
        phone: undefined,
        birthday: undefined,
        gender: undefined,
        lives: undefined,
        education: undefined,
        works: undefined,
        love: undefined,
        links: undefined,
      },
    };
  }
};
