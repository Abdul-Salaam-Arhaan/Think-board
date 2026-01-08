import mongoose from "mongoose";

export const connectDB = async () => {
    try {   
    await mongoose.connect(process.env.MONGO_URI)        
    console.log("MONGO DB CONNECTED SUCCESFULLY!");
    } catch (error) {
    console.log("error connecting to MONGODB", error );
    process.exit(1) // 1 means error 0 means no error exit with failure and no failure

    }
}