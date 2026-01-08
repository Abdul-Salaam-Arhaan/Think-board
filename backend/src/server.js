import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connect } from "mongoose";
import { connectDB } from "./config/DB.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/RateLimiter.js";
import cors from "cors";
import path from "path";    

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve();

// middleware 
if(process.env.NODE_ENV === "development"){
app.use(cors({
    origin: "http://localhost:5173",
}));
};
app.use(express.json()); // this middle ware parse JSON bodies req.body
app.use(rateLimiter);
 

//our simple custom middle ware
// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} $ req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
    });
} 

    
// connect to DB and start server

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:",PORT);
    });
});
