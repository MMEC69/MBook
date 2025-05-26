"use server";
import { z } from "zod";
import prisma from "@/lib/prisma/client";
import {
  atLeastOneCapitalLetter,
  atLeastOneNumber,
  atLeastOneSimpleLetter,
  atLeastOneSpecialCharacter,
  passwordFullRegex,
} from "@/features/register/meta/meta";

const modifySchema = z.object({
  f1: z.string().min(3, { message: "Invalid Value" }).trim(),
  f2: z.string().min(3, { message: "Invalid Value" }).trim(),
  f3: z.string().min(3, { message: "Invalid Value" }).trim(),
  type: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

const modifyNameSchema = z.object({
  f1: z
    .string()
    .min(3, { message: "Name should be more than 3 characters" })
    .trim(),
  f2: z
    .string()
    .min(3, { message: "Name should be more than 3 characters" })
    .trim(),
  f3: z
    .string()
    .min(3, { message: "Name should be more than 3 characters" })
    .trim(),
  type: z.string().min(3, { message: "Invalid Value" }).trim(),
  userId: z.string().min(3, { message: "Invalid Value" }).trim(),
});

//need to be finished
const modifyPasswordSchema = z
  .object({
    f1: z.string().trim(),
    f2: z
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
    f3: z.string().trim(),
    type: z.string().min(3, { message: "Invalid Value" }).trim(),
    userId: z.string().min(3, { message: "Invalid Value" }).trim(),
    oldPassword: z.string().email({ message: "Invalid Email" }).trim(),
  })
  .refine((data) => data.oldPassword === data.f1, {
    message: "Old password doesn't match",
    path: ["f1"],
  })
  .refine((data) => data.oldPassword !== data.f2, {
    message: "New and old password can't be same",
    path: ["f1", "f2"],
  })
  .refine((data) => data.f2 === data.f3, {
    message: "Password confirmation failure, try again",
    path: ["f2", "f3"],
  });

//fix the scema
const modifyEmailSchema = z
  .object({
    f1: z.string().email({ message: "Invalid Email" }).trim(),
    f2: z.string().email({ message: "Invalid Email" }).trim(),
    f3: z.string().email({ message: "Invalid Email" }).trim(),
    type: z.string().min(3, { message: "Invalid Value" }).trim(),
    userId: z.string().min(3, { message: "Invalid Value" }).trim(),
    oldEmail: z.string().email({ message: "Invalid Email" }).trim(),
  })
  .refine((data) => data.oldEmail !== data.f1, {
    message: "Old Email doesn't match",
    path: ["f1"],
  })
  .refine((data) => data.oldEmail === data.f2, {
    message: "This is your current email ",
    path: ["f2"],
  })
  .refine((data) => data.f2 === data.f3, {
    message: "Email confirmation failure, try again",
    path: ["f3"],
  });

export const modify = async (prevState: any, formData: FormData) => {
  // Validation of Values
  const result = modifySchema.safeParse(Object.fromEntries(formData));
  // Validation Failure
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return { errors: result.error.flatten().fieldErrors };
  }

  const { type, userId, f1, f2, f3 } = result.data;

  switch (type) {
    case "name":
      const resultForChangeName = modifyNameSchema.safeParse(
        Object.fromEntries(formData)
      );
      if (!resultForChangeName.success) {
        console.log(resultForChangeName.error.flatten().fieldErrors);
        return { errors: resultForChangeName.error.flatten().fieldErrors };
      }
      try {
        const res = await prisma.user.update({
          where: { id: resultForChangeName.data.userId },
          data: {
            firstName: resultForChangeName.data.f1,
            lastName: resultForChangeName.data.f2,
            userName: resultForChangeName.data.f3,
          },
        });
      } catch (error) {
        console.log(error);
        return;
      }
      break;

    case "email":
      const resultForChangeEmail = modifyEmailSchema.safeParse(
        Object.fromEntries(formData)
      );
      if (!resultForChangeEmail.success) {
        console.log(resultForChangeEmail.error.flatten().fieldErrors);
        return { errors: resultForChangeEmail.error.flatten().fieldErrors };
      }
      try {
        const res = await prisma.user.update({
          where: { id: resultForChangeEmail.data.userId },
          data: {
            email: resultForChangeEmail.data.f2,
          },
        });
      } catch (error) {
        console.log(error);
        return;
      }
      break;
    case "password":
      try {
        const res = await prisma.user.update({
          where: { id: userId },
          data: {
            password: f1,
          },
        });
      } catch (error) {
        console.log(error);
        return;
      }
      break;

    default:
      break;
  }
};
