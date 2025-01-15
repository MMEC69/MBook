"use server"

import { z } from "zod";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";

// take items from database and aplly to here 
const testUser = {
    id : "1",
    email : "contact@gmail.com", 
    password: "12345678",
};

const loginSchema = z.object({
    email : z.string().email({ message : "Invalid email address" }).trim(),
    password : z
        .string()
        .min(8, { message : "Password must be at least 8 characters" })
        .trim(),
});

export const login = async (prevState: any, formData: FormData) => {
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    //if validate failure
    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    
    const {email, password} = result.data;
    
    // Simulate checking from a db
    if (email !== testUser.email || password !== testUser.password){
        return {
            errors: {
                email: ["Invalid email or password"],
            },
        };
    }

    await createSession(testUser.id);

    redirect("/home/111");
}


export const logout = async() => {
    await deleteSession();
    redirect("/login");
}

