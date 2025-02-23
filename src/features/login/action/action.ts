"use server"

import { object, z } from "zod";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/mongo/functions/user";

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

    // find whether the user is in db
    const res = await getUser(email);
    if (!res) {
        return {
            errors: {
                email: ["Invalid email or password"],
            },
        };
    }
    if (email !== res.email || password !== res.password){
        return {
            errors: {
                email: ["Invalid email or password"],
            },
        };
    }
    await createSession(res._id);
    redirect(`/home/${res._id}`);
}


export const logout = async() => {
    await deleteSession();
    redirect("/login");
}

