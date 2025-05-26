"use server";

import { z } from "zod";
import {
  atLeastOneCapitalLetter,
  atLeastOneNumber,
  atLeastOneSimpleLetter,
  atLeastOneSpecialCharacter,
  passwordFullRegex,
} from "../meta/meta";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma/client";

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
    console.log(res);
  } catch (error) {
    console.log("Error: Unable to create a user");
    return;
  }
  redirect("/login");
};
