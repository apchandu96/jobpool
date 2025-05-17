import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes";
import profileRoutes from "./routes/profileRoutes";
import swipeRoutes from "./routes/swipeRoutes";
import chatRoutes from "./routes/chatRoutes";
import { registerSocketHandlers } from "./sockets";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, { cors: { origin: "*" } });

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/swipes", swipeRoutes);
app.use("/api/chats", chatRoutes);

registerSocketHandlers(io);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Mongo connected");
    server.listen(PORT, () => console.log(`Server on ${PORT}`));
  })
  .catch(err => { console.error(err); process.exit(1); });
