import mongoose from "mongoose";
import error from "../utils/error.js"

const connectDb =async ()=>{
    try{
        await mongoose.connect(process.env.mongo);
    }catch(error){
        throw new error(500, "mongo connection error", error.message)
    }
}

export default connectDb;