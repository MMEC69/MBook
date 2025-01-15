import mongoose from "mongoose";

export const dbConnection = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/testing");
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }
}