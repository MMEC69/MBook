import mongoose from "mongoose";
import { string } from "zod";

const userSchema = new mongoose.Schema({
    firstName : {type:String},
    lastName: {type:String},
    email: {type:String},
    birthDay: {type:String},
    gender: {type:String},
    password: {type:String},
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;