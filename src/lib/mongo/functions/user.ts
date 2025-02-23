import { dbConnection } from "../connection/db_connections";
import User from "../schema/schema";

//req -> firstName, lastName,..., email
export const postUser = async (req : object, email: string) => {
    try {
        await dbConnection();

        const exist = await getUser(email);
        if(exist){
            return ({msg: "There is a user already with this email", updated: false});
        }
        const newUser = new User(req);
        await newUser.save();
        return ({msg: "User has been registered", updated: true})
    } catch (error) {
        return error;
    } 
}

export const getUser = async (email : string) => {
    try {
        await dbConnection();
        const res = await User.findOne({email: email});
        if(!res){
            return res;
        }
        return res;
    } catch (error) {
        return(error);
    }
}

