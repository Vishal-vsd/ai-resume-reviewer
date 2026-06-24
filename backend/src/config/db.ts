import mongoose from "mongoose";
const connectToDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.MONGO_URI
        if(!mongoURI){
            throw new Error("Mongo_URI is missing")
        }
        await mongoose.connect(mongoURI)
        console.log(`MongoDB connected successfully`)
    } catch (error) {
        console.log("MongoDB connection failed", error)
        process.exit(1)
    }
}

export default connectToDB;
