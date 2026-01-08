import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connect } from "mongoose";
import { connectDB } from "./config/DB.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/RateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

// middleware 
app.use(cors({
    origin: "http://localhost:5173",
}));    
app.use(express.json()); // this middle ware parse JSON bodies req.body
app.use(rateLimiter);
 

//our simple custom middle ware
// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} $ req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:",PORT);
    });
});
