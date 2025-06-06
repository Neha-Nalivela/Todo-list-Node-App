import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import todoroute from "./routes/todoroute.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
//const user = encodeURIComponent(process.env.DBUser);
//const user = encodeURIComponent(process.env.DBPass); 
//const MONGODB_URI = `mongodb+srv://${DBUser}:${DBPass}@cluster0.fejtw9t.mongodb.net/gcet?retryWrites=true&w=majority&appName=Cluster0`

app.use("/tasks", todoroute);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });