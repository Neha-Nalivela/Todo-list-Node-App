import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import todoroute from "./routes/todoroute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());  // to parse JSON bodies

// Use the tasks router for /tasks path
app.use("/tasks", todoroute);

const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB and start the server
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(8080, () => {
      console.log("Server started on port 8080");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
