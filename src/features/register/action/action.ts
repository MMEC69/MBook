"use server"
import { redirect } from "next/navigation";
import { z } from "zod";
import { atLeastOneCapitalLetter, atLeastOneNumber, atLeastOneSimpleLetter, atLeastOneSpecialCharacter, passwordFullRegex } from "../meta/meta";

const regSchema = z.object({
    firstName : z.string({ message : "Invalid name" }).trim(),
    lastName : z.string({ message : "Invalid name" }).trim(),
    email :z.string().email({ message : "Invalid email" }).trim(),
    birthday : z.string().date().trim(), //date validation message issue, refer it !!
    gender : z.string({ message : "Invalid Gender" }).trim(),
    password: z
        .string()
        .min(8, { message : "Password must be at least 8 Characters" })
        .max(16, { message : "Password must not exceed 16 characters" })
        .regex(atLeastOneCapitalLetter, {message : "Please provide atleast single capital letter"})
        .regex(atLeastOneSimpleLetter, {message : "Please provide atleast single simple letter"})
        .regex(atLeastOneNumber, {message : "Please provide atleast single number"})
        .regex(atLeastOneSpecialCharacter, {message : "Please provide atleast single special character"})
        .regex(passwordFullRegex, {message : "Invalid password"})
        .trim(), 
});

export const register = async (prevState: any, formData: FormData) => {
    console.log(formData);
    const result = regSchema.safeParse(Object.fromEntries(formData));

    //if validate failure
    if(!result.success){
        console.log(result.error.flatten().fieldErrors);
        return {
            errors: {
                errors: result.error.flatten().fieldErrors,
            }
        }
    }

    // otherwise
    const {
        firstName,
        lastName,
        email,
        birthday,
        gender,
        password
    } = result.data;

    //password encryption 

    //send data to the mongo db

    redirect("/login");
}

