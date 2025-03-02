import { cookies } from "next/headers";
import { decrypt } from "@/features/login/lib/session";

export const sleep = async (seconds : number) => {
    return new Promise((resolve) => setTimeout(resolve, seconds*1000));
}

export const dateConverter =  (date : string) => {
    const newFormat = new Intl.DateTimeFormat("en-us", {
        dateStyle : "full"
    })
    return newFormat;
}

export const JSONFetch = async (type : string, path : string, body : object ) => {
    const response = await fetch(path, {
        method : type,
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify(body)
    });
    return response;
}

export const fetchSession = async () => {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);
    let user = session?.userId;
    return user;
}