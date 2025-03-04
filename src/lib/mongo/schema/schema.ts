import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName : {type:String},
    lastName: {type:String},
    email: {type:String, unique:true},
    birthDay: {type:String},
    gender: {type:String},
    password: {type:String},
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;