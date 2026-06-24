import dotenv from "dotenv";
import app from "./app";
import connectToDB from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async ():Promise<void> => {
    try {
        await connectToDB();
        app.listen(PORT, ()=>{
            console.log(`🚀 Server running on port ${PORT}`)
        })
    } catch (error) {
        console.log("Failed to start server", error);

        process.exit(1)
    }
}

startServer()