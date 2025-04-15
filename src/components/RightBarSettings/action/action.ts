"use server";
import {z} from "zod";
import prisma from "@/lib/prisma/client";

const modifySchema = z.object({
    f1 : z
        .string()
        .min(3, {message : "Invalid Value"})
        .trim(),
    f2 : z
        .string()
        .min(3, {message : "Invalid Value"})
        .trim(),
    f3 : z
        .string()
        .min(3, {message : "Invalid Value"})
        .trim(),
    type : z
        .string()
        .min(3, {message : "Invalid Value"})
        .trim(),
    userId : z
        .string()
        .min(3, {message : "Invalid Value"})
        .trim()
});

const modifyNameSchema = z.object({});

const modifyPasswordSchema = z.object({});

const modifyEmailSchema = z.object({});


export const modify = async (prevState: any, formData: FormData) => {
    console.log("> Modify Profile Settings Initiated");
    // console.log(formData)
    
    // Validation of Values
    const result = modifySchema.safeParse(Object.fromEntries(formData));
    
    // Validation Failure
    if(!result.success){
        console.log(result.error.flatten().fieldErrors);
        return { errors : result.error.flatten().fieldErrors }
    }

    const {type, userId, f1, f2, f3} = result.data;  
    console.log(userId);

    switch (type) {
        case "name":
            try {
                const res = await prisma.user.update({
                    where : {id : userId},
                    data : {
                        firstName : f1,
                        lastName : f2,
                        userName : f3
                    }
                });
                console.log(res)
            } catch (error) {
                console.log("Error: Unable to update name");
                return;
            }
            break;
        
        case "email":
            try {
                const res = await prisma.user.update({
                    where : {id : userId},
                    data : {
                        email : f2,
                    }
                });
                console.log(res)
            } catch (error) {
                console.log("Error: Unable to update email");
                return;
            }
            break;
        case "password":
            try {
                const res = await prisma.user.update({
                    where : {id : userId},
                    data : {
                        password : f1,
                    }
                });
                console.log(res)
            } catch (error) {
                console.log("Error: Unable to update password");
                return;
            }
            break;
    
        default:
            break;
    }

    console.log("> Modify Profile Settings Ended");

   

}