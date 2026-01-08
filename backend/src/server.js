import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import rateLimiter from "./middleware/RateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/DB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json());
app.use(rateLimiter);

// Routes
app.use("/api/notes", notesRoutes);

// Production frontend serve
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// DB connect & server start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
