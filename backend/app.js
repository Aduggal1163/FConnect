import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { createServer } from "node:http";
import { Server } from "socket.io";
import connectToSocket from "./src/controllers/socketManager.js";

import userRoutes from "./src/routes/users.routes.js"

const app = express();

const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" })); // limit islyi vi payload jyada na chla jaaye
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users",userRoutes);

const start = async () => {
  app.set("mongo_user");
  const connectionDb = await mongoose.connect(
    "mongodb+srv://abhishekduggal04:abhishekduggal04@cluster0.swrgy.mongodb.net/"
  );
  console.log("mongo connected");
  server.listen(app.get("port"), () => {
    console.log("LISTENIN ON PORT 8000");
  });
};
start();