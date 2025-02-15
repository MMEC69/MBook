import { dbConnection } from "./db_connections";
import User from "./schema";

export const postUser = async (req : object) => {
    await dbConnection();
    const newUser = new User(req);
    await newUser.save();
}